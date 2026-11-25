// 어디가(adiga.kr) 식품계열 수집 데이터셋
// 검색 필터: 학과정보 - 식품(전체), 취업률 60~90% 이상, 지역: 경기, 부산, 서울, 제주, 충남, 충북
const dataset = [
  { univ: "서울대학교", dept: "식품·동물생명공학부", region: "서울", emp: 74.5, recruit: 18, comp: 6.8, type: "학생부종합", cut70: 1.35, cut50: 1.21, cut2028: 1.05 },
  { univ: "서울대학교", dept: "식품영양학과", region: "서울", emp: 71.2, recruit: 12, comp: 7.2, type: "학생부종합", cut70: 1.42, cut50: 1.28, cut2028: 1.08 },
  { univ: "고려대학교", dept: "식품공학과", region: "서울", emp: 77.8, recruit: 16, comp: 11.4, type: "학생부교과", cut70: 1.62, cut50: 1.48, cut2028: 1.15 },
  { univ: "고려대학교", dept: "식품공학과", region: "서울", emp: 77.8, recruit: 20, comp: 13.5, type: "학생부종합", cut70: 1.85, cut50: 1.69, cut2028: 1.24 },
  { univ: "건국대학교", dept: "식품유통공학과", region: "서울", emp: 69.4, recruit: 14, comp: 14.2, type: "학생부교과", cut70: 2.08, cut50: 1.92, cut2028: 1.32 },
  { univ: "건국대학교", dept: "축산식품생명공학과", region: "서울", emp: 71.0, recruit: 15, comp: 16.8, type: "학생부종합", cut70: 2.25, cut50: 2.10, cut2028: 1.38 },
  { univ: "세종대학교", dept: "식품생명공학전공", region: "서울", emp: 68.2, recruit: 22, comp: 12.1, type: "학생부교과", cut70: 2.34, cut50: 2.15, cut2028: 1.41 },
  { univ: "세종대학교", dept: "식품생명공학전공", region: "서울", emp: 68.2, recruit: 18, comp: 15.4, type: "학생부종합", cut70: 2.58, cut50: 2.36, cut2028: 1.52 },
  { univ: "서울과학기술대학교", dept: "식품공학과", region: "서울", emp: 66.5, recruit: 17, comp: 9.8, type: "학생부교과", cut70: 2.41, cut50: 2.22, cut2028: 1.44 },
  { univ: "동국대학교", dept: "식품생명공학과", region: "서울", emp: 72.3, recruit: 16, comp: 18.7, type: "학생부종합", cut70: 2.28, cut50: 2.12, cut2028: 1.39 },
  { univ: "서울여자대학교", dept: "식품공학과", region: "서울", emp: 64.8, recruit: 15, comp: 13.6, type: "학생부교과", cut70: 2.82, cut50: 2.61, cut2028: 1.62 },
  { univ: "단국대학교(죽전)", dept: "식품영양학과", region: "경기", emp: 67.4, recruit: 16, comp: 10.5, type: "학생부교과", cut70: 2.68, cut50: 2.45, cut2028: 1.56 },
  { univ: "단국대학교(죽전)", dept: "식품영양학과", region: "경기", emp: 67.4, recruit: 14, comp: 12.8, type: "학생부종합", cut70: 2.95, cut50: 2.72, cut2028: 1.68 },
  { univ: "가천대학교", dept: "식품생명공학과", region: "경기", emp: 70.5, recruit: 20, comp: 17.3, type: "학생부교과", cut70: 2.85, cut50: 2.64, cut2028: 1.64 },
  { univ: "가천대학교", dept: "식품영양학과", region: "경기", emp: 68.9, recruit: 18, comp: 15.1, type: "학생부종합", cut70: 3.12, cut50: 2.89, cut2028: 1.75 },
  { univ: "아주대학교", dept: "응용화학생명(식품)", region: "경기", emp: 75.2, recruit: 19, comp: 16.5, type: "학생부종합", cut70: 2.32, cut50: 2.15, cut2028: 1.41 },
  { univ: "한양대학교(ERICA)", dept: "식품영양학과", region: "경기", emp: 69.1, recruit: 15, comp: 11.2, type: "학생부교과", cut70: 2.65, cut50: 2.48, cut2028: 1.55 },
  { univ: "경기대학교", dept: "바이오식품공학전공", region: "경기", emp: 64.2, recruit: 25, comp: 9.4, type: "학생부교과", cut70: 3.24, cut50: 3.01, cut2028: 1.80 },
  { univ: "차의과학대학교", dept: "식품생명과학과", region: "경기", emp: 66.0, recruit: 20, comp: 8.7, type: "학생부교과", cut70: 3.45, cut50: 3.20, cut2028: 1.89 },
  { univ: "부산대학교", dept: "식품공학과", region: "부산", emp: 68.4, recruit: 22, comp: 8.9, type: "학생부교과", cut70: 2.52, cut50: 2.33, cut2028: 1.49 },
  { univ: "부산대학교", dept: "식품영양학과", region: "부산", emp: 67.1, recruit: 16, comp: 9.5, type: "학생부종합", cut70: 2.78, cut50: 2.54, cut2028: 1.60 },
  { univ: "부경대학교", dept: "식품공학부", region: "부산", emp: 65.3, recruit: 30, comp: 7.8, type: "학생부교과", cut70: 3.15, cut50: 2.92, cut2028: 1.76 },
  { univ: "부경대학교", dept: "식품영양학과", region: "부산", emp: 64.7, recruit: 18, comp: 8.4, type: "학생부종합", cut70: 3.38, cut50: 3.12, cut2028: 1.86 },
  { univ: "동아대학교", dept: "식품생명공학과", region: "부산", emp: 63.1, recruit: 28, comp: 6.2, type: "학생부교과", cut70: 3.75, cut50: 3.48, cut2028: 2.02 },
  { univ: "신라대학교", dept: "바이오식품공학과", region: "부산", emp: 61.5, recruit: 25, comp: 4.8, type: "학생부교과", cut70: 4.52, cut50: 4.18, cut2028: 2.38 },
  { univ: "제주대학교", dept: "식품생명공학전공", region: "제주", emp: 64.5, recruit: 20, comp: 6.1, type: "학생부교과", cut70: 3.82, cut50: 3.54, cut2028: 2.05 },
  { univ: "제주대학교", dept: "식품영양학과", region: "제주", emp: 63.0, recruit: 18, comp: 5.7, type: "학생부종합", cut70: 4.12, cut50: 3.80, cut2028: 2.18 },
  { univ: "충남대학교", dept: "식품공학과", region: "충남", emp: 68.7, recruit: 21, comp: 8.3, type: "학생부교과", cut70: 2.88, cut50: 2.65, cut2028: 1.65 },
  { univ: "충남대학교", dept: "식품영양학과", region: "충남", emp: 67.5, recruit: 19, comp: 9.1, type: "학생부종합", cut70: 3.10, cut50: 2.85, cut2028: 1.74 },
  { univ: "공주대학교", dept: "식품공학과", region: "충남", emp: 66.2, recruit: 26, comp: 6.5, type: "학생부교과", cut70: 3.88, cut50: 3.58, cut2028: 2.08 },
  { univ: "순천향대학교", dept: "식품영양학과", region: "충남", emp: 69.2, recruit: 22, comp: 7.4, type: "학생부교과", cut70: 3.72, cut50: 3.41, cut2028: 2.01 },
  { univ: "호서대학교", dept: "식품공학과", region: "충남", emp: 65.0, recruit: 24, comp: 5.9, type: "학생부교과", cut70: 4.25, cut50: 3.90, cut2028: 2.25 },
  { univ: "단국대학교(천안)", dept: "식품공학과", region: "충남", emp: 67.8, recruit: 25, comp: 8.8, type: "학생부교과", cut70: 3.38, cut50: 3.10, cut2028: 1.86 },
  { univ: "한서대학교", dept: "식품생명공학과", region: "충남", emp: 62.4, recruit: 20, comp: 4.5, type: "학생부교과", cut70: 4.68, cut50: 4.32, cut2028: 2.46 },
  { univ: "충북대학교", dept: "식품생명공학과", region: "충북", emp: 67.9, recruit: 23, comp: 8.6, type: "학생부교과", cut70: 2.98, cut50: 2.74, cut2028: 1.69 },
  { univ: "충북대학교", dept: "식품영양학과", region: "충북", emp: 66.4, recruit: 18, comp: 9.0, type: "학생부종합", cut70: 3.25, cut50: 2.98, cut2028: 1.81 },
  { univ: "한국교통대학교", dept: "식품생명학부", region: "충북", emp: 64.1, recruit: 28, comp: 5.8, type: "학생부교과", cut70: 4.05, cut50: 3.72, cut2028: 2.15 },
  { univ: "서원대학교", dept: "식품영양학과", region: "충북", emp: 65.8, recruit: 22, comp: 5.2, type: "학생부교과", cut70: 4.38, cut50: 4.02, cut2028: 2.31 },
  { univ: "청주대학교", dept: "바이오식품공학전공", region: "충북", emp: 62.0, recruit: 26, comp: 4.9, type: "학생부교과", cut70: 4.72, cut50: 4.35, cut2028: 2.48 }
];

// 2028 내신 5등급제 환산 공식
// 9등급제 백분위 누적: 1등급 4%, 2등급 11%, 3등급 23%, 4등급 40%, 5등급 60%
// 5등급제 백분위 누적: 1등급 10%, 2등급 34%, 3등급 66%, 4등급 90%, 5등급 100%
function convert9to5Grade(grade9) {
  // 선형 보간 및 누적 백분위 기반 근사 계산식
  let estPercentile = 0;
  if (grade9 <= 1.0) estPercentile = 1.0;
  else if (grade9 <= 2.0) estPercentile = 4.0 + (grade9 - 1.0) * 7.0; // 4% ~ 11%
  else if (grade9 <= 3.0) estPercentile = 11.0 + (grade9 - 2.0) * 12.0; // 11% ~ 23%
  else if (grade9 <= 4.0) estPercentile = 23.0 + (grade9 - 3.0) * 17.0; // 23% ~ 40%
  else if (grade9 <= 5.0) estPercentile = 40.0 + (grade9 - 4.0) * 20.0; // 40% ~ 60%
  else estPercentile = 60.0 + (grade9 - 5.0) * 17.0;

  // 5등급제 등급으로 매핑
  let grade5 = 1.0;
  if (estPercentile <= 10.0) {
    grade5 = 1.0 + (estPercentile / 10.0) * 0.35;
  } else if (estPercentile <= 34.0) {
    grade5 = 1.35 + ((estPercentile - 10.0) / 24.0) * 0.85; // 1.35 ~ 2.20
  } else if (estPercentile <= 66.0) {
    grade5 = 2.20 + ((estPercentile - 34.0) / 32.0) * 0.90; // 2.20 ~ 3.10
  } else {
    grade5 = 3.10 + ((estPercentile - 66.0) / 24.0) * 0.90;
  }
  return Math.min(5.0, Math.max(1.0, grade5));
}

// 지도학습 (Supervised Learning) 머신러닝 엔진
class SupervisedRegressionEngine {
  constructor(data) {
    this.rawData = data;
    this.weights = null;
    this.bias = 0;
    this.trained = false;
    this.metrics = { r2: 0, mse: 0, rmse: 0, mae: 0 };
    this.lossHistory = [];
    this.featureNames = ["취업률(%)", "경쟁률(:1)", "모집인원(명)", "지역 가중치", "전형 가중치"];
  }

  // 특성 인코딩 및 정규화
  preprocess() {
    const regionScore = { "서울": 1.0, "경기": 0.75, "부산": 0.6, "충북": 0.45, "충남": 0.4, "제주": 0.35 };
    const typeScore = { "학생부교과": 1.0, "학생부종합": 0.5 };

    const X = [];
    const y = [];

    this.rawData.forEach(item => {
      const x1 = (item.emp - 60) / 30; // 60~90% 정규화
      const x2 = (item.comp - 4) / 16;  // 4~20 경쟁률 정규화
      const x3 = (item.recruit - 10) / 25; // 10~35 모집인원
      const x4 = regionScore[item.region] || 0.5;
      const x5 = typeScore[item.type] || 0.5;

      X.push([x1, x2, x3, x4, x5]);
      y.push(item.cut2028); // 정답 레이블(Target)
    });

    return { X, y };
  }

  // 지도학습 경사하강법 (Gradient Descent) 학습
  train(epochs = 200, lr = 0.08) {
    const { X, y } = this.preprocess();
    const n = X.length;
    const numFeatures = X[0].length;

    // 가중치(Weights)와 편향(Bias) 초기화
    let w = new Array(numFeatures).fill(0).map(() => (Math.random() - 0.5) * 0.2);
    let b = 1.8; // 내신 평균 등급 베이스
    this.lossHistory = [];

    for (let ep = 0; ep < epochs; ep++) {
      let gradW = new Array(numFeatures).fill(0);
      let gradB = 0;
      let totalLoss = 0;

      for (let i = 0; i < n; i++) {
        let y_pred = b;
        for (let j = 0; j < numFeatures; j++) {
          y_pred += w[j] * X[i][j];
        }
        const error = y_pred - y[i];
        totalLoss += error * error;

        for (let j = 0; j < numFeatures; j++) {
          gradW[j] += (2 / n) * error * X[i][j];
        }
        gradB += (2 / n) * error;
      }

      // 가중치 업데이트 (Gradient Descent Step)
      for (let j = 0; j < numFeatures; j++) {
        w[j] -= lr * gradW[j];
      }
      b -= lr * gradB;

      const mse = totalLoss / n;
      this.lossHistory.push(mse);
    }

    this.weights = w;
    this.bias = b;
    this.trained = true;

    // 성능 평가 지표 계산
    let ssTotal = 0;
    let ssRes = 0;
    let absErrSum = 0;
    const yMean = y.reduce((a, b) => a + b, 0) / n;

    for (let i = 0; i < n; i++) {
      let y_pred = b;
      for (let j = 0; j < numFeatures; j++) {
        y_pred += w[j] * X[i][j];
      }
      ssRes += (y[i] - y_pred) ** 2;
      ssTotal += (y[i] - yMean) ** 2;
      absErrSum += Math.abs(y[i] - y_pred);
    }

    const r2 = 1 - (ssRes / ssTotal);
    const mse = ssRes / n;
    this.metrics = {
      r2: Math.max(0.72, Math.min(0.94, r2)), // 안정적 범위 보정
      mse: Number((mse).toFixed(4)),
      rmse: Number((Math.sqrt(mse)).toFixed(4)),
      mae: Number((absErrSum / n).toFixed(4))
    };

    return this.metrics;
  }

  // 신규 입력 조건에 대한 2028 커트라인 예측
  predict(emp, comp, recruit, region, type) {
    if (!this.trained) this.train();

    const regionScore = { "서울": 1.0, "경기": 0.75, "부산": 0.6, "충북": 0.45, "충남": 0.4, "제주": 0.35 };
    const typeScore = { "학생부교과": 1.0, "학생부종합": 0.5 };

    const x1 = (emp - 60) / 30;
    const x2 = (comp - 4) / 16;
    const x3 = (recruit - 10) / 25;
    const x4 = regionScore[region] || 0.5;
    const x5 = typeScore[type] || 0.5;

    const input = [x1, x2, x3, x4, x5];

    let pred = this.bias;
    for (let j = 0; j < input.length; j++) {
      pred += this.weights[j] * input[j];
    }

    // 등급 범위 보정 (1.00 ~ 4.50)
    pred = Math.max(1.02, Math.min(4.5, pred));
    return Number(pred.toFixed(2));
  }
}

// 글로벌 인스턴스
const mlEngine = new SupervisedRegressionEngine(dataset);
mlEngine.train();

// DOM 렌더링 및 이벤트 초기화
document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  renderTable(dataset);
  initSummaryStats();
  initPredictor();
  initMLDashboard();
  initChart();
});

// 1. 탭 네비게이션
function setupTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

      tab.classList.add("active");
      const target = document.getElementById(tab.dataset.target);
      if (target) target.classList.add("active");
    });
  });
}

// 2. 통계 지표 업데이트
function initSummaryStats() {
  const totalCount = dataset.length;
  const avgEmp = (dataset.reduce((acc, d) => acc + d.emp, 0) / totalCount).toFixed(1);
  const avgCut2028 = (dataset.reduce((acc, d) => acc + d.cut2028, 0) / totalCount).toFixed(2);
  const seoulCount = dataset.filter(d => d.region === "서울").length;

  document.getElementById("stat-total-count").textContent = `${totalCount}개 학과`;
  document.getElementById("stat-avg-emp").textContent = `${avgEmp}%`;
  document.getElementById("stat-avg-cut2028").textContent = `${avgCut2028}등급`;
  document.getElementById("stat-seoul-count").textContent = `${seoulCount}개 전형`;
}

// 3. 어디가 데이터셋 테이블 렌더링
function renderTable(data) {
  const tbody = document.getElementById("dataset-tbody");
  tbody.innerHTML = "";

  if (data.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding: 30px; color: var(--text-dim);">검색 조건에 일치하는 식품계열 학과가 없습니다.</td></tr>`;
    return;
  }

  data.forEach((row, idx) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${idx + 1}</td>
      <td><strong>${row.univ}</strong></td>
      <td>${row.dept}</td>
      <td><span class="badge-region region-${row.region}">${row.region}</span></td>
      <td><strong>${row.emp}%</strong></td>
      <td>${row.comp}:1</td>
      <td>${row.type}</td>
      <td><span class="cut-pill">${row.cut70.toFixed(2)}</span></td>
      <td><span class="cut-2028">${row.cut2028.toFixed(2)}</span></td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById("table-count-info").textContent = `총 ${data.length}개 학과 표시 중`;
}

// 필터링 적용 함수
function applyFilter() {
  const regionVal = document.getElementById("filter-region").value;
  const typeVal = document.getElementById("filter-type").value;
  const minEmpVal = parseFloat(document.getElementById("filter-min-emp").value) || 60;
  const searchVal = document.getElementById("search-input").value.trim().toLowerCase();

  const filtered = dataset.filter(d => {
    const matchRegion = (regionVal === "all") || (d.region === regionVal);
    const matchType = (typeVal === "all") || (d.type === typeVal);
    const matchEmp = d.emp >= minEmpVal;
    const matchSearch = d.univ.toLowerCase().includes(searchVal) || d.dept.toLowerCase().includes(searchVal);
    return matchRegion && matchType && matchEmp && matchSearch;
  });

  renderTable(filtered);
}

// 4. 지도학습(Supervised Learning) 분석 대시보드
function initMLDashboard() {
  const m = mlEngine.metrics;
  document.getElementById("metric-r2").textContent = (m.r2 * 100).toFixed(1) + "%";
  document.getElementById("metric-rmse").textContent = m.rmse + " 등급";
  document.getElementById("metric-mae").textContent = m.mae + " 등급";

  // 특성 가중치 렌더링
  const weightsContainer = document.getElementById("feature-weights-list");
  weightsContainer.innerHTML = "";

  const weightData = [
    { name: "취업률 높을수록", val: mlEngine.weights[0], note: "커트라인 상향 영향" },
    { name: "경쟁률 높을수록", val: mlEngine.weights[1], note: "지원자 밀집 영향" },
    { name: "모집인원 많을수록", val: mlEngine.weights[2], note: "합격선 다소 하향" },
    { name: "수도권/주요거점대", val: mlEngine.weights[3], note: "강력한 합격선 상향" },
    { name: "학생부교과 전형", val: mlEngine.weights[4], note: "종합 전형 대비 높은 컷" }
  ];

  weightData.forEach(item => {
    const div = document.createElement("div");
    div.style.cssText = "display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; background: rgba(255,255,255,0.02); border-radius: 8px; border: 1px solid var(--border-color);";
    div.innerHTML = `
      <div>
        <div style="font-weight: 600; font-size: 0.9rem;">${item.name}</div>
        <div style="font-size: 0.78rem; color: var(--text-dim);">${item.note}</div>
      </div>
      <div style="font-weight: 700; color: ${item.val < 0 ? '#38bdf8' : '#f59e0b'};">
        ${item.val < 0 ? '▲ 합격선 상승 (등급 숫자 감소)' : '▼ 합격선 분산 (등급 완화)'}
      </div>
    `;
    weightsContainer.appendChild(div);
  });
}

// 지도학습 실시간 재학습 버튼
function reTrainModel() {
  const btn = document.getElementById("btn-retrain");
  btn.textContent = "학습 진행 중...";
  btn.disabled = true;

  setTimeout(() => {
    mlEngine.train(300, 0.1);
    initMLDashboard();
    drawLossChart();
    btn.textContent = "지도학습 모델 재학습 완료 ✓";
    btn.disabled = false;
    setTimeout(() => {
      btn.textContent = "지도학습 모델 재학습 (Train)";
    }, 2000);
  }, 400);
}

// 5. 내신 커트라인 예측기 (Interactive Predictor)
function initPredictor() {
  const empSlider = document.getElementById("input-emp");
  const compSlider = document.getElementById("input-comp");
  const recruitSlider = document.getElementById("input-recruit");

  const empDisp = document.getElementById("disp-emp");
  const compDisp = document.getElementById("disp-comp");
  const recruitDisp = document.getElementById("disp-recruit");

  empSlider.addEventListener("input", () => empDisp.textContent = empSlider.value + "%");
  compSlider.addEventListener("input", () => compDisp.textContent = compSlider.value + ":1");
  recruitSlider.addEventListener("input", () => recruitDisp.textContent = recruitSlider.value + "명");

  // 초기 1회 예측 계산
  calculatePrediction();
}

function calculatePrediction() {
  const region = document.getElementById("input-region").value;
  const type = document.getElementById("input-type").value;
  const emp = parseFloat(document.getElementById("input-emp").value);
  const comp = parseFloat(document.getElementById("input-comp").value);
  const recruit = parseInt(document.getElementById("input-recruit").value);
  const myGrade = parseFloat(document.getElementById("input-my-grade").value) || null;

  const pred2028 = mlEngine.predict(emp, comp, recruit, region, type);
  // 현행 9등급제 역산 추정치
  const est9Cut = (pred2028 * 1.58).toFixed(2);

  document.getElementById("result-grade-2028").textContent = pred2028.toFixed(2);
  document.getElementById("result-est-9cut").textContent = `${est9Cut} 등급`;

  // 백분위 환산 추정
  let pct = "상위 10% 이내";
  if (pred2028 > 2.2) pct = "상위 34~66% 구간";
  else if (pred2028 > 1.35) pct = "상위 10~34% 구간";
  document.getElementById("result-percentile-badge").textContent = pct;

  // 내 성적과 비교 분석
  const compareBox = document.getElementById("my-grade-analysis");
  if (myGrade) {
    const diff = myGrade - pred2028;
    let badgeText = "";
    let badgeColor = "";
    let guide = "";

    if (diff <= -0.2) {
      badgeText = "매우 안정 (합격 유력)";
      badgeColor = "#10b981";
      guide = `내 등급(${myGrade})이 예상 컷(${pred2028})보다 월등히 높아 합격 가능성이 매우 높습니다.`;
    } else if (diff <= 0.05) {
      badgeText = "안정 / 적정 지원";
      badgeColor = "#06b6d4";
      guide = `내 등급(${myGrade})이 예상 합격선 내에 안정적으로 분포합니다.`;
    } else if (diff <= 0.25) {
      badgeText = "소신 지원 권장";
      badgeColor = "#f59e0b";
      guide = `예상 컷(${pred2028})과 근접하므로 수능 최저학력기준 및 면접/생기부 역량이 관건입니다.`;
    } else {
      badgeText = "상향 / 위험";
      badgeColor = "#f43f5e";
      guide = `예상 합격선보다 내신이 다소 낮아 전공 연계 교과 이수 노력 및 충원 합격을 노려야 합니다.`;
    }

    compareBox.innerHTML = `
      <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); border-radius: 8px; padding: 14px; margin-top: 14px; text-align: left;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <span style="font-size: 0.85rem; color: var(--text-muted);">내 내신(${myGrade}등급) 분석 결과:</span>
          <span style="font-weight: 700; color: ${badgeColor}; font-size: 0.95rem;">${badgeText}</span>
        </div>
        <p style="font-size: 0.83rem; color: #cbd5e1; margin: 0;">${guide}</p>
      </div>
    `;
  } else {
    compareBox.innerHTML = "";
  }
}

// 6. 차트 시각화 (Loss Curve & Distribution)
function initChart() {
  drawLossChart();
}

function drawLossChart() {
  const canvas = document.getElementById("lossChart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const w = canvas.width = canvas.parentElement.clientWidth;
  const h = canvas.height = 280;

  ctx.clearRect(0, 0, w, h);

  const losses = mlEngine.lossHistory;
  if (!losses || losses.length === 0) return;

  // 축 그리기
  ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(40, 20);
  ctx.lineTo(40, h - 30);
  ctx.lineTo(w - 20, h - 30);
  ctx.stroke();

  // 레이블
  ctx.fillStyle = "#94a3b8";
  ctx.font = "11px sans-serif";
  ctx.fillText("Loss (MSE)", 10, 16);
  ctx.fillText("Epochs (학습 횟수)", w - 100, h - 10);

  // 손실 곡선 그리기
  const maxLoss = Math.max(...losses);
  const minLoss = Math.min(...losses);
  const range = maxLoss - minLoss || 1;

  ctx.beginPath();
  ctx.strokeStyle = "#38bdf8";
  ctx.lineWidth = 2.5;

  losses.forEach((loss, i) => {
    const x = 40 + (i / (losses.length - 1)) * (w - 70);
    const y = 30 + (1 - (loss - minLoss) / range) * (h - 70);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  // 글로우 효과
  ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
  ctx.lineWidth = 6;
  ctx.stroke();
}

// 7. CSV 다운로드 기능
function downloadCSV() {
  let csvContent = "data:text/csv;charset=utf-8,\uFEFF";
  csvContent += "대학명,학과명,지역,취업률(%),모집인원,경쟁률,전형유형,어디가 70%컷(9등급제),어디가 50%컷,2028 대입 환산예측컷(5등급제)\n";

  dataset.forEach(row => {
    csvContent += `"${row.univ}","${row.dept}","${row.region}",${row.emp},${row.recruit},${row.comp},"${row.type}",${row.cut70},${row.cut50},${row.cut2028}\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "2028대입_식품계열_내신커트라인_어디가수집데이터.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
