import { createContext } from "react";

const Context = createContext(null);
const Provider = ({ store, children }) => {
  return <Context.Provider value={{ store }}>{children}</Context.Provider>;
};

export { Context, Provider };
