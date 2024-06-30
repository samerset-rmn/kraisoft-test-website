import { SiteMetaInformation } from '@/shared/components/site-meta-information';
import { PageLayout } from '@/shared/components/page-layout';
import { ContactFormContainer } from '@/features/contact-form';

export default function Contact() {
  return (
    <>
      <SiteMetaInformation pageTitle='Contact us' />
      <PageLayout>
        <ContactFormContainer />
      </PageLayout>
    </>
  );
}
