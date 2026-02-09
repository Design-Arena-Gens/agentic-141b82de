import PptxGenJS from 'pptxgenjs';

const slideContent = {
  title: 'AI 미래 전략 보고서',
  subtitle: '2030을 향한 인공지능 비즈니스 로드맵',
  sections: [
    {
      title: '1. 글로벌 메가트렌드',
      bullets: [
        '생성형 AI가 의사결정 전체 주기를 지원, 2028년 45% 업무 AI 보조화',
        '개인 맞춤형 에이전트 보급으로 고객 접점의 실시간 초개인화 구현',
        '책임 있는 AI 규제가 브랜드 신뢰와 투자 판단의 핵심 기준으로 부상',
      ],
    },
    {
      title: '2. 기술 인프라 전략',
      bullets: [
        '멀티모델·멀티클라우드 구조로 탄력적 서비스 구성 필요',
        '온디바이스 AI와 에지 컴퓨팅 결합으로 민감 데이터 현지 처리',
        'MLOps 고도화와 자동화된 거버넌스로 모델 품질·보안 확보',
      ],
    },
    {
      title: '3. 산업별 임팩트',
      bullets: [
        '제조: 자율 공정과 디지털 트윈으로 불량률 30% 감소',
        '금융: 실시간 리스크 감지 및 초개인화 자산관리로 신규 수익 창출',
        '헬스케어: 병원-재택 연계 진료로 관리 비용 22% 절감',
      ],
    },
    {
      title: '4. 2024-2030 실행 로드맵',
      bullets: [
        '24-25: 데이터 정비, 모델 거버넌스 파일럿, AI 역량 진단',
        '26-27: 전사 업무 AI 전환, 하이브리드 클라우드 확장',
        '28-30: 자율 에이전트 운영 표준화, 지속가능성 연계 KPI 정착',
      ],
    },
    {
      title: '5. 거버넌스와 리스크',
      bullets: [
        'AI 라이프사이클 전 단계 리스크 모니터링 체계 구축',
        '데이터 편향 완화 및 프라이버시 보존 학습 적용',
        '인간 검토 루프와 자동화된 책임 추적 로그 결합',
      ],
    },
  ],
  closing: {
    header: 'Next Step 제안',
    bullets: [
      'AI CoE(Control Tower) 설립 및 전사 협업 체계 정착',
      '핵심 KPI 기반 ROI 측정 대시보드 구축',
      '윤리·거버넌스 위원회와 기술위원회 이중 구조 운영',
    ],
  },
};

export async function GET() {
  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_16x9';

  const cover = pptx.addSlide();
  cover.background = { color: '0F172A' };
  cover.addText(slideContent.title, {
    x: 0.6,
    y: 1.2,
    fontSize: 38,
    color: 'F8FAFC',
    bold: true,
  });
  cover.addText(slideContent.subtitle, {
    x: 0.6,
    y: 2.4,
    fontSize: 24,
    color: '38BDF8',
  });
  cover.addShape(pptx.shapes.RECTANGLE, {
    x: 0,
    y: 0,
    w: 10,
    h: 0.65,
    fill: { color: '38BDF8' },
  });

  slideContent.sections.forEach((section, index) => {
    const slide = pptx.addSlide();
    slide.background = { color: '0B1120' };
    slide.addText(section.title, {
      x: 0.6,
      y: 0.5,
      fontSize: 28,
      color: 'C7D2FE',
      bold: true,
    });
    slide.addText(section.bullets.map((b) => `• ${b}`).join('\n'), {
      x: 0.8,
      y: 1.4,
      fontSize: 18,
      color: 'E2E8F0',
      lineSpacingMultiple: 1.2,
    });
    slide.addShape(pptx.shapes.LINE, {
      x: 0.6,
      y: 1.2,
      w: 8.8,
      line: { color: '1E293B', width: 1.4 },
    });

    slide.addText(`Key Insight ${index + 1}`, {
      x: 0.6,
      y: 6,
      fontSize: 14,
      color: '94A3B8',
    });
  });

  const finalSlide = pptx.addSlide();
  finalSlide.background = { color: '0F172A' };
  finalSlide.addText(slideContent.closing.header, {
    x: 0.6,
    y: 0.8,
    fontSize: 30,
    color: 'F1F5F9',
    bold: true,
  });
  finalSlide.addText(slideContent.closing.bullets.map((b) => `• ${b}`).join('\n'), {
    x: 0.8,
    y: 1.8,
    fontSize: 20,
    color: 'E0F2FE',
    lineSpacingMultiple: 1.3,
  });
  finalSlide.addText('문의: strategy@ai-future.com', {
    x: 0.6,
    y: 6.2,
    fontSize: 12,
    color: '64748B',
  });

  const buffer = await pptx.write('nodebuffer');

  return new Response(buffer, {
    headers: {
      'Content-Type':
        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'Content-Disposition': 'attachment; filename="ai_future_insights.pptx"',
    },
  });
}
