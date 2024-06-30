import { useForm, FormProvider } from 'react-hook-form';

import { FormPageLayout, FormSubmitButton, FormSuccessMessage } from '../components';
import { IContactFormFields } from '../types';
import { FormFieldContainer } from './FormField.container';

/**
 * Container component for the contact form
 */
export const ContactFormContainer = () => {
  const formContext = useForm<IContactFormFields>({
    defaultValues: { name: '', email: '', subject: '', message: '' },
    mode: 'onSubmit',
    shouldFocusError: true
  });

  const onFormSubmit = formContext.handleSubmit(async (data) => {
    console.log(data);

    /* Fake request */
    await new Promise((resolve) => setTimeout(resolve, 2000));

    formContext.reset();
  });

  if (formContext.formState.isSubmitSuccessful) {
    return <FormSuccessMessage />;
  }

  return (
    <FormProvider {...formContext}>
      <FormPageLayout onFormSubmit={onFormSubmit}>
        {/* NOTE I think we could move form fields info into an array and map it here. Maybe that would make it easier to change form content... Maybe not, it's just an overhead. */}
        <FormFieldContainer
          name='name'
          label='Name'
          type='text'
          placeholder='Write your name'
          validationRules={{
            required: { value: true, message: 'Name is required' },
            maxLength: { value: 50, message: 'Name is too long' }
          }}
        />
        <FormFieldContainer
          name='email'
          label='Email'
          type='email'
          placeholder='Write your email'
          validationRules={{
            required: { value: true, message: 'Email is required' },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address'
            }
          }}
        />
        <FormFieldContainer
          name='subject'
          label='Message subject'
          type='text'
          placeholder='Write subject'
          validationRules={{
            required: { value: true, message: 'Subject is required' },
            maxLength: { value: 50, message: 'Subject is too long' }
          }}
        />
        <FormFieldContainer
          name='message'
          label='Message text'
          type='textarea'
          placeholder='Write message'
          validationRules={{
            required: { value: true, message: 'Message is required' },
            maxLength: { value: 500, message: 'Message is too long' }
          }}
        />
        <FormSubmitButton isFormSubmitting={formContext.formState.isSubmitting} />
      </FormPageLayout>
    </FormProvider>
  );
};
