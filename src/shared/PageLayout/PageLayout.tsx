import { SITE_BASE_PATH } from '@/constants/basePath';
import Image from 'next/image';

/**
 * Base layout of page
 * 
 * NOTE: Header and footer can be separated into their own components, but for now it's just a simple layout
 */
export const PageLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <header>
        <div>
          <Image src={`${SITE_BASE_PATH}/logo.svg`} alt='game.play logo' width={40} height={40} />
        </div>
        <nav>
          <ul>
            <li>Main page</li>
            <li>Contact us</li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <div>some info</div>
      </footer>
    </div>
  );
};
