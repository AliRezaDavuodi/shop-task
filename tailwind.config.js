module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blackish: "#131822",
        lighterBlackish: "#131822b3",
        grayish: "#D8DADC",
        darkerGray: "#BDBDBD",
        white: "#ffffff",
      },

      spacing: {
        "1/1": "100%",
        "9/16": "56.25%",
        "3/5": "66%",
        "3/4": "75%",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.625rem",
        "5xl": "3.25rem",
        "6xl": "5.5rem",
      },
      inset: {
        "1/2": "50%",
        full: "100%",
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.01em",
        wider: "0.02em",
        widest: "0.4em",
      },
      lineHeight: {
        none: "1",
        tighter: "1.125",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
        3: ".75rem",
        4: "1rem",
        5: "1.2rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
      },
      minWidth: {
        10: "2.5rem",
        28: "7rem",
        48: "12rem",
        56: "14rem",
        120: "30rem",
      },
      minHeight: {
        10: "2.5rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
        48: "12rem",
        56: "14rem",
        120: "30rem",
      },
      opacity: {
        90: "0.9",
      },
      scale: {
        98: ".98",
        101: "1.01",
        102: "1.02",
        103: "1.03",
        104: "1.04",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        up: "up .5s ease-in-out",
        moveLeft: "moveLeft .35s ease-in-out",
        moveRight: "moveRight .3s ease-in-out",
        showUp: "showUp .5s ease-in-out",
        hide: "hide 0.3s ease-in-out",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-5%)" },
        },
        up: {
          "0%": { bottom: "-100%" },
          "100%": { bottom: "0" },
        },
        moveLeft: {
          "0%": { left: "66%" },
          "100%": { left: "2rem" },
        },
        moveRight: {
          "0%": { left: "2rem" },
          "100%": { left: "66%" },
        },
        showUp: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        hide: {
          "0%": { opacity: "100" },
          "100%": { opacity: "0" },
        },
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "group-hover"],
    textColor: ["responsive", "hover", "focus", "group-hover"],
    translate: ["responsive", "hover", "focus", "group-hover"],
    boxShadow: ["responsive", "hover", "focus", "focus-within"],
    opacity: ["responsive", "hover", "focus", "group-hover"],
  },
  corePlugins: {
    preflight: true /* the plugin extends Preflight so make sure it is not disabled */,
  },
  plugins: [],
};
