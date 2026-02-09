import './globals.css';

export const metadata = {
  title: 'AI 미래 전략 보고서',
  description: '다가오는 인공지능 시대를 위한 심층 분석 보고서와 전략 제안',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
