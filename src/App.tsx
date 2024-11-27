import {
  Admin,
  Resource,
  ListGuesser,
  // EditGuesser,
  ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { NestedForm } from "./NestedForm";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource
      name="data"
      list={ListGuesser}
      edit={NestedForm}
      show={ShowGuesser}
    />
  </Admin>
);
