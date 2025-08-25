import { Avatar, Typography, useMediaQuery, useTheme } from "@mui/material";
import avatar from "./../../assets/Avatar.jpg";

const SidebarHeader = () => {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
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
    </>
  );
};
export default SidebarHeader;
