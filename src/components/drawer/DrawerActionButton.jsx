import { Box, Fab } from "@mui/material";
import { MenuRounded } from "@mui/icons-material";
import { useContext } from "react";
import { PortfolioContext } from "../../context";

const DrawerActionButton = () => {
  const {setDrawerOpen} = useContext(PortfolioContext)
  return (
    <Box sx={{ position: "absolute" }}>
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