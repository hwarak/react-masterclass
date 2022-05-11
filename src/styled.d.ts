// styled components를 import하고
import 'styled-components';

// 내 styled components의 테마 정의를 확장하는거야
declare module 'styled-components' {
  export interface DefaultTheme {
      textColor: string
      backgroundColor: string
      btnColor: string
  }
}
