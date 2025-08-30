import { DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const PostShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="author" />
      <DateField source="datapostagem" />
    </SimpleShowLayout>
  </Show>
);
