import { CustomThemeProps } from './type';

const Theme: CustomThemeProps = {
  fonts: ['Work Sans', 'sans-serif', 'Roboto'],
  fontSizes: {
    xsmall: '0.75em',
    small: '1em',
    normal: '1.2rem',
    medium: '2em',
    large: '2.2em',
    xlarge: '2.5em'
  },
  spaces: {
    xsmall: '0.2em',
    small: '0.5em',
    normal: '0.7em',
    medium: '1em',
    large: '2em',
    xlarge: '2.5em'
  },
  colors: {
    text: {
      primary: '#eeeeee',
      secondary: '#b9b9b9'
    },
    bg: {
      darker: '#371c9d',
      dark: '#371c9d'
    },
    border: {
      dark: '#4b4a4a'
    }
  }
};

export default Theme;
