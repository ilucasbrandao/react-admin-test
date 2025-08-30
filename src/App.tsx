import { Admin, Resource } from "react-admin";
import PostIcon from "@mui/icons-material/Book";

import { Dashboard } from "./Dashboard";
import { Layout } from "./components/Layout";
import { authProvider } from "./auth";
import dataProvider from "./dataProvider";

import { OrderList } from "./Vendas/VendaList";
import VendaCreate from "./Vendas/VendaCreate";

export const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    dashboard={Dashboard}
    layout={Layout}
  >
    <Resource
      name="products" // Deve bater com a rota do back-end
      options={{ label: "Venda" }}
      list={OrderList}
      create={VendaCreate}
      icon={PostIcon}
    />
  </Admin>
);
