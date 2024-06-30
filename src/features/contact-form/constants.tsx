import { TFormFieldType, IFormFieldProps } from './types';
import { FormInputField, FormTextareaField } from './components';

export const FORM_FIELDS_MAP: Record<TFormFieldType, React.FC<IFormFieldProps>> = {
  text: FormInputField,
  email: FormInputField,
  textarea: FormTextareaField
};
