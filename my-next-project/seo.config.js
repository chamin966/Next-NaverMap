/* eslint-disable import/no-anonymous-default-export */
export default {
  titleTemplate: '%s - Next.js 네이버 지도',
  openGraph: {
    type: 'website',
    site_name: '네이버 매장 지도 서비스',
    images: [
      {
        url: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fstatic%2Fmaps%2Fv5%2Fpc%2Fnaver-map.png&type=f&size=1200x630&quality=80&opt=2',
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: 'shortcut icon',
      href: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fstatic%2Fmaps%2Fv5%2Fpc%2Fnaver-map.png&type=f&size=600x600&quality=80&opt=2',
    },
  ],
  additionalMetaTags: [
    {
      name: 'naver-site-verification',
      content: '88ad71dbb613678aa55528b63737538094f2cea8',
    },
    {
      name: 'google-site-verification',
      content: 'x13-A4DWQHPswJ-dK3GbQHmrQPH-fvw-lVnycnaUD8M',
    },
  ],
};
