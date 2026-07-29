import { ScrollViewStyleReset } from 'expo-router/html';

const logoUrl = 'https://raw.githubusercontent.com/giftedu77-arch/blooming/main/assets/seaon-logo.png';

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <base href="/blooming/" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#C8F0E7" />
        <meta name="description" content="SEA:ON이 만든 해양 환경 실천 리워드 앱, 블루밍" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="블루밍 | SEA:ON" />
        <meta property="og:description" content="바다를 다시 켜다. 사진 인증으로 해양 환경 실천을 시작하세요." />
        <meta property="og:image" content={logoUrl} />
        <meta property="og:image:alt" content="SEA:ON 블루밍 로고" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="블루밍 | SEA:ON" />
        <meta name="twitter:description" content="바다를 다시 켜다." />
        <meta name="twitter:image" content={logoUrl} />
        <link rel="icon" href={logoUrl} />
        <ScrollViewStyleReset />
      </head>
      <body>{children}</body>
    </html>
  );
}
