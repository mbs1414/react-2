import { Drawer } from "@mui/material";
import SidebarContent from "../sidebar/SidebarContent";

const SidebarDrawer = ({ drawerOpen, setDrawerOpen, value, handleChange }) => {
  return (
    <Drawer
      open={drawerOpen}
      variant="temporary"
      onClose={() => setDrawerOpen(false)}
      sx={{
        "& .MuiDrawer-paper": {
          width: 300,
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#666",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#888",
          },
          scrollbarWidth: "thin",
          scrollbarColor: "#666 transparent",
        },
      }}
    >
      <SidebarContent
        value={value}
        handleChange={handleChange}
        setDrawerOpen={setDrawerOpen}
      />
    </Drawer>
  );
};
export default SidebarDrawer;
