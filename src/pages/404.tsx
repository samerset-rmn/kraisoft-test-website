import { SiteMetaInformation } from '@/shared/components/site-meta-information';
import { PageLayout } from '@/shared/components/page-layout';

export default function Page404() {
  return (
    <>
      <SiteMetaInformation pageTitle='Page not found' />
      <PageLayout>
        <h1 style={{ margin: 'auto' }}>404 - Sorry, this page does not exist</h1>
      </PageLayout>
    </>
  );
}
