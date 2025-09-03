import { Tab, Tabs } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useContext } from "react";
import { PortfolioContext } from "../../context";
import { tabProps, tabsData } from "./../data/tabsData.sidebar";
const SidebarTabs = () => {
  const { value, handleChange, setDrawerOpen } = useContext(PortfolioContext);
  const data = tabsData()
  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      value={value}
      onChange={handleChange}
      indicatorColor="secondary"
      textColor="secondary"
    >
      {data.map((tab, index) => (
        <Tab
          label={tab.label}
          icon={tab.icon}
          iconPosition="start"
          key={index}
          {...tabProps(index)}
          onClick={() => {
            setDrawerOpen(false);
          }}
          sx={{
            "&.MuiTab-root": {
              minHeight: 50,
              m: 0.5,
              backgroundColor: grey[800],
              borderRadius: 2,
            },
          }}
        />
      ))}
    </Tabs>
  );
};
export default SidebarTabs;
