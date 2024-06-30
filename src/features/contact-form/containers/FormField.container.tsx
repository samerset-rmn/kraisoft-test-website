import { useController, useFormContext } from 'react-hook-form';

import { IFormFieldContainerProps } from '../types';
import { FORM_FIELDS_INPUT_MODE_MAP, FORM_FIELDS_MAP } from '../constants';
import { FormFieldWrapper } from '../components';

/**
 * Container component for the contact form field.
 * Initializes the form field with the provided props.
 */
export const FormFieldContainer: React.FC<IFormFieldContainerProps> = ({ name, label, type, validationRules, placeholder }) => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    name,
    control,
    rules: validationRules
  });

  const Input = FORM_FIELDS_MAP[type];
  const inputMode = FORM_FIELDS_INPUT_MODE_MAP[type];

  return (
    <FormFieldWrapper label={label} error={fieldState.error?.message}>
      <Input
        field={field}
        type={type}
        placeholder={placeholder}
        isError={!!fieldState.error?.message}
        testId={`contact-us-form-${name}-field`}
        inputMode={inputMode}
      />
    </FormFieldWrapper>
  );
};
