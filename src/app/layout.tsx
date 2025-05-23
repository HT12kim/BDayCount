import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google'; // 실제 Geist 폰트 임포트 방식에 따라 수정될 수 있음
import Script from 'next/script';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
    // weight: ['400', '500', '700'], // 필요에 따라 weight 지정
    // display: 'swap', // 폰트 로딩 전략
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
    // weight: ['400', '500', '700'],
    // display: 'swap',
});

// 사이트 공통 정보 관리
const siteConfig = {
    title: '아기 생일 디데이 계산기 | 생후 며칠? 인스타그램용 생일 일수 계산기',
    description:
        '우리 아기 생일로부터 며칠 지났는지 자동 계산! 인스타그램 업로드용 생후 일수 복사 기능 지원. 초보 부모를 위한 육아 필수 웹앱.',
    url: 'https://bdaycnt.netlify.app/',
    ogImage: 'https://bdaycnt.netlify.app/og-image.png', // OG 이미지 경로
    keywords: [
        '아기 디데이',
        '생일 일수 계산기',
        '생후 며칠',
        '아기 생일',
        '신생아 육아',
        '100일 디데이',
        '200일',
        '생일 계산기',
        '인스타그램 육아',
        'D-Day 계산',
        '출산 후 일수',
        '아기 나이 계산기',
        '생후 계산기',
        '육아템',
        '아기 날짜 계산기',
    ],
    author: 'bdaycnt',
};

// Next.js Metadata API를 사용한 메타데이터 정의
export const metadata: Metadata = {
    // 기본 메타데이터
    title: siteConfig.title,
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author }], // 'author' 대신 'authors' 사용
    viewport: 'width=device-width, initial-scale=1.0',
    robots: 'index, follow', // 검색 엔진 로봇 정책

    // Favicon 설정 (public 폴더에 파일 위치 권장, URL은 환경에 맞게 조정)
    icons: {
        icon: [
            { url: 'https://bdaycnt.netlify.app/favicon.ico', type: 'image/x-icon', sizes: 'any' }, // 기존 shortcut icon 대체
            { url: 'https://bdaycnt.netlify.app/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: 'https://bdaycnt.netlify.app/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: 'https://bdaycnt.netlify.app/apple-touch-icon.png', // Apple 터치 아이콘
    },

    // Open Graph (Facebook, KakaoTalk 등) 메타데이터
    openGraph: {
        type: 'website',
        url: siteConfig.url,
        title: '아기 생일 디데이 계산기 | 생후 며칠?', // OG 전용 제목 (기존 <head> 태그 내용 활용)
        description:
            '우리 아기 생일로부터 며칠 지났는지 확인하고 인스타그램에 바로 복사! 초보 부모를 위한 육아 도우미 웹앱', // OG 전용 설명
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: '아기 생일 디데이 계산기 Open Graph 이미지',
            },
        ],
        locale: 'ko_KR',
        siteName: '아기 생일 디데이 계산기', // 사이트 이름
    },

    // Twitter Card 메타데이터
    twitter: {
        card: 'summary_large_image', // 큰 이미지 요약 카드
        title: '아기 생일 디데이 계산기 | 생후 며칠?', // Twitter 전용 제목
        description: '신생아부터 생후 100일, 200일, 365일까지! 생일 디데이 자동 계산. 인스타용 복사 기능 지원', // Twitter 전용 설명
        images: [siteConfig.ogImage], // OG 이미지를 공유할 수 있음
        // site: '@YourTwitterSiteHandle', // 사이트 트위터 계정 (선택 사항)
        // creator: '@YourTwitterCreatorHandle', // 콘텐츠 제작자 트위터 계정 (선택 사항)
    },

    // 기타 메타 태그 (예: Google AdSense 인증)
    other: {
        'google-adsense-account': 'ca-pub-7198497161095707',
    },

    // 정식 URL 지정 (SEO에 도움)
    alternates: {
        canonical: siteConfig.url,
    },

    // 웹 앱 매니페스트 (PWA 구성 시)
    // manifest: '/manifest.json',

    // 브라우저 테마 색상
    // themeColor: '#ffffff',
};

// JSON-LD 구조화된 데이터
const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '아기 생일 디데이 계산기',
    url: siteConfig.url,
    description: '신생아부터 생후 100일, 200일, 1년까지 자동 계산! 인스타그램 공유용 생후 일수 복사 기능 포함',
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'All', // 모든 OS에서 사용 가능 명시
    inLanguage: 'ko', // 주 사용 언어
    keywords: [
        // 핵심 키워드
        '아기 디데이',
        '육아 디데이 계산기',
        '생후 일수 계산',
        '초보 부모 앱',
        '인스타그램 육아 콘텐츠',
        '출산일 계산',
        '아기 생일 D-Day',
    ],
    // "author": { // 애플리케이션 제작자 정보 (선택 사항)
    //   "@type": "Person", // 또는 Organization
    //   "name": siteConfig.author
    // },
    // "offers": { // 무료 앱인 경우
    //   "@type": "Offer",
    //   "price": "0"
    // }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" className={`${geistSans.variable} ${geistMono.variable}`}>
            <head>
                {/* Next.js의 `metadata` 객체를 통해 대부분의 <meta>, <link rel="icon"> 태그가 자동으로 생성됩니다.
                  이전에 수동으로 <head>에 넣었던 태그들은 `metadata` 객체로 이전되어 제거되었습니다.
                  (예: title, description, keywords, author, viewport, robots, favicon links, OG/Twitter tags)
                */}

                {/* Google AdSense 스크립트 */}
                <Script
                    async // AdSense 스크립트는 비동기 로드가 권장됨
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7198497161095707"
                    crossOrigin="anonymous"
                    strategy="lazyOnload" // 페이지 주요 콘텐츠 로드 후 로드 (성능에 유리)
                />

                {/* Google Analytics (gtag.js) */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-6LY724VDX3"
                    strategy="afterInteractive" // 페이지가 상호작용 가능해진 후 로드
                    async // 비동기 로드
                />
                <Script id="gtag-init" strategy="afterInteractive">
                    {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-6LY724VDX3');
                    `}
                </Script>

                {/* JSON-LD 구조화된 데이터 스크립트 */}
                <Script
                    id="ld-json"
                    type="application/ld+json"
                    strategy="afterInteractive" // 중요한 콘텐츠가 아니므로 인터랙션 후 로드
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </head>
            <body className="antialiased">
                {' '}
                {/* antialiased 클래스로 폰트 렌더링 개선 */}
                {children}
            </body>
        </html>
    );
}
