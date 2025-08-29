import {
  List,
  EditButton,
  ReferenceInput,
  TextInput,
  Datagrid,
  TextField,
  DeleteButton,
} from "react-admin";

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" />,
];

export const PostList = () => (
  <List filters={postFilters}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="author" />
      <TextField source="dataPostagem" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
