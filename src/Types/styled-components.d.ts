import "styled-components";
import { Theme } from "../Theme/theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
