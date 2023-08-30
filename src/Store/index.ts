import { createContext } from "react";
import { Root } from "./Root";

export const rootStoreContext = createContext({
  rootContext: new Root(),
});
