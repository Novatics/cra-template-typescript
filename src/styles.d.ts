/* eslint-disable @typescript-eslint/no-empty-interface */
// styled.d.ts
import 'styled-components';
import { CustomThemeProps } from './common/theme/type';

declare module 'styled-components' {
  export interface DefaultTheme extends CustomThemeProps {}
}
