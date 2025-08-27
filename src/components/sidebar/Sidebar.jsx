import { useContext, useEffect } from "react";
import { SidebarContent } from ".";
import { DrawerActionButton, SidebarDrawer } from "../drawer";
import { PortfolioContext } from "../../context";
const Sidebar = ({ value, handleChange, drawerOpen }) => {
  const {setDrawerOpen,isMdScreen} = useContext(PortfolioContext)
  useEffect(() => {
    if (!isMdScreen) {
      setDrawerOpen(false);
    }
  }, [isMdScreen]);

  return (
    <>
      {/* Fab فقط روی اسکرین کوچیک */}
      {isMdScreen && <DrawerActionButton />}

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
