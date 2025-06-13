import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

// 폰트 설정
const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
    display: 'swap',
    preload: true,
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
    display: 'swap',
    preload: true,
});

// 사이트 설정
const SITE_CONFIG = {
    title: '아기 생후 며칠? 생일 디데이 자동 계산기 | 인스타그램 복사용 일수 계산',
    description:
        '우리 아기 태어난 지 며칠? 생후 개월 수, 주수까지 자동 계산해 드려요. 인스타그램 공유도 가능한 초보 부모 필수 육아 도우미 웹앱!',
    url: 'https://bdaycnt.netlify.app/',
    ogImage: 'https://bdaycnt.netlify.app/og-image.png',
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
        '신생아 디데이',
        '아기 생후 일수',
        '아기 생후 계산',
        '신생아 일수 계산기',
        '아기 생후 며칠 계산기',
        '아기 생후 일수 계산기',
        '신생아 생후 계산기',
        '아기 생후 일수 계산',
        '신생아 생후 일수 계산',
        '인스타그램 아기 디데이',
        '인스타그램 아기 생후',
        '인스타그램 아기 일수',
        '인스타그램 아기 생일',
        '인스타그램 아기 디데이 계산기',
        '인스타그램 아기 생후 계산기',
        '인스타그램 아기 일수 계산기',
        '인스타그램 아기 생일 계산기',
        '육아 디데이 계산기',
        '육아 일수 계산기',
        '육아 생후 계산기',
        '육아 생일 계산기',
        '육아 디데이',
        '육아 일수',
        '육아 생후',
        '육아 생일',
        '아기 백일 디데이',
        '아기 백일 계산기',
        '아기 백일 일수',
        '아기 백일 생후',
        '아기 백일 계산',
        '아기 백일 디데이 계산기',
        '아기 백일 일수 계산기',
        '아기 백일 생후 계산기',
        '모바일 아기 디데이',
        '모바일 아기 생후',
        '모바일 아기 일수',
        '모바일 아기 생일',
        '모바일 아기 디데이 계산기',
        '모바일 아기 생후 계산기',
        '모바일 아기 일수 계산기',
        '모바일 아기 생일 계산기',
        // 유입 검색어 기반 추가
        '아기 생후 며칠?',
        '아기 태어난 지 며칠?',
        '아기 생일 며칠 지났지?',
        '디데이 계산기 추천',
        '인스타그램 디데이 계산기',
        '아기 디데이 어떻게 계산해요?',
        '백일 디데이 자동 계산기',
        '우리 아기 태어난 날부터 며칠',
    ],
    author: 'bdaycnt',
};

export const metadata: Metadata = {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    keywords: SITE_CONFIG.keywords,
    authors: [{ name: SITE_CONFIG.author }],
    viewport: 'width=device-width, initial-scale=1.0',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    icons: {
        icon: [
            { url: '/favicon.ico', type: 'image/x-icon', sizes: 'any' },
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: '/apple-touch-icon.png',
    },
    openGraph: {
        type: 'website',
        url: SITE_CONFIG.url,
        title: SITE_CONFIG.title,
        description: SITE_CONFIG.description,
        images: [
            {
                url: SITE_CONFIG.ogImage,
                width: 1200,
                height: 630,
                alt: '아기 생일 디데이 계산기 Open Graph 이미지',
            },
        ],
        locale: 'ko_KR',
        siteName: '아기 생일 디데이 계산기',
    },
    twitter: {
        card: 'summary_large_image',
        title: SITE_CONFIG.title,
        description: SITE_CONFIG.description,
        images: [SITE_CONFIG.ogImage],
    },
    other: {
        'google-adsense-account': 'ca-pub-7198497161095707',
        'naver-site-verification': 'YOUR_NAVER_VERIFICATION_CODE',
    },
    alternates: {
        canonical: SITE_CONFIG.url,
    },
};

// 구조화 데이터 개선
const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '아기 생일 디데이 계산기',
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'All',
    inLanguage: 'ko',
    keywords: SITE_CONFIG.keywords,
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'KRW',
        availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '100',
        bestRating: '5',
        worstRating: '1',
    },
    potentialAction: {
        '@type': 'SearchAction',
        target: 'https://bdaycnt.netlify.app/?q={search_term_string}',
        'query-input': 'required name=search_term_string',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" className={`${geistSans.variable} ${geistMono.variable}`}>
            <head>
                {/* Google AdSense */}
                <Script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7198497161095707"
                    crossOrigin="anonymous"
                    strategy="lazyOnload"
                />

                {/* Google Analytics */}
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-6LY724VDX3" strategy="afterInteractive" />
                <Script
                    id="gtag-init"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-6LY724VDX3');
                        `,
                    }}
                />

                {/* JSON-LD 구조화 데이터 */}
                <Script
                    id="ld-json"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </head>
            <body className="antialiased">{children}</body>
        </html>
    );
}
