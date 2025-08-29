import { Create, SimpleForm, TextInput, DateInput } from "react-admin";

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" label="Título" />
      <TextInput source="author" label="Autor" />
      <DateInput source="dataPostagem" label="Data de Postagem" />
    </SimpleForm>
  </Create>
);
