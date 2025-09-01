import { useContext } from "react";
import { SidebarContent } from ".";
import { PortfolioContext } from "../../context";
import { SidebarDrawer } from "../drawer";
const Sidebar = () => {
  const { isMdScreen } = useContext(PortfolioContext);

  return (
    <>
      {/* نمایش Sidebar بسته به سایز */}
      {!isMdScreen ? <SidebarContent /> : <SidebarDrawer />}
    </>
  );
};

export default Sidebar;
