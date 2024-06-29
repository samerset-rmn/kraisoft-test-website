import { SiteMetaInformation } from '@/components/site-meta-information';
import { PageLayout } from '@/components/page-layout';

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
