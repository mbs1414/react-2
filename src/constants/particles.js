export const firefly = {
  key: "hollowknight",
  name: "Hollow Knight",
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "bubble",
      },
    },
    modes: {
      bubble: {
        distance: 40,
        duration: 2,
        opacity: 8,
        size: 6,
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5,
        },
        radius: 60,
      },
      grab: {
        distance: 400,
        links: {
          opacity: 1,
        },
      },
      push: {
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      slow: {
        active: false,
        radius: 0,
        factor: 1,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      blink: false,
      color: "#ffffff",
      consent: false,
      distance: 25,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      outModes: "bounce",
      speed: 1,
    },
    number: {
      density: {
        enable: false,
      },
      value: 400,
    },
    opacity: {
      animation: {
        enable: true,
        speed: 2,
        sync: false,
      },
      value: {
        min: 0.05,
        max: 0.4,
      },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: 1,
    },
  },
  polygon: {
    draw: {
      enable: true,
      stroke: {
        color: "#fff",
        width: 0.5,
        opacity: 0.2,
      },
    },
    enable: true,
    move: {
      radius: 10,
    },
    inline: {
      arrangement: "equidistant",
    },
    scale: 2,
    type: "inline",
    url: "https://particles.js.org/images/hollowknight.svg",
  },
  // background: {
  //   color: "#000000",
  //   image: "",
  //   position: "50% 50%",
  //   repeat: "no-repeat",
  //   size: "cover",
  // },
};

export const coloredChaos = {
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      resize: true,
      onHover: {
        enable: true,
        mode: "bubble",
      },
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        size: 40,
      },
    },
  },
  particles: {
    color: {
      value: [
        "#3998D0",
        "#2EB6AF",
        "#A9BD33",
        "#FEC73B",
        "#F89930",
        "#F45623",
        "#D62E32",
        "#EB586E",
        "#9952CF",
      ],
    },
    move: {
      attract: {
        enable: true,
        rotate: {
          x: 600,
          y: 1200,
        },
        distance: 250,
      },
      direction: "none",
      enable: true,
      outModes: {
        default: "out",
      },
      random: false,
      speed: 15,
      size: true,
      straight: false,
      trail: {
        fillColor: "#fff",
        enable: true,
        length: 3,
      },
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 100,
    },
    opacity: {
      value: 1,
    },
    shape: {
      type: ["circle", "square"],
    },
    rotate: {
      value: 0,
      direction: "random",
      animation: {
        enable: true,
        speed: 10,
      },
    },
    size: {
      random: {
        enable: true,
        minimumValue: 5,
      },
      animation: {
        enable: true,
        speed: 6,
        minimumValue: 5,
      },
      value: 15,
    },
  },
  detectRetina: true,
};
