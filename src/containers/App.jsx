import { Typography } from "@mui/material";
import MainLayout from "./../layouts/MainLayout";
import {Sidebar} from "./../components/sidebar";
import ContentContainer from "./../containers/ContentContainer";
import { useState } from "react";
import TabPanel from "../components/TabPanel";
import SidebarContainer from "./SidebarContainer"
const App = () => {
  const [value, setValue] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <MainLayout>
      <SidebarContainer>
        <Sidebar
          value={value}
          handleChange={handleChange}
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
        />
      </SidebarContainer>
      <ContentContainer>
        <TabPanel value={value} index={0}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            صفحه اصلی
          </Typography>
        </TabPanel>
      </ContentContainer>
    </MainLayout>
  );
};

export default App;
