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
    title: '생일 일수 계산기 | 우리 아기, 태어난 지 며칠?',
    description:
        '신생아 부모를 위한 필수 도구! 아이가 태어난 날로부터 며칠 지났는지 바로 확인해보세요. 생일 디데이 계산, 살아온 일수 복사 기능, 인스타그램에서 바로 붙여넣기 가능! 모바일 웹앱 지원.',
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

                {/* SEO & SNS Metadata */}
                <title>생일 일수 계산기 | Birthday Days Counter - 우리 아기, 태어난 지 며칠?</title>
                <meta
                    name="description"
                    content="신생아 부모를 위한 필수 도구! 아이가 태어난 날로부터 며칠 지났는지 바로 확인해보세요. 생일 디데이 계산, 살아온 일수 복사 기능, 인스타그램에서 바로 붙여넣기 가능!"
                />
                <meta
                    name="keywords"
                    content="생일, 날짜 계산, 며칠 지남, 아기 생일, 디데이, D-Day, birthday, days counter, date calculator, 육아, 출생일, 기념일, anniversary, 생일계산기, baby, parenting, 몇일째, 생후, 초보 부모, 신생아, 임산부, 100일, 200일, 1년, 카운터, 아기 디데이"
                />
                <meta name="author" content="bdaycnt" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Open Graph (Facebook, Kakao, Discord 등) */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="생일 일수 계산기 | 우리 아기, 태어난 지 며칠?" />
                <meta
                    property="og:description"
                    content="신생아 부모를 위한 필수 도구! 아기가 태어난 지 며칠인지 바로 확인하세요. D-Day 자동 계산 웹앱"
                />
                <meta property="og:url" content="https://bdaycnt.netlify.app/" />
                <meta property="og:image" content="https://bdaycnt.netlify.app/og-image.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="우리 아기 생일로부터 며칠? | 생일 일수 계산기" />
                <meta
                    name="twitter:description"
                    content="아기가 태어난 지 며칠 지났는지 바로 계산해보세요! 초보 부모를 위한 필수 도구"
                />
                <meta name="twitter:image" content="https://bdaycnt.netlify.app/og-image.png" />

                {/* Google AdSense */}
                <meta name="google-adsense-account" content="ca-pub-7198497161095707" />
                <Script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7198497161095707"
                    crossOrigin="anonymous"
                />

                {/* JSON-LD Structured Data */}
                <Script id="ld-json" type="application/ld+json" strategy="afterInteractive">
                    {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "생일 일수 계산기 | Birthday Days Counter",
              "url": "https://bdaycnt.netlify.app/",
              "description": "우리 아기, 태어난 지 며칠? 신생아 부모를 위한 생일 디데이 계산기",
              "applicationCategory": "CalculatorApplication",
              "operatingSystem": "All",
              "inLanguage": "ko",
              "keywords": "생일, 날짜 계산, 육아, 출생일, D-Day, 아기 생일, baby, parenting, 몇일째, 신생아"
            }
          `}
                </Script>
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
        </html>
    );
}
