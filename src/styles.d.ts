// styled.d.ts
import 'styled-components';
import { CustomThemeProps } from './common/theme/type';

declare module 'styled-components' {
  export interface DefaultTheme extends CustomThemeProps {
    colors: {
      bg: {
        dark: string;
      };
    };
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: IPalette;
      secondary: IPalette;
    };
  }
}
