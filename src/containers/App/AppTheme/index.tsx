import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'common/globalStyles';

const theme = {
  fonts: ['Work Sans', 'sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '2.2em',
    xlarge: '2.5em'
  },
  spaces: {
    xsmall: '0.2em',
    small: '0.5em',
    normal: '0.7em',
    medium: '1em'
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

export interface AppThemeProps {
  children: JSX.Element;
}

const AppTheme: React.FC<AppThemeProps> = ({ children }: AppThemeProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default AppTheme;
