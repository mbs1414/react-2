import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { cloneElement } from "react";
import logo from "./../../assets/logo.svg";
const Header = () => {
  function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return children
      ? cloneElement(children, {
          elevation: trigger ? 4 : 0,
        })
      : null;
  }

  return (
    <>
      <ElevationScroll>
        <AppBar position="static">
          <Toolbar>
            <img src={logo} alt="logo" style={{ width: "3rem" }} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};
export default Header;
