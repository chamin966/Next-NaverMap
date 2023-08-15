import '../styles/globals.scss';
import { Noto_Sans } from 'next/font/google';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import SEO from '../seo.config';

const notoSans = Noto_Sans({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={notoSans.className}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </main>
  );
}
