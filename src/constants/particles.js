export const fireworks = {
  fullScreen: { enable: true },
  detectRetina: true,
  background: {
    color: "#000",
  },
  fpsLimit: 60,
  emitters: {
    direction: "top",
    life: {
      count: 0,
      duration: 0.1,
      delay: 0.1,
    },
    rate: {
      delay: 0.15,
      quantity: 1,
    },
    size: {
      width: 100,
      height: 0,
    },
    position: {
      y: 100,
      x: 50,
    },
  },
  particles: {
    number: { value: 0 },
    destroy: {
      mode: "split",
      split: {
        count: 1,
        factor: { value: 1 / 3 },
        rate: { value: 100 },
        particles: {
          stroke: {
            color: {
              value: ["#ffffff", "#b22234", "#3c3bfe", "#ff4081", "#ffeb3b"],
            },
            width: 1,
          },
          number: { value: 0 },
          collisions: { enable: false },
          opacity: {
            value: 1,
            animation: {
              enable: true,
              speed: 0.7,
              minimumValue: 0.1,
              startValue: "max",
              destroy: "min",
            },
          },
          shape: { type: "circle" },
          size: {
            value: 1,
            animation: { enable: false },
          },
          life: {
            count: 1,
            duration: { value: { min: 1, max: 2 } },
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            outMode: "destroy",
          },
        },
      },
    },
    life: { count: 1 },
    shape: { type: "line" },
    size: {
      value: 50,
      animation: {
        enable: true,
        sync: true,
        speed: 150,
        startValue: "max",
        destroy: "min",
      },
    },
    stroke: { color: { value: "#ffffff" }, width: 1 },
    rotate: { path: true },
    move: {
      enable: true,
      gravity: { acceleration: 15, enable: true, inverse: true, maxSpeed: 100 },
      speed: { min: 10, max: 20 },
      outModes: { default: "destroy", top: "none" },
      trail: { fillColor: "#000", enable: true, length: 10 },
    },
  },
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
