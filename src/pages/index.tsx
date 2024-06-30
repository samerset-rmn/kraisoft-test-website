import { SiteMetaInformation } from '@/shared/components/site-meta-information';
import { PageLayout } from '@/shared/components/page-layout';
import { GameFieldContainer } from '@/features/game-field';

export default function Home() {
  return (
    <>
      <SiteMetaInformation pageTitle='Main page' />
      <PageLayout>
        <GameFieldContainer />
      </PageLayout>
    </>
  );
}
