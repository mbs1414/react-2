import { useMediaQuery, useTheme } from "@mui/material";
import { useEffect } from "react";
import { SidebarContent } from ".";
import { DrawerActionButton, SidebarDrawer } from "../drawer";
const Sidebar = ({ value, handleChange, setDrawerOpen, drawerOpen }) => {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (!isMdScreen) {
      setDrawerOpen(false);
    }
  }, [isMdScreen]);

  return (
    <>
      {/* Fab فقط روی اسکرین کوچیک */}
      {isMdScreen && <DrawerActionButton setDrawerOpen={setDrawerOpen} />}

      {/* نمایش Sidebar بسته به سایز */}
      {!isMdScreen ? (
        <SidebarContent value={value} handleChange={handleChange} />
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
