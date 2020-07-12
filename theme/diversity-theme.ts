import { deepMerge, deepFreeze } from "grommet/utils";
import { ThemeType, grommet } from "grommet";

const boldFont = {
  weight: 400,
  face: `
    font-style: normal;
    font-weight: 400;
  `,
};

const blackFont = {
  weight: 900,
  face: `
    font-style: normal;
    font-weight: 900;
  `,
};

export const diversityTheme: ThemeType = {
  global: {
    colors: {
      brand: "#F0E03B",
      border: {
        dark: "#ebebeb",
        light: "#444444",
      },
      background: "#fff8e1",
      placeholder: "rgba(68, 68, 68, 0.5)",
      control: {
        dark: "#FFEB3B",
        light: "#0014C4",
      },
      "accent-1": "#e6e073",
      "accent-2": "#7A993B",
      "accent-3": "#e6e4cf",
      "accent-4": "#bfb930",
      "neutral-1": "#5c5095",
      "neutral-2": "#5B347B",
      "neutral-3": "#d4d0e6",
      "neutral-4": "#C24343",
      "neutral-5": "#81B1EC",
    },
    breakpoints: {
      small: { value: 500 },
      medium: { value: 768 },
      large: { value: 1024 },
      largeDesktop: { value: 1440 },
    },
    elevation: {
      light: {
        none: "none",
        xsmall: "0px 1px 2px rgba(68, 68, 68, 0.5)",
        small: "0px 2px 4px rgba(68, 68, 68, 0.5)",
        medium: "0px 3px 8px rgba(68, 68, 68, 0.5)",
        large: "0px 6px 12px rgba(68, 68, 68, 0.5)",
        xlarge: "0px 8px 16px rgba(68, 68, 68, 0.5)",
      },
    },
    drop: {
      background: "rgb(255, 242, 201)",
      shadow: "0px 3px 8px rgba(68, 68, 68, 0.5)",
      border: {
        radius: "2px",
      },
    },
    input: {
      border: {
        radius: "4px",
      },
    },
    font: {
      family: "'Londrina Solid', display",
      face: `
        font-style: normal;
        font-weight: 300;
      `,
    },
  },
  layer: {
    background: "#fff8e1",
    overlay: {
      background: "rgba(68, 68, 68, 0.5)",
    },
    border: {
      radius: "4px",
    },
  },
  checkBox: {
    border: {
      color: {
        dark: "#ebebeb",
        light: "#444444",
      },
    },
    check: {
      radius: "4px",
    },
    toggle: {
      radius: "2px",
    },
  },
  anchor: {
    color: {
      dark: "#FFEB3B",
      light: "#0014C4",
    },
  },
  heading: {
    level: {
      "1": { font: blackFont },
      "2": { font: blackFont },
      "3": { font: blackFont },
      "4": { font: boldFont },
      "5": { font: boldFont },
      "6": { font: boldFont },
    },
  },
  radioButton: {
    border: {
      color: {
        dark: "#ebebeb",
        light: "#444444",
      },
    },
  },
  button: {
    border: {
      radius: "6px",
    },
    default: {},
    primary: {
      padding: {
        horizontal: "medium",
        vertical: "xsmall",
      },
      color: "white",
      background: "accent-2",
      extend: `
      border-bottom: 2px solid #fff;
      font-weight: 400;
      text-transform: uppercase;
      text-align: center;
      `,
    },
    secondary: {},
  },
};

export default deepFreeze(diversityTheme);
