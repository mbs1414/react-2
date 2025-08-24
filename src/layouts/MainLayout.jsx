import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { theme } from "./themes";
import { Grid } from "@mui/material";
const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const MainLayout = ({children}) => {
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <title>وب سایت شخصی انوش</title>
        <link rel="icon" href="/favicon/favicon.ico" />
        <Grid container sx={{ height: "100vh" }}>
          {children}
        </Grid>
      </ThemeProvider>
    </CacheProvider>
  );
};
export default MainLayout;
