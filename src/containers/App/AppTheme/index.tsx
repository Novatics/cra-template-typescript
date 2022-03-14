import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'common/globalStyles'
import Theme from 'common/theme'

export interface IAppThemeProps {
  children: React.ReactNode
}

const AppTheme = ({ children }: IAppThemeProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default AppTheme
