import { 
  Edit,
  TabbedForm, 
  TextInput,
  TabbedShowLayout
} from 'react-admin';

export const NestedForm = () => (
  <Edit>
    <TabbedForm syncWithLocation={false}>
      <TabbedForm.Tab label="Step 1">
        <TabbedShowLayout syncWithLocation={false}>
          <TabbedShowLayout.Tab label="Step 1.1">
            <TextInput source="field_1-1" />
          </TabbedShowLayout.Tab>
          <TabbedShowLayout.Tab label="Step 1.2">
            <TextInput source="field_1-2" />
          </TabbedShowLayout.Tab>
        </TabbedShowLayout>
      </TabbedForm.Tab>
      <TabbedForm.Tab label="Step 2">
        <TabbedShowLayout syncWithLocation={false}>
          <TabbedShowLayout.Tab label="Step 2.1">
            <TextInput source="field_2-1" />
          </TabbedShowLayout.Tab>
          <TabbedShowLayout.Tab label="Step 2.2">
            <TextInput source="field_2-2" />
          </TabbedShowLayout.Tab>
        </TabbedShowLayout>
      </TabbedForm.Tab>
      <TabbedForm.Tab label="Step 3">
        <TabbedShowLayout syncWithLocation={false}>
          <TabbedShowLayout.Tab label="Step 3.1">
            <TextInput source="field_3-1" />
          </TabbedShowLayout.Tab>
          <TabbedShowLayout.Tab label="Step 3.2">
            <TextInput source="field_3-2" />
          </TabbedShowLayout.Tab>
        </TabbedShowLayout>
      </TabbedForm.Tab>
      <TabbedForm.Tab label="Step 4">
        <TabbedShowLayout syncWithLocation={false}>
          <TabbedShowLayout.Tab label="Step 4.1">
            <TextInput source="field_4-1" />
          </TabbedShowLayout.Tab>
          <TabbedShowLayout.Tab label="Step 4.2">
            <TextInput source="field_4-2" />
          </TabbedShowLayout.Tab>
        </TabbedShowLayout>
      </TabbedForm.Tab>
    </TabbedForm>
  </Edit>
);
