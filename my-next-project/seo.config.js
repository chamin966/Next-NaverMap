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
      content: '88be39a0d0f90b4f58ef020141f08076ade08b27',
    },
  ],
};
