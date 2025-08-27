import { Tab, Tabs } from "@mui/material";
import { grey } from "@mui/material/colors";
import {
  HomeRounded,
  TextSnippetRounded,
  TerminalRounded,
  MessageRounded,
  ConnectWithoutContactRounded,
} from "@mui/icons-material";
import { useContext } from "react";
import { PortfolioContext } from "../../context";
const tabProps = (index) => {
  return {
    id: `sidebar-tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
};
const SidebarTabs = () => {
  const { value, handleChange, setDrawerOpen } = useContext(PortfolioContext);
  const tabs = [
    { label: "خانه", icon: <HomeRounded /> },
    { label: "درباره من", icon: <TextSnippetRounded /> },
    { label: "نمونه کارها", icon: <TerminalRounded /> },
    { label: "نظرات دانشجویان", icon: <MessageRounded /> },
    { label: "ارتباط با من", icon: <ConnectWithoutContactRounded /> },
  ];

  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      value={value}
      onChange={handleChange}
    >
      {tabs.map((tab, index) => (
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
