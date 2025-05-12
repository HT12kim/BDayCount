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
    title: '생일 일수 계산기',
    description:
        '생일로부터 며칠이 지났는지 바로 확인! 우리 아이, 가족, 친구의 생일 D-Day, 디데이, 날짜 계산기. 살아온 일수를 계산해서 클립보드에 복사되므로 인스타그램 등에서 바로 붙여넣어 사용해보세요. 모바일 웹앱 지원.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
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
                <title>생일 일수 계산기 | Birthday Days Counter - 우리 아이, 태어난 날로부터 며칠?</title>
                <meta
                    name="description"
                    content="생일로부터 며칠이 지났는지 바로 확인! 우리 아이, 가족, 친구의 생일 D-Day, 디데이, 날짜 계산기. 살아온 일수를 계산해서 클립보드에 복사되므로 인스타그램 등에서 바로 붙여넣어 사용해보세요. 모바일 웹앱 지원."
                />
                <meta
                    name="keywords"
                    content="생일, 날짜 계산, 며칠 지남, 아이 생일, 디데이, D-Day, birthday, days counter, date calculator, 아기, 육아, 출생일, 기념일, anniversary, 몇일, 몇일째, 며칠, 며칠째, 생일계산기, 디데이계산기, baby, child, parenting, birth date, date difference, 카운터, 웹앱"
                />
                <meta name="author" content="bdaycnt" />
                <meta property="og:title" content="우리 아이, 태어난 날로부터 며칠?" />
                <meta
                    property="og:description"
                    content="살아온 일수를 계산해서 클립보드에 복사되므로 인스타그램 등에서 바로 붙여넣어 사용해보세요"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://bdaycnt.netlify.app/" />
                <meta property="og:image" content="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <Script id="ld-json" type="application/ld+json" strategy="afterInteractive">
                    {`
                      {
                        "@context": "https://schema.org",
                        "@type": "WebApplication",
                        "name": "생일 일수 계산기 | Birthday Days Counter",
                        "url": "https://bdaycnt.netlify.app/",
                        "description": "우리 아이, 태어난 날로부터 며칠? 생일로부터 며칠이 지났는지 바로 확인! 간편한 생일 일수 계산기 웹앱",
                        "applicationCategory": "CalculatorApplication",
                        "operatingSystem": "All",
                        "inLanguage": "ko",
                        "keywords": "생일, 날짜 계산, 며칠 지남, 아이 생일, 디데이, D-Day, birthday, days counter, date calculator, 아기, 육아, 출생일, 기념일, anniversary, 몇일, 몇일째, 며칠, 며칠째, 생일계산기, 디데이계산기, baby, child, parenting, birth date, date difference, 카운터, 웹앱"
                      }
                    `}
                </Script>
                <Script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7198497161095707"
                    crossorigin="anonymous"
                ></Script>
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
        </html>
    );
}
