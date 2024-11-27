import { 
  Edit,
  TabbedForm, 
  TextInput,
  TabbedShowLayout,
  required,
  minLength,
  maxLength
} from 'react-admin';

const validateField = [required(), minLength(2), maxLength(15)];

export const NestedForm = () => (
  <Edit>
    <TabbedForm syncWithLocation={false}>
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
