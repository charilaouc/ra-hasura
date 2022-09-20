import { Admin, Resource, ListGuesser } from "react-admin";
import buildHasuraProvider from "ra-data-hasura";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="products" list={ListGuesser} />
    <Resource name="users" list={ListGuesser} />
  </Admin>
);

export default App;