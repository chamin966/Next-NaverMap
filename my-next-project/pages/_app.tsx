import '../styles/globals.scss';
import { Noto_Sans } from 'next/font/google';
import type { AppProps } from 'next/app';

const notoSans = Noto_Sans({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={notoSans.className}>
      <Component {...pageProps} />
    </main>
  );
}
