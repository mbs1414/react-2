import { createContext } from "react";

export const PortfolioContext = createContext({
  isMdScreen: false,
  value: 0,
  setValue: () => {},
  drawerOpen: false,
  setDrawerOpen: () => {},
  handleChange: () => {},
});
