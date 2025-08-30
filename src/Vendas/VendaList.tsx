import {
  List,
  Datagrid,
  TextField,
  NumberField,
  DateField,
  EditButton,
  TextInput,
  NumberInput,
  DateInput,
} from "react-admin";

const orderFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <DateInput source="date_gte" label="From" />,
  <DateInput source="date_lte" label="To" />,
  <NumberInput source="total_gte" label="Min Total" />,
];

export const OrderList = () => (
  <List
    filters={orderFilters}
    filterDefaultValues={{ status: "ordered" }}
    sort={{ field: "date", order: "DESC" }}
    perPage={25}
  >
    <Datagrid rowClick="edit">
      <NumberField source="id" label="Id" />
      <DateField source="date" label="Date" showTime />
      <TextField source="product_name" label="Produto" />
      <NumberField source="quantity" label="Quantidade" />
      <NumberField
        source="unit_price"
        label="Preço Unitário"
        options={{ style: "currency", currency: "BRL" }}
      />
      <NumberField
        source="total_amount"
        label="Total"
        options={{ style: "currency", currency: "BRL" }}
      />
      <EditButton />
    </Datagrid>
  </List>
);
