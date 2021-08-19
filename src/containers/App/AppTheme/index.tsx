import GlobalStyle from 'common/globalStyles';
import Theme from 'common/theme';
import React from 'react';
import { ThemeProvider } from 'styled-components';

export interface AppThemeProps {
  children: JSX.Element;
}

const AppTheme: React.FC<AppThemeProps> = ({ children }: AppThemeProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default AppTheme;
