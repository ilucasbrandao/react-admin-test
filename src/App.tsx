import { Admin, Resource, ShowGuesser } from "react-admin";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

import { Dashboard } from "./Dashboard";
import { Layout } from "./Layout";
import { PostList } from "./Posts/PostList";
import { PostEdit } from "./Posts/PostEdit";
import { PostCreate } from "./Posts/PostCreate";
import { UserList } from "./Users";
import { authProvider } from "./auth";
import dataProvider from "./dataProvider";
import { PostShow } from "./Posts/PostShow";

export const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    dashboard={Dashboard}
    layout={Layout}
  >
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      show={PostShow}
      icon={PostIcon}
    />
    <Resource name="users" list={UserList} show={ShowGuesser} icon={UserIcon} />
  </Admin>
);
