import '../styles/globals.scss';
import { Noto_Sans } from 'next/font/google';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import SEO from '../seo.config';
import Script from 'next/script';

const notoSans = Noto_Sans({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={notoSans.className}>
      <DefaultSeo {...SEO} />
      <Script
        id="my-script"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-THG9RGG0V6');
            `,
        }}
      />
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={'https://www.googletagmanager.com/gtag/js?id=G-THG9RGG0V6'}
      />
      <Component {...pageProps} />
    </main>
  );
}
