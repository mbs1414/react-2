import { Grid, Drawer, Box, Fab, useMediaQuery, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect, useState } from "react";
import DrawerContent from "./UI/DrawerContent";
import { MenuRounded } from "@mui/icons-material";

const Sidebar = ({ value, handleChange }) => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (!isMdScreen) {
      setDrawerOpen(false);
    }
  }, [isMdScreen]);

  return (
    <Grid size={{ xs: 0, md: 3, lg: 2 }} sx={{ backgroundColor: grey[900] }}>
      {/* Fab فقط روی اسکرین کوچیک */}
      {isMdScreen && (
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
      )}

      {/* نمایش Sidebar بسته به سایز */}
      {!isMdScreen ? (
        <DrawerContent value={value} handleChange={handleChange} />
      ) : (
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
          <DrawerContent
            value={value}
            handleChange={handleChange}
            setDrawerOpen={setDrawerOpen}
          />
        </Drawer>
      )}
    </Grid>
  );
};

export default Sidebar;
