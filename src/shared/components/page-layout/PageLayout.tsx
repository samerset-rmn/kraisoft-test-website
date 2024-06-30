import Image from 'next/image';
import Link from 'next/link';

import { SITE_BASE_PATH } from '@/shared/constants/basePath';
import { PAGE_HEADER_HEIGHT } from '@/shared/constants/pageHeader';

import styles from './PageLayout.module.scss';

/**
 * Base layout of page
 *
 * NOTE: Header and footer can be separated into their own components, but for now it's just a simple layout
 */
export const PageLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header} style={{ height: PAGE_HEADER_HEIGHT }}>
        <div className={styles.header_logo}>
          <Link href='/'>
            <Image src={`${SITE_BASE_PATH}/logo.svg`} alt='game.play logo' width={35} height={35} priority />
            game.play
          </Link>
        </div>
        {/* 
          NOTE: Current navbar contains only 1 item therefore we don't need to implement responsive design.
          I'd implement burger menu for mobile devices if needed.
        */}
        <nav className={styles.header_navigation_bar}>
          <ul>
            <li>
              <Link href='/contact'>Contact us</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.main_content} style={{ minHeight: `calc(100vh - ${PAGE_HEADER_HEIGHT}px)` }}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p className={styles.footer_text}>We hope you enjoy our game! 🌟</p>
        <nav className={styles.footer_navigation_bar}>
          <ul>
            <li>
              <Link href='/'>Main page</Link>
            </li>
            <li>
              <Link href='/contact'>Contact us</Link>
            </li>
          </ul>
        </nav>
        <small className={styles.footer_copyright}>© game.play 2024</small>
      </footer>
    </div>
  );
};
