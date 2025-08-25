import { Box, Fab } from "@mui/material";
import { MenuRounded } from "@mui/icons-material";

const DrawerActionButton = ({ setDrawerOpen }) => {
  return (
    <Box sx={{ display: "block" }}>
      <Fab
        aria-label="Sidebar"
        size="small"
        sx={{ m: 2 }}
        color="error"
        onClick={() => setDrawerOpen(true)}
      >
        <MenuRounded />
      </Fab>
    </Box>
  );
};
export default DrawerActionButton