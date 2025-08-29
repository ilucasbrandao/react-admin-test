import { Edit, SimpleForm, TextInput } from "react-admin";

export const PostEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="title" />
    </SimpleForm>
  </Edit>
);

//ReferenceInput removido do PostEdit
