import { TFormFieldType, IFormFieldProps, TFormFieldInputModeType } from './types';
import { FormInputField, FormTextareaField } from './components';

/** NOTE Here we can easily extend supported form inputs */
export const FORM_FIELDS_MAP: Record<TFormFieldType, React.FC<IFormFieldProps>> = {
  text: FormInputField,
  email: FormInputField,
  textarea: FormTextareaField
};

/* NOTE For a better user experience each input type has its own input mode (type of keyboard on mobile devices) */
export const FORM_FIELDS_INPUT_MODE_MAP: Record<TFormFieldType, TFormFieldInputModeType> = {
  text: 'text',
  email: 'email',
  textarea: 'text'
};
