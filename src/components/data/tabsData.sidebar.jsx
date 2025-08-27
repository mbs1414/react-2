import {
  HomeRounded,
  TextSnippetRounded,
  TerminalRounded,
  MessageRounded,
  ConnectWithoutContactRounded,
} from "@mui/icons-material";

export const tabProps = (index) => {
  return {
    id: `sidebar-tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
};

export const tabsData = () => {
  const tabsData = [
    { label: "خانه", icon: <HomeRounded /> },
    { label: "درباره من", icon: <TextSnippetRounded /> },
    { label: "نمونه کارها", icon: <TerminalRounded /> },
    { label: "نظرات دانشجویان", icon: <MessageRounded /> },
    { label: "ارتباط با من", icon: <ConnectWithoutContactRounded /> },
  ];
  return tabsData
};
