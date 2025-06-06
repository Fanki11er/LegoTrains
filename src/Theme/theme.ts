export const theme: Theme = {
  colors: {
    transparent: "rgba(30, 0, 0, 0)",
    black: "rgba(0, 0, 0, 1)",
    lightBlack: "rgba(17, 19, 21, 1)",
    transparentLightBlack: "rgba(17, 19, 21, 0.9)",
    darkGray: "rgba(26, 29, 31, 1)",
    white: "#FFFFFF",
    purple: "rgba(102, 102, 252, 1 )",
    transparentPurple: "rgba(102, 102, 252, 0.5 )",
    darkBlue: "rgba(4, 16, 41, 1)",
    lightGray: "rgba(111, 112, 135, 1)",
    yellow: "rgba(255, 198, 67, 1)",
    blue: "rgba(6, 95, 233, 1)",
    red: "rgba(186, 49, 79, 1)",
    green: "rgba(50, 174, 96, 1 )",
    orange: "rgba(253, 119, 77, 1)",
    greenGray: "rgba(64, 79, 67, 1)",
    purpleGray: "rgba(39, 53, 76, 1)",
    transparentBlack: "rgba(0, 0, 0, 0.8)",
    nestBlue: "rgba(44, 66, 230, 1)",
    floorBlue: "rgba(64, 110, 198, 1)",
  },

  defaultFontFamily: "Inter, sans-serif",

  fontSizes: {
    XS: "0.5rem",
    S: "0.8rem",
    M: "1.5rem",
    L: "2.rem",
  },
};

export type Theme = {
  colors: {
    transparent: string;
    black: string;
    lightBlack: string;
    darkGray: string;
    white: string;
    purple: string;
    transparentPurple: string;
    darkBlue: string;
    lightGray: string;
    yellow: string;
    blue: string;
    red: string;
    green: string;
    orange: string;
    greenGray: string;
    purpleGray: string;
    transparentBlack: string;
    transparentLightBlack: string;
    nestBlue: string;
    floorBlue: string;
  };

  fontSizes: {
    XS: string;
    S: string;
    M: string;
    L: string;
  };

  // borderRadius: {

  // };

  // padding: {

  // };

  // devices: {
  //   small: string;
  // };

  defaultFontFamily: string;
};
