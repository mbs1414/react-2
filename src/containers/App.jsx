import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import MainLayout from "./../layouts/MainLayout";
import { Sidebar } from "./../components/sidebar";
import PagesContainer from "./../containers/PagesContainer";
import { useEffect, useState } from "react";
import Page from "../pages/components/Page";
import SidebarContainer from "./SidebarContainer";
import { PortfolioContext } from "../context";
import primaryPic from "./../assets/bg01-min.jpeg";
import { DrawerActionButton } from "../components/drawer";
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
            <Box
              sx={{
                backgroundImage: `url(${primaryPic})`,
                height: "100vh",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <Typography
                color="whiteSmoke"
                variant="h5"
                sx={{ textAlign: "center" }}
              >
                صفحه اصلی
              </Typography>
            </Box>
          </Page>
        </PagesContainer>
      </MainLayout>
    </PortfolioContext.Provider>
  );
};

export default App;
