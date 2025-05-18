import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: '아기 생일 디데이 계산기 | 생후 며칠? 인스타그램용 생일 일수 계산기',
    description:
        '우리 아기 생일로부터 며칠 지났는지 자동 계산! 인스타그램 업로드용 생후 일수 복사 기능 지원. 초보 부모를 위한 육아 필수 웹앱.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <head>
                {/* Favicon */}
                <link rel="apple-touch-icon" sizes="180x180" href="https://bdaycnt.netlify.app/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="https://bdaycnt.netlify.app/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="https://bdaycnt.netlify.app/favicon-16x16.png" />
                <link rel="shortcut icon" href="https://bdaycnt.netlify.app/favicon.ico" type="image/x-icon" />

                {/* SEO Meta Tags */}
                <title>아기 생일 디데이 계산기 | 생후 며칠? 인스타그램용 생일 일수 계산기</title>
                <meta
                    name="description"
                    content="신생아부터 생후 100일, 200일, 1년까지! 아기 생일 일수 계산기. 인스타그램 업로드용 텍스트 복사 기능 제공. 초보 엄마 아빠의 육아 필수템!"
                />
                <meta
                    name="keywords"
                    content="아기 디데이, 생일 일수 계산기, 생후 며칠, 아기 생일, 신생아 육아, 100일 디데이, 200일, 생일 계산기, 인스타그램 육아, D-Day 계산, 출산 후 일수, 아기 나이 계산기, 생후 계산기, 육아템, 아기 날짜 계산기"
                />
                <meta name="author" content="bdaycnt" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="아기 생일 디데이 계산기 | 생후 며칠?" />
                <meta
                    property="og:description"
                    content="우리 아기 생일로부터 며칠 지났는지 확인하고 인스타그램에 바로 복사! 초보 부모를 위한 육아 도우미 웹앱"
                />
                <meta property="og:url" content="https://bdaycnt.netlify.app/" />
                <meta property="og:image" content="https://bdaycnt.netlify.app/og-image.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:locale" content="ko_KR" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="아기 생일 디데이 계산기 | 생후 며칠?" />
                <meta
                    name="twitter:description"
                    content="신생아부터 생후 100일, 200일, 365일까지! 생일 디데이 자동 계산. 인스타용 복사 기능 지원"
                />
                <meta name="twitter:image" content="https://bdaycnt.netlify.app/og-image.png" />

                {/* Google AdSense */}
                <meta name="google-adsense-account" content="ca-pub-7198497161095707" />
                <Script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7198497161095707"
                    crossOrigin="anonymous"
                />

                {/* Google Analytics */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-6LY724VDX3"
                    strategy="afterInteractive"
                    async
                />
                <Script id="gtag-init" strategy="afterInteractive">
                    {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-6LY724VDX3');
                    `}
                </Script>

                {/* Structured Data with Rich Keywords */}
                <Script id="ld-json" type="application/ld+json" strategy="afterInteractive">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "WebApplication",
                      "name": "아기 생일 디데이 계산기",
                      "url": "https://bdaycnt.netlify.app/",
                      "description": "신생아부터 생후 100일, 200일, 1년까지 자동 계산! 인스타그램 공유용 생후 일수 복사 기능 포함",
                      "applicationCategory": "LifestyleApplication",
                      "operatingSystem": "All",
                      "inLanguage": "ko",
                      "keywords": [
                        "아기 디데이",
                        "육아 디데이 계산기",
                        "생후 일수 계산",
                        "초보 부모 앱",
                        "인스타그램 육아 콘텐츠",
                        "출산일 계산",
                        "아기 생일 D-Day"
                      ]
                    }
                    `}
                </Script>
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
        </html>
    );
}
