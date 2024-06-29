import { SiteMetaInformation } from '@/shared/SiteMetaInformation';
import { PageLayout } from '@/shared/PageLayout';

export default function Home() {
  return (
    <>
      <SiteMetaInformation pageTitle='Main page' />
      <PageLayout>
        <div>bla bla</div>
      </PageLayout>
    </>
  );
}
