import {
  FavoriteRounded,
  CopyrightRounded,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const SidebarFooter = () => {
    return (
      <>
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
      </>
    );
}
export default SidebarFooter