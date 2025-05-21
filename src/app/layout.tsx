import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google'; // 실제 Geist 폰트 임포트 방식에 따라 수정될 수 있음
import Script from 'next/script';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
    display: 'swap', // 폰트 로딩 중 fallback 폰트 표시 후, 로드 완료 시 교체 (SEO 및 UX 개선)
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
    display: 'swap',
});

// 사이트 공통 정보 관리 (SEO 강화)
const siteConfig = {
    title: '아기 생일 디데이 계산기 | 생후 며칠, 개월수, 주수 자동 계산', // 구체적이고 검색 의도에 맞는 제목
    description:
        '우리 아기의 특별한 날까지 정확한 D-Day 계산! 태어난 날로부터 생후 몇일, 몇개월, 몇주인지 쉽고 빠르게 확인하세요. 인스타그램 공유 문구 복사, 백일, 첫돌 등 기념일 알림 기능까지! 초보 부모 필수 육아 앱.', // 기능과 혜택을 강조한 상세 설명
    url: 'https://bdaycnt.netlify.app/', // 대표 URL
    ogImage: 'https://bdaycnt.netlify.app/og-image.png', // Open Graph 대표 이미지
    keywords: [
        // 핵심 키워드
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
        // 확장 및 롱테일 키워드
        '아기 개월수 계산기',
        '아기 주수 계산기',
        '신생아 디데이 계산',
        '출생일 계산기',
        '백일 계산',
        '첫돌 계산',
        '아기 기념일 관리',
        '육아 필수 어플',
        '정확한 생후 일수 확인',
        '간편한 디데이 공유',
        'baby d-day calculator',
        'korean baby age',
        'days since birth calculator', // 영문 키워드
        '육아 정보 앱',
        '초보맘 도우미',
        '초보아빠 육아팁',
        '아기 성장 기록 지원',
    ],
    author: 'bdaycnt 개발팀', // 구체적인 작성자/팀명
    siteName: '아기 생일 디데이 계산기', // 사이트 이름
};

// Next.js Metadata API를 사용한 메타데이터 정의 (SEO 최적화)
export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url), // 상대 경로의 기준 URL 설정

    // 기본 메타데이터
    title: {
        default: siteConfig.title, // 기본 페이지 제목
        template: `%s | ${siteConfig.siteName}`, // 하위 페이지 제목 형식 (예: "기능 소개 | 아기 생일 디데이 계산기")
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author, url: siteConfig.url }],
    creator: siteConfig.author, // 콘텐츠 제작자
    publisher: siteConfig.author, // 게시자 (Google에서 인식)

    // 검색엔진 로봇 정책 상세 설정
    robots: {
        index: true, // 검색 결과에 이 페이지를 포함
        follow: true, // 이 페이지의 링크를 따라 크롤링
        googleBot: {
            // Googlebot에 대한 특정 지침
            index: true,
            follow: true,
            'max-video-preview': -1, // 동영상 미리보기 제한 없음
            'max-image-preview': 'large', // 이미지 미리보기 크기를 크게
            'max-snippet': -1, // 스니펫 길이 제한 없음
        },
    },

    // Viewport 설정 (모바일 최적화)
    viewport: 'width=device-width, initial-scale=1.0', // user-scalable=no는 접근성을 위해 일반적으로 권장하지 않음

    // Favicon 설정
    icons: {
        icon: [
            { url: '/favicon.ico', type: 'image/x-icon', sizes: 'any' }, // public 폴더 루트 기준
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: '/apple-touch-icon.png', // public 폴더 루트 기준
        // 기타 아이콘 (예: Android Chrome)
        // other: [
        //   { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
        // ],
    },

    // Open Graph (Facebook, KakaoTalk 등 소셜 공유 최적화)
    openGraph: {
        type: 'website',
        url: siteConfig.url,
        title: `${siteConfig.title} - 간편 공유 & 기념일 관리`, // OG용 매력적인 제목
        description: `우리 아기의 소중한 순간, ${siteConfig.siteName}으로 정확하게 계산하고 예쁘게 공유하세요! 생후 일수, 주수, 개월수 자동 계산 기능 제공.`, // OG용 요약 및 핵심 기능 강조 설명
        images: [
            {
                url: siteConfig.ogImage, // 절대 경로 또는 metadataBase 기준 상대 경로
                width: 1200,
                height: 630,
                alt: `${siteConfig.siteName} 사용 화면 - 아기 디데이와 기념일을 쉽게 확인`, // 구체적이고 설명적인 alt 텍스트
            },
        ],
        locale: 'ko_KR',
        siteName: siteConfig.siteName,
    },

    // Twitter Card (트위터 공유 최적화)
    twitter: {
        card: 'summary_large_image', // 큰 이미지 카드 사용
        title: `${siteConfig.title} - #육아필수템 #디데이계산기`, // Twitter용 제목 (해시태그 활용 가능)
        description: `아기 생일부터 오늘까지 D-Day, 생후 일수, 개월수, 주수를 한눈에! ${siteConfig.siteName}으로 스마트한 육아를 경험하세요. #아기랑 #기념일`, // Twitter용 설명 (해시태그 활용)
        images: [siteConfig.ogImage], // OG 이미지 공유
        // site: '@YourTwitterSiteHandle', // 사이트 트위터 계정 (선택 사항)
        // creator: '@YourTwitterCreatorHandle', // 콘텐츠 제작자 트위터 계정 (선택 사항)
    },

    // 사이트 인증 코드 (Google Search Console, Naver Search Advisor 등)
    verification: {
        google: 'YOUR_GOOGLE_SITE_VERIFICATION_CODE_HERE', // 실제 값으로 변경
        other: {
            'naver-site-verification': 'YOUR_NAVER_SITE_VERIFICATION_CODE_HERE', // 실제 값으로 변경
            // 'msvalidate.01': 'YOUR_BING_SITE_VERIFICATION_CODE_HERE', // Bing 웹마스터 도구
        },
    },
    // 'google-adsense-account'는 verification 대신 other에 두는 것이 일반적입니다.
    other: {
        'google-adsense-account': 'ca-pub-7198497161095707',
    },

    // 정식 URL 지정 (중복 콘텐츠 방지)
    alternates: {
        canonical: siteConfig.url,
        // languages: { // 다국어 사이트의 경우
        //   'en-US': `${siteConfig.url}/en`,
        // },
    },

    // PWA 관련 설정 (필요시)
    // manifest: '/manifest.json',
    // themeColor: '#4a90e2', // 앱 테마 색상
    // appleWebApp: {
    //   title: siteConfig.siteName,
    //   statusBarStyle: 'default',
    // },
};

// JSON-LD 구조화된 데이터 (검색 결과 리치 스니펫 및 SEO 강화)
const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: siteConfig.siteName,
    url: siteConfig.url,
    description: siteConfig.description,
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'All Web Browsers', // 지원 OS 명시
    inLanguage: 'ko-KR', // 주 사용 언어 및 지역
    keywords: siteConfig.keywords.join(', '), // 키워드를 쉼표로 구분된 문자열로
    image: siteConfig.ogImage, // 대표 이미지
    screenshot: siteConfig.ogImage, // 앱 스크린샷 (실제 스크린샷 이미지 URL 권장)
    featureList: [
        // 주요 기능 목록화 (검색 엔진이 앱의 기능을 이해하는 데 도움)
        '아기 생일 기준 D-Day 자동 계산',
        '생후 일수, 주수, 개월수 실시간 확인',
        '인스타그램 등 SNS 공유용 텍스트 간편 복사',
        '100일, 200일, 첫돌 등 주요 기념일 계산',
        '사용자 친화적이고 직관적인 인터페이스',
        '별도의 앱 설치 없이 웹에서 바로 사용 가능',
        '모바일 및 데스크톱 반응형 지원',
    ],
    provider: {
        // 제공자 정보
        '@type': 'Organization', // 또는 "Person"
        name: siteConfig.author,
        url: siteConfig.url,
    },
    offers: {
        // 서비스 제공 형태 (무료인 경우)
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'KRW',
    },
    // 사용자 평가 및 리뷰가 쌓이면 추가 (매우 효과적)
    // "aggregateRating": {
    //   "@type": "AggregateRating",
    //   "ratingValue": "4.9", // 예시: 실제 평점
    //   "reviewCount": "1500" // 예시: 실제 리뷰 수
    // },
    // "review": [
    //   {
    //     "@type": "Review",
    //     "author": {"@type": "Person", "name": "육아맘"},
    //     "datePublished": "2025-05-15",
    //     "reviewBody": "정말 편리하고 아기 기념일 챙기는데 최고예요! 매일 사용합니다.",
    //     "reviewRating": { "@type": "Rating", "ratingValue": "5" }
    //   }
    // ]
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" className={`${geistSans.variable} ${geistMono.variable}`}>
            <head>
                {/* Next.js의 `metadata` 객체와 여기에 포함된 `Script` 컴포넌트를 통해
                  대부분의 SEO 관련 태그와 필수 스크립트가 관리됩니다.
                  이전 <head>에 수동으로 넣었던 태그들은 이제 `metadata` 객체로 옮겨졌습니다.
                */}

                {/* Google AdSense 스크립트 (수익화) */}
                <Script
                    async
                    src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${
                        process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-7198497161095707'
                    }`} // 환경변수 사용 권장
                    crossOrigin="anonymous"
                    strategy="lazyOnload" // 페이지 주요 콘텐츠 로딩 후 지연 로드
                />

                {/* Google Analytics (gtag.js) - 웹사이트 분석 */}
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${
                        process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-6LY724VDX3'
                    }`} // 환경변수 사용 권장
                    strategy="afterInteractive" // 페이지 상호작용 가능 후 로드
                    async
                />
                <Script id="gtag-init" strategy="afterInteractive">
                    {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-6LY724VDX3'}', {
                        page_path: window.location.pathname,
                      });
                    `}
                </Script>

                {/* JSON-LD 구조화된 데이터 스크립트 (SEO 강화) */}
                <Script
                    id="structured-data"
                    type="application/ld+json"
                    strategy="afterInteractive" // 중요한 렌더링을 방해하지 않도록 인터랙션 후 로드
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </head>
            <body className="antialiased">
                {' '}
                {/* 폰트 렌더링 최적화 */}
                {children}
            </body>
        </html>
    );
}
