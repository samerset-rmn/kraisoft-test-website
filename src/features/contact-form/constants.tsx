import { TFormFieldType, IFormFieldProps } from './types';
import { FormInputField, FormTextareaField } from './components';

/** NOTE Here we can easily extend supported form inputs */
export const FORM_FIELDS_MAP: Record<TFormFieldType, React.FC<IFormFieldProps>> = {
  text: FormInputField,
  email: FormInputField,
  textarea: FormTextareaField
};
