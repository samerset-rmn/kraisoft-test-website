import { Html, Head, Main, NextScript } from 'next/document';
import { PageLayout } from '@/shared/PageLayout';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <PageLayout>
          <Main />
        </PageLayout>
        <NextScript />
      </body>
    </Html>
  );
}
