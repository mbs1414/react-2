import { Box, Divider } from "@mui/material";
import { SidebarFooter, SidebarHeader, SideBarTabs } from ".";

const SidebarContent = ({ value, handleChange, setDrawerOpen }) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <SidebarHeader />
      <Divider
        orientation="horizontal"
        variant="middle"
        sx={{ mt: 2, borderColor: "whitesmoke" }}
      />
      <SideBarTabs
        value={value}
        handleChange={handleChange}
        setDrawerOpen={setDrawerOpen}
      />
      <Divider
        orientation="horizontal"
        variant="middle"
        sx={{ mt: 2, borderColor: "whitesmoke" }}
      />
      <SidebarFooter />
    </Box>
  );
};
export default SidebarContent;
