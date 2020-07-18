import { diversityTheme } from "./../theme/diversity-theme";
import { grommet } from "grommet";
import "styled-components";

type Theme = typeof diversityTheme & typeof grommet;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
