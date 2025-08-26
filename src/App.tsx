import { Admin, Resource, ShowGuesser } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { PostCreate, PostEdit, PostList } from "./Posts";
import { UserList } from "./Users";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from "./Dashboard";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource name="users" list={UserList} show={ShowGuesser} icon={UserIcon} />
  </Admin>
);
