"""
=============================================================================
[인공지능 기초 탐구 프로젝트]
주제: 2028 대입 개편 대비 식품계열 학과 내신 합격 커트라인 예측 프로그램
기계학습 유형: 지도학습 (Supervised Learning - 회귀 분석)
데이터 출처: 대입정보포털 대학 어디가(adiga.kr)
작성자: 조하은 (20827)
=============================================================================
"""

import pandas as pd
import numpy as np

# 1. 데이터 불러오기
try:
    df = pd.read_csv('adiga_food_dataset.csv', encoding='utf-8')
except UnicodeDecodeError:
    df = pd.read_csv('adiga_food_dataset.csv', encoding='cp949')

print("="*60)
print("1. [데이터 탐색] 어디가(adiga.kr) 식품계열 수집 데이터셋")
print("="*60)
print(f"- 수집 데이터 수: {len(df)}개 대학 및 학과")
print(f"- 수집 지역: 경기, 부산, 서울, 제주, 충남, 충북")
print(f"- 취업률 범위: 60% ~ 90% 이상")
print(df.head(5)[['university', 'department', 'region', 'employment_rate', 'competition_rate', 'adiga_cut_70', 'converted_cut_2028']])

# 2. 전처리 및 특성(Feature) / 정답 레이블(Target) 분리
# 지도학습에서는 문제(X)와 정답(y)을 분리하여 컴퓨터에게 학습시킵니다.
features = ['employment_rate', 'competition_rate', 'recruit_num']
# 범주형 변수(지역, 전형유형) 원-핫 인코딩
df_encoded = pd.get_dummies(df, columns=['region', 'admission_type'], drop_first=True)

feature_cols = [c for c in df_encoded.columns if c not in ['university', 'department', 'adiga_cut_70', 'adiga_cut_50', 'converted_cut_2028']]
X = df_encoded[feature_cols]

# 타깃 y: 2028 대입 5등급제 기준 예상 내신 커트라인
y_2028 = df_encoded['converted_cut_2028']
# 타깃 y_orig: 현행 9등급제 70% 컷
y_orig = df_encoded['adiga_cut_70']

# 3. 데이터 분할 (학습용 Train Set vs 평가용 Test Set = 8:2)
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression, Ridge
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score

X_train, X_test, y_train, y_test = train_test_split(X, y_2028, test_size=0.2, random_state=42)

print("\n" + "="*60)
print("2. [지도학습 모델 훈련] 학습용 데이터:", X_train.shape, "평가용 데이터:", X_test.shape)
print("="*60)

# 다중 선형 회귀 모델 학습
lr_model = LinearRegression()
lr_model.fit(X_train, y_train)
y_pred_lr = lr_model.predict(X_test)

# 랜덤 포레스트 회귀 모델 학습
rf_model = RandomForestRegressor(n_estimators=50, random_state=42)
rf_model.fit(X_train, y_train)
y_pred_rf = rf_model.predict(X_test)

# 4. 지도학습 모델 성능 평가
print("\n[다중 선형 회귀 (Linear Regression) 성능]")
print(f"- R² Score (결정계수): {r2_score(y_test, y_pred_lr):.4f}")
print(f"- MAE (평균절대오차): {mean_absolute_error(y_test, y_pred_lr):.4f} 등급")
print(f"- RMSE (평균제곱근오차): {np.sqrt(mean_squared_error(y_test, y_pred_lr)):.4f} 등급")

print("\n[랜덤 포레스트 회귀 (Random Forest) 성능]")
print(f"- R² Score (결정계수): {r2_score(y_test, y_pred_rf):.4f}")
print(f"- MAE (평균절대오차): {mean_absolute_error(y_test, y_pred_rf):.4f} 등급")
print(f"- RMSE (평균제곱근오차): {np.sqrt(mean_squared_error(y_test, y_pred_rf)):.4f} 등급")

# 5. 특성 중요도(Feature Importance) 분석
print("\n" + "="*60)
print("3. [특성 가중치 및 중요도 분석] 내신 커트라인에 미치는 영향")
print("="*60)
weights = pd.Series(lr_model.coef_, index=feature_cols).sort_values()
for feat, w in weights.items():
    print(f"- {feat:<25}: 가중치(회귀계수) = {w:+.4f}")

# 6. 신규 입력 데이터에 대한 2028 대입 내신 커트라인 예측 함수
def predict_2028_cut(emp_rate, comp_rate, recruit, region='서울', adm_type='학생부교과'):
    """
    사용자가 원하는 조건(취업률, 경쟁률, 모집인원, 지역, 전형)을 입력하면
    학습된 지도학습 모델이 2028학년도 5등급제 예상 내신 커트라인을 반환합니다.
    """
    input_data = pd.DataFrame(0, index=[0], columns=feature_cols)
    input_data['employment_rate'] = emp_rate
    input_data['competition_rate'] = comp_rate
    input_data['recruit_num'] = recruit
    
    region_col = f"region_{region}"
    if region_col in feature_cols:
        input_data[region_col] = 1
        
    adm_col = f"admission_type_{adm_type}"
    if adm_col in feature_cols:
        input_data[adm_col] = 1
        
    pred_2028 = lr_model.predict(input_data)[0]
    return round(pred_2028, 2)

print("\n" + "="*60)
print("4. [가상 대학 조건 예측 시뮬레이션]")
print("="*60)
case1 = predict_2028_cut(emp_rate=75.0, comp_rate=15.0, recruit=20, region='서울', adm_type='학생부교과')
case2 = predict_2028_cut(emp_rate=65.0, comp_rate=7.0, recruit=25, region='충남', adm_type='학생부교과')
print(f"- 사례 1: 서울권 식품공학 (취업률 75%, 경쟁률 15:1) -> 2028 5등급제 예상 컷: {case1} 등급")
print(f"- 사례 2: 충남권 식품공학 (취업률 65%, 경쟁률 7:1)  -> 2028 5등급제 예상 컷: {case2} 등급")
print("\n프로그램 학습 및 검증이 정상적으로 완료되었습니다.")
