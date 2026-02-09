'use client';

import { useMemo, useState } from 'react';

const reportSections = [
  {
    title: '요약: AI가 이끄는 2030 비즈니스 지형',
    description:
      '생성형 AI와 자율 에이전트는 기업 운영 전반을 재편하며, 인간-머신 협업 기반의 초개인화 경험이 경쟁력의 핵심으로 부상합니다. 본 보고서는 기술, 산업, 거버넌스 관점에서 2030년을 내다보고 전략적 대응 방향을 제시합니다.',
    items: [
      '2028년까지 지식 노동의 45%가 AI 보조형으로 전환, 생산성 2.7배 향상 예상',
      '실시간 멀티모달 AI가 고객 경험을 재정의, 초개인화 서비스가 기본 경쟁 요소로 정착',
      '책임 있는 AI 거버넌스와 데이터 주권 확보가 기업 신뢰도의 핵심 지표로 변모',
    ],
  },
  {
    title: '핵심 기술 트렌드와 전개 속도',
    description:
      'AI 인프라는 모델·데이터·컴퓨팅의 삼박자 혁신이 동시 진행되는 다층 생태계로 진화합니다. 기업은 단일 모델 의존을 벗어나 업무 목적에 최적화된 조합 전략이 필요합니다.',
    items: [
      '오픈웨이트와 전용 사내 모델이 공존하는 멀티모델 전략이 주류화',
      '온디바이스 AI가 개인화 데이터 처리를 담당하며 개인 에이전트 시장을 촉발',
      '에지-클라우드 하이브리드 아키텍처가 실시간 의사결정과 보안을 동시에 충족',
    ],
  },
  {
    title: '산업별 임팩트 우선순위',
    description:
      '산업마다 가치 창출 지점은 다르지만, 운영 자동화와 서비스 혁신이 공통 분모입니다. 초기 효과가 빠르게 나타나는 분야부터 단계적 확장을 설계해야 합니다.',
    items: [
      '제조: AI 기반 자율 공정과 디지털 트윈으로 불량률 30% 감소, 에너지 효율 18% 개선',
      '금융: 실시간 리스크 감지와 초개인화 자산관리로 신규 수익 모델 창출',
      '헬스케어: 병원-재택 연계 진료로 환자 관리 비용 22% 절감, 임상 의사결정 지원 강화',
    ],
  },
  {
    title: '2024-2030 전략 로드맵',
    description:
      '단기 PoC를 넘어, 데이터 근간 재설계와 조직문화 전환을 포함한 장기 로드맵이 필요합니다. 연차별 실행 테마를 명확히 하고 ROI 측정 체계를 동시에 구축해야 합니다.',
    items: [
      '2024-2025: 데이터 라벨링 자동화, 모델 거버넌스 파일럿, AI 역량 진단',
      '2026-2027: 전사 업무 프로세스 AI 전환, AI 보안 프레임워크 정착, 파트너십 확장',
      '2028-2030: 자율 에이전트 기반 운영 표준화, 개인화 서비스 대중화, 지속가능성 연계 KPI 구현',
    ],
  },
  {
    title: '책임 있는 AI 및 규제 대응',
    description:
      'EU AI Act, NIST AI RMF 등 글로벌 규제 프레임워크를 기반으로 한 선제적 거버넌스 설계가 필수입니다. 투명성과 설명 가능성 확보가 브랜드 가치와 직결됩니다.',
    items: [
      'AI 라이프사이클 전 단계에서의 리스크 식별·모니터링 체계 구축',
      '데이터 편향 완화, 프라이버시 보존 학습, 모델 감사 프로세스 도입',
      '인간 검토 루프(HITL)와 자동화된 책임 추적 로그를 결합한 관리 체계 확립',
    ],
  },
];

const focusMetrics = [
  {
    label: 'AI 투자 대비 ROI',
    value: '3.8x',
    caption: '선도 기업 평균 (2023 기준)',
  },
  {
    label: '생성형 AI 도입률',
    value: '62%',
    caption: '지식 노동 중심 조직',
  },
  {
    label: '데이터 거버넌스 성숙도',
    value: 'Level 3→4',
    caption: '전환 필요 단계 (2025)',
  },
];

const timeline = [
  {
    period: '2024',
    highlight: '데이터 자산 정비와 PoC 집중',
    actions: '데이터 파이프라인 현대화, 모델 리스크 평가 지표 구축',
  },
  {
    period: '2025-2026',
    highlight: '전사 확장과 업무 통합',
    actions: 'AI CoE 고도화, 사내 모델 허브 운영, 하이브리드 클라우드 확장',
  },
  {
    period: '2027-2028',
    highlight: '자율 에이전트 기반 운영',
    actions: '멀티모달 에이전트 기반 고객·직원 경험 자동화, 실시간 거버넌스 연동',
  },
  {
    period: '2029-2030',
    highlight: '지속가능성과 신뢰성 내재화',
    actions: 'AI 탄소발자국 모니터링, 윤리 지표 공개, 인간-AI 공동 의사결정 프레임 적용',
  },
];

export default function HomePage() {
  const [downloadStatus, setDownloadStatus] = useState('idle');

  const headline = useMemo(
    () =>
      'AI는 더 이상 특정 부문의 도구가 아니라 기업 생태계 전체를 재정의하는 변곡점입니다. 지금 필요한 것은 강력한 실행 로드맵과 신뢰 기반의 거버넌스입니다.',
    []
  );

  const handleDownload = async () => {
    try {
      setDownloadStatus('loading');
      const response = await fetch('/api/presentation');
      if (!response.ok) {
        throw new Error('다운로드 실패');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'ai_future_insights.pptx';
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
      setDownloadStatus('success');
    } catch (error) {
      setDownloadStatus('error');
    }
  };

  const statusLabel = {
    idle: 'PPT 다운로드',
    loading: '생성 중...',
    success: '다운로드 완료',
    error: '다시 시도',
  };

  return (
    <main>
      <section className="hero">
        <span className="badge">2030 AI Future Outlook</span>
        <h1>AI 미래 전략 보고서</h1>
        <p>{headline}</p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button
            type="button"
            className="button"
            onClick={handleDownload}
            disabled={downloadStatus === 'loading'}
          >
            {statusLabel[downloadStatus]}
          </button>
          <a
            className="button secondary"
            href="#report-body"
          >
            보고서 자세히 보기
          </a>
        </div>
        <p className="status-text">
          보고서 요약과 함께 PPT 파일을 즉시 다운로드해 활용할 수 있습니다.
        </p>
      </section>

      <section id="report-body">
        <h2 style={{ fontSize: '1.6rem', marginBottom: '1.2rem' }}>핵심 지표 스냅샷</h2>
        <div className="card-grid">
          {focusMetrics.map((metric) => (
            <div key={metric.label} className="card">
              <span>{metric.label}</span>
              <h3>{metric.value}</h3>
              <span>{metric.caption}</span>
            </div>
          ))}
        </div>
      </section>

      {reportSections.map((section) => (
        <section key={section.title}>
          <h2 style={{ fontSize: '1.45rem', marginBottom: '0.9rem' }}>{section.title}</h2>
          <p>{section.description}</p>
          <ul>
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}

      <section>
        <h2 style={{ fontSize: '1.45rem', marginBottom: '1rem' }}>연차별 실행 로드맵</h2>
        <table className="table">
          <thead>
            <tr>
              <th>기간</th>
              <th>핵심 전환 포인트</th>
              <th>주요 실행 과제</th>
            </tr>
          </thead>
          <tbody>
            {timeline.map((row) => (
              <tr key={row.period}>
                <td>{row.period}</td>
                <td>{row.highlight}</td>
                <td>{row.actions}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="quote">
          “AI 전환 성공 기업은 기술 도입을 넘어 데이터, 인력, 윤리 체계를 동시에 재설계합니다. 조직의 학습 속도가 경쟁력을 좌우하는 시대입니다.”
        </div>
      </section>
    </main>
  );
}
