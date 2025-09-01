import { Grid } from "@mui/material";

const PagesContainer = ({ children }) => {
  return (
    <Grid
      size={{ xs: 12, md: 9, lg: 10 }}
      sx={{ backgroundColor: "whitesmoke" }}
    >
      {children}
    </Grid>
  );
};
export default PagesContainer;
