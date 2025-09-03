import { Box, Typography } from "@mui/material";
import primaryPic from "./../assets/bg02-min.jpeg";
import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { firefly } from "./../constants/particles";
import { motion } from "framer-motion";
const Home = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const particlesLoaded = (container) => {
    console.log(container);
  };

  const nameEl = useRef(null);
  const infoEl = useRef(null);
  const [index, setIndex] = useState(0);
  const strings = [
    "توسعه دهنده وب هستم",
    "مهندس صنایع هستم",
    "طراح هستم",
  ];
  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["محمد باباخانی"],
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 10,
      showCursor: false,
    });
    const stirngsTransition = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);
    // const typedInfo = new Typed(infoEl.current, {
    //   strings: strings,
    //   startDelay: 1500,
    //   typeSpeed: 80,
    //   backSpeed: 50,
    //   backDelay: 50,
    //   showCursor: false,
    //   loop: true,
    // });
    return () => {
      typedName.destroy();
      // typedInfo.destroy();
      clearInterval(stirngsTransition);
    };
  }, []);
  return (
    <div>
      <title> انوش | صفحه اصلی</title>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={firefly}
        />
      )}
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
        <Typography ref={nameEl} color="whiteSmoke" variant="h3"></Typography>
        <Box component="div" sx={{ display: "flex", flexDirection: "row" }}>
          <Typography color="whiteSmoke" variant="h4">
            من یک
          </Typography>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              color="whiteSmoke"
              variant="h4"
              sx={{
                textDecoration: "underline",
                textDecorationColor: (theme) => theme.palette.primary.main,
              }}
              ref={infoEl}
            >
              {strings[index % strings.length]}
            </Typography>
          </motion.div>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
