import { UseControllerReturn, UseControllerProps } from 'react-hook-form';

export interface IContactFormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface IContactFormPageLayoutProps {
  onFormSubmit: () => void;
}

export interface IFormFieldContainerProps {
  label: string;
  name: keyof IContactFormFields;
  type: TFormFieldType;
  placeholder?: string;
  validationRules: UseControllerProps['rules'];
}

export interface IFormFieldWrapperProps {
  label: string;
  error: string | undefined;
}

export interface IFormFieldProps extends Pick<UseControllerReturn, 'field'> {
  placeholder?: string;
  type: TFormFieldType;
  isError: boolean;
  testId: string;
}

export type TFormFieldType = 'text' | 'email' | 'textarea';

export interface IFormSubmitButtonProps {
  isFormSubmitting: boolean;
}
