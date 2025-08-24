import { Typography } from "@mui/material";
import MainLayout from "./layouts/MainLayout";
import Sidebar from "./components/Sidebar";
import ContentContainer from "./components/ContentContainer";
import { useState } from "react";
import TabPanel from "./components/tabs/TabPanel";
const App = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <MainLayout>
      <Sidebar value={value} handleChange={handleChange} />
      <ContentContainer>
        <TabPanel value={value} index={0}>
          <Typography variant="h5" sx={{textAlign: 'center'}}>صفحه اصلی</Typography>
        </TabPanel>
      </ContentContainer>
    </MainLayout>
  );
};

export default App;
