import MainLayout from '@/src/components/layout/main-layout';
import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <NextNProgress
          color="#F47D31"
          startPosition={0.3}
          stopDelayMs={200}
          options={{ easing: 'ease', speed: 700, showSpinner: false }}
        />
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
