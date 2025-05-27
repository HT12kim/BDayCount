/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://bdaycnt.netlify.app', // ← 실제 배포 주소로 변경
    generateRobotsTxt: true, // robots.txt 자동 생성
    sitemapSize: 5000, // sitemap 분할 기준
    changefreq: 'weekly', // 기본 페이지 업데이트 주기
    priority: 0.8, // 기본 중요도 (0.0 ~ 1.0)
    exclude: ['/404', '/server-error'], // 크롤링 제외할 경로
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
};
