import { 
  Edit,
  TabbedForm, 
  TextInput,
  TabbedShowLayout,
  required,
  minLength,
  maxLength,
  // TabbedFormTabs
} from 'react-admin';

const MIN_IMPUT_LENGTH = 2;
const MAX_IMPUT_LENGTH = 15;

const validateField = [
  required(), 
  minLength(MIN_IMPUT_LENGTH), 
  maxLength(MAX_IMPUT_LENGTH)
];

const formValidation = (form: any) => {
  const errors: any = {};
  Object.getOwnPropertyNames(form).forEach((index: string) => {
    if(index == 'id') {
      return
    }
    if(!form[index]) {
      errors[index] = 'ra.validation.required'
      return
    }
    if(form[index].trim().length < 2) {
      errors[index] = {
        message: 'ra.validation.minLength',
        args: { min: MIN_IMPUT_LENGTH }
      }
      return
    }
    if(form[index].trim().length > 15) {
      errors[index] = {
        message: 'ra.validation.maxLength',
        args: { max: MAX_IMPUT_LENGTH }
      }
      return
    }
  });
  return errors
}

export const NestedForm = () => (
  <Edit redirect="show">
    <TabbedForm 
      syncWithLocation={false} 
      validate={formValidation}
    >
      <TabbedForm.Tab label="Step 1">
        <TabbedShowLayout syncWithLocation={false}>
          <TabbedShowLayout.Tab label="Step 1.1">
            <TextInput source="field_1-1" validate={validateField} />
          </TabbedShowLayout.Tab>
          <TabbedShowLayout.Tab label="Step 1.2">
            <TextInput source="field_1-2" validate={validateField} />
          </TabbedShowLayout.Tab>
        </TabbedShowLayout>
      </TabbedForm.Tab>
      <TabbedForm.Tab label="Step 2">
        <TabbedShowLayout syncWithLocation={false}>
          <TabbedShowLayout.Tab label="Step 2.1">
            <TextInput source="field_2-1" validate={validateField} />
          </TabbedShowLayout.Tab>
          <TabbedShowLayout.Tab label="Step 2.2">
            <TextInput source="field_2-2" validate={validateField} />
          </TabbedShowLayout.Tab>
        </TabbedShowLayout>
      </TabbedForm.Tab>
      <TabbedForm.Tab label="Step 3">
        <TabbedShowLayout syncWithLocation={false}>
          <TabbedShowLayout.Tab label="Step 3.1">
            <TextInput source="field_3-1" validate={validateField} />
          </TabbedShowLayout.Tab>
          <TabbedShowLayout.Tab label="Step 3.2">
            <TextInput source="field_3-2" validate={validateField} />
          </TabbedShowLayout.Tab>
        </TabbedShowLayout>
      </TabbedForm.Tab>
      <TabbedForm.Tab label="Step 4">
        <TabbedShowLayout syncWithLocation={false}>
          <TabbedShowLayout.Tab label="Step 4.1">
            <TextInput source="field_4-1" validate={validateField} />
          </TabbedShowLayout.Tab>
          <TabbedShowLayout.Tab label="Step 4.2">
            <TextInput source="field_4-2" validate={validateField} />
          </TabbedShowLayout.Tab>
        </TabbedShowLayout>
      </TabbedForm.Tab>
    </TabbedForm>
  </Edit>
);
