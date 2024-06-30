import Head from 'next/head';

import { SITE_BASE_PATH } from '@/shared/constants/basePath';

const faviconList = [
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: `${SITE_BASE_PATH}/favicon/apple-touch-icon.png`
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: `${SITE_BASE_PATH}/favicon/favicon-16x16.png`
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: `${SITE_BASE_PATH}/favicon/favicon-32x32.png`
  },
  {
    rel: 'shortcut icon',
    type: 'image/x-icon',
    href: `${SITE_BASE_PATH}/favicon/favicon.ico`
  }
];

/**
 * Site meta information shared between all pages
 */
export const SiteMetaInformation: React.FC<{ pageTitle: string }> = ({ pageTitle }) => {
  return (
    <Head>
      <title>{pageTitle + ' – game.play'}</title>
      <meta name='description' content='game.play – website where you can create and drag different items!' />
      {faviconList.map(({ rel, type, sizes, href }) => (
        <link key={`${href}-${sizes}`} rel={rel} type={type} sizes={sizes} href={href} />
      ))}
    </Head>
  );
};
