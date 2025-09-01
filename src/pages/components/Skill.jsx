import { Box, Chip, Divider, LinearProgress, Typography } from "@mui/material";
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
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mx: 1 }}>
          <LinearProgress
            variant="determinate"
            value={value}
            color={color}
            sx={{ height: 10, borderRadius: 5 }}
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="purple">
            {value}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default Skill;
