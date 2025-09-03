import {
  Badge,
  Box,
  Chip,
  Divider,
  LinearProgress,
  Typography,
} from "@mui/material";
import Html from "./../../assets/icons/html5-original.svg";
const Skill = ({ icon, color, name, value }) => {
  return (
    <>
      <Divider
        textAlign="left"
        sx={{
          "&::before, &::after": {
            borderColor: `${color}.main`,
          },
          mt: 3,
        }}
      >
        <Chip
          icon={
            <Box
              component="img"
              src={icon}
              sx={{
                height: 30,
              }}
            ></Box>
          }
          color={color}
          label={name}
          sx={{
            color: "black",
            p: 3,
          }}
        />
      </Divider>
      <Box sx={{ display: "flex", alignItems: "center", gap:2 }}>
        <Box sx={{ width: "100%", mx: 1 }}>
          <LinearProgress
            variant="determinate"
            value={value}
            color={color}
            sx={{ height: 10, borderRadius: 5 }}
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Badge
            variant="standard"
            color={color}
            badgeContent={`${Math.round(value)}%`}
          ></Badge>
        </Box>
      </Box>
    </>
  );
};
export default Skill;
