import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import MainLayout from "./../layouts/MainLayout";
import { Sidebar } from "./../components/sidebar";
import PagesContainer from "./../containers/PagesContainer";
import { useEffect, useState } from "react";
import Page from "../pages/components/Page";
import SidebarContainer from "./SidebarContainer";
import { PortfolioContext } from "../context";
import { DrawerActionButton } from "../components/drawer";
import { Home } from "../pages/components";
const App = () => {
  const [value, setValue] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
    useEffect(() => {
      if (!isMdScreen) {
        setDrawerOpen(false);
      }
    }, [isMdScreen]);

  return (
    <PortfolioContext.Provider
      value={{
        isMdScreen,
        value,
        setValue,
        drawerOpen,
        setDrawerOpen,
        handleChange,
      }}
    >
      <MainLayout>
        <SidebarContainer>
          <Sidebar
            value={value}
            handleChange={handleChange}
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
          />
        </SidebarContainer>
        {isMdScreen && <DrawerActionButton />}
        <PagesContainer>
          <Page value={value} index={0}>
            <Home />
          </Page>
        </PagesContainer>
      </MainLayout>
    </PortfolioContext.Provider>
  );
};

export default App;
