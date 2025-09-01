import { grey } from "@mui/material/colors";
import Avatar02 from "./../assets/Avatar02.jpg";
import {
  Avatar,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { CodeRounded, SelfImprovementRounded } from "@mui/icons-material";
import { useContext } from "react";
import { PortfolioContext } from "./../context";
import DevInfo from "./components/DevInfo";
import Skill from "./components/Skill";
import { devSkills } from "./../constants/skills";
const About = () => {
  const { htmlSkill, cssSkill, jsSkill, reactSkill, nodeSkill, gitSkill } =
    devSkills;
  const { isMdScreen } = useContext(PortfolioContext);
  const devInfo = [
    { label: "نام و نام خانوادگی", value: "محمد باباخانی" },
    { label: "سن", value: "24 سال" },
    { label: "شهر", value: "شهریار" },
    { label: "ایمیل", value: "mohammad@gmail.com" },
    { label: "شماره موبایل", value: "09017379097" },
  ];
  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "whitesmoke",
      }}
    >
      <CardContent>
        <Grid
          container
          sx={{
            mx: 3,
          }}
        >
          <Grid
            size={{
              xs: 0,
              sm: 0,
              md: 4,
            }}
          >
            {!isMdScreen && (
              <Avatar
                src={Avatar02}
                variant="rounded"
                sx={{
                  height: 250,
                  width: 250,
                  m: "0 auto",
                }}
              >
                Mohammad
              </Avatar>
            )}
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 12,
              md: 8,
            }}
          >
            <Divider
              textAlign="left"
              sx={{
                "&::before, &::after": {
                  borderColor: "primary.main",
                },
              }}
            >
              <Chip
                color="primary"
                icon={<CodeRounded />}
                label={
                  <Typography variant="body1">توسعه دهنده فرانت اند</Typography>
                }
                sx={{ p: 3 }}
              />
            </Divider>
            {devInfo.map((info, index) => (
              <DevInfo key={index}>{`${info.label}: ${info.value}`}</DevInfo>
            ))}
          </Grid>
        </Grid>
        <Grid container>
          <Grid sx={{ width: 1, mt: 1 }}>
            <Divider
              textAlign="center"
              sx={{
                "&::before, &::after": {
                  borderColor: "secondary.main",
                },
              }}
            >
              <Chip
                color="secondary"
                icon={<SelfImprovementRounded />}
                label={<Typography variant="body1">مهارت های من</Typography>}
                sx={{ p: 3 }}
              />
            </Divider>
            <Skill icon={htmlSkill.icon} color={htmlSkill.color} name={htmlSkill.name} value={95} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default About;
