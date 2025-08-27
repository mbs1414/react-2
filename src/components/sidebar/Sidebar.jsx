import { useContext } from "react";
import { SidebarContent } from ".";
import { PortfolioContext } from "../../context";
import { SidebarDrawer } from "../drawer";
const Sidebar = ({ value, handleChange, drawerOpen }) => {
  const {setDrawerOpen,isMdScreen} = useContext(PortfolioContext)

  return (
    <>
      {/* نمایش Sidebar بسته به سایز */}
      {!isMdScreen ? (
        <SidebarContent />
      ) : (
        <SidebarDrawer
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
          value={value}
          handleChange={handleChange}
        />
      )}
    </>
  );
};

export default Sidebar;
