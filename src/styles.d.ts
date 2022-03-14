/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'
import { TCustomThemeProps } from './common/theme/type'

declare module 'styled-components' {
  export interface DefaultTheme extends TCustomThemeProps {}
}
