export type ThemeProps = {
  fonts: string[];
  fontSizes: {
    xsmall: string;
    small: string;
    normal: string;
    medium: string;
    large: string;
    xlarge: string;
  };
  spaces: {
    xsmall: string;
    small: string;
    normal: string;
    medium: string;
    large: string;
    xlarge: string;
  };
  colors: {
    text: {
      primary: string;
      secondary: string;
    };
    bg: {
      darker: string;
      dark: string;
    };
    border: {
      dark: string;
    };
  };
};
