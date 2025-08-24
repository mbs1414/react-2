import {
  Avatar,
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
  Tabs,
  Tab,
} from "@mui/material";
import {
  HomeRounded,
  TextSnippetRounded,
  TerminalRounded,
  MessageRounded,
  ConnectWithoutContactRounded,
  FavoriteRounded,
  CopyrightRounded,
} from "@mui/icons-material";
import avatar from "./../assets/Avatar.jpg";
import { grey } from "@mui/material/colors";

const DrawerContent = ({ value, handleChange, setDrawerOpen }) => {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };
  const tabs = [
    { label: "خانه", icon: <HomeRounded /> },
    { label: "درباره من", icon: <TextSnippetRounded /> },
    { label: "نمونه کارها", icon: <TerminalRounded /> },
    { label: "نظرات دانشجویان", icon: <MessageRounded /> },
    { label: "ارتباط با من", icon: <ConnectWithoutContactRounded /> },
  ];

  return (
    <Box sx={{ textAlign: "center" }}>
      {!isMdScreen ? (
        <Avatar
          src={avatar}
          variant="rounded"
          sx={{ height: 150, width: 150, margin: "0 auto", mt: 2 }}
          alt="Mohammad Babakhani"
        >
          Mohammad Babakhani
        </Avatar>
      ) : null}

      <Typography variant="h6" color="whiteSmoke">
        محمد باباخانی
      </Typography>
      <Typography variant="caption" color="whiteSmoke">
        توسعه دهنده فرانت اند
      </Typography>
      <Divider
        orientation="horizontal"
        variant="middle"
        sx={{ mt: 2, borderColor: "whitesmoke" }}
      />
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
            onClick={()=>{setDrawerOpen(false)}}
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
      <Divider
        orientation="horizontal"
        variant="middle"
        sx={{ mt: 2, borderColor: "whitesmoke" }}
      />
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "end",
          height: 100,
        }}
      >
        <Typography variant="subtitle2" color="whiteSmoke">
          طراحی شده با{" "}
          <FavoriteRounded
            sx={{
              verticalAlign: "middle",
              color: "tomato",
              height: 20,
            }}
          />
        </Typography>
        <Typography variant="caption" color="whitesmoke" sx={{ mt: 2 }}>
          کپی رایت ۱۴۰۱{" "}
          <CopyrightRounded sx={{ verticalAlign: "middle", height: 16 }} />
        </Typography>
      </Box>
    </Box>
  );
};
export default DrawerContent;
