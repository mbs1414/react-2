import { Box, Typography } from "@mui/material";
import primaryPic from "./../../assets/bg02-min.jpeg";
import Typed from "typed.js";
import { useCallback, useEffect, useRef } from "react";
import Particles from "@tsparticles/react";
import { coloredChaos, fireworks } from "./../../constants/particles";
import { loadFull } from "tsparticles";
const Home = () => {
    const particlesInit = useCallback(async (engine) => {
      await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async (container) => {
      await console.log(container);
    }, []);

  const nameEl = useRef(null);
  const infoEl = useRef(null);
  useEffect(() => {
    const strings = [
      "من یک توسعه دهنده وب هستم",
      "من مهندس صنایع هستم",
      "من یک طراح هستم",
    ];
    const typedName = new Typed(nameEl.current, {
      strings: ["محمد باباخانی"],
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 10,
      showCursor: false,
    });
    const typedInfo = new Typed(infoEl.current, {
      strings: strings,
      startDelay: 1500,
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 50,
      showCursor: false,
      loop: true,
    });
    return () => {
      typedName.destroy();
      typedInfo.destroy();
    };
  }, []);
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${primaryPic})`,
          height: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={fireworks}
        />
        <Typography ref={nameEl} color="whiteSmoke" variant="h3"></Typography>
        <Typography
          color="whiteSmoke"
          variant="h4"
          sx={{
            textDecoration: "underline",
            textDecorationColor: (theme) => theme.palette.primary.main,
          }}
          ref={infoEl}
        ></Typography>
      </Box>
    </div>
  );
};

export default Home;
