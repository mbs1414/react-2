import { Avatar, Typography, useMediaQuery, useTheme } from "@mui/material";
import avatar from "./../../assets/Avatar.jpg";
import { RandomReveal } from "react-random-reveal";
import { alphabetPersian } from "./../../constants/alphabetPersian";
import { useState } from "react";
const SidebarHeader = () => {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [start, setStart] = useState(false );
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

      <Typography variant="h6" color="#F93C92">
        <Typography variant="caption" color="tomato">
          {" {{ "}
        </Typography>
        <RandomReveal
          isPlaying
          duration={10}
          characters="محمد باباخانی"
          characterSet={alphabetPersian}
          onComplete={()=>{setStart(true)}}
        />
        <Typography variant="caption" color="tomato">
          {" }} "}
        </Typography>
      </Typography>
      {start && (
        <Typography variant="caption" color="gray">
          <RandomReveal
            characters="توسعه دهنده فرانت اند"
            isPlaying
            duration={5}
            characterSet={alphabetPersian}
          />
        </Typography>
      )}
    </>
  );
};
export default SidebarHeader;
