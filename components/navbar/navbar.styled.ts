import { Anchor, Text } from "grommet";
import styled from "styled-components";

export const SLinkText = styled(Text).attrs((props) => ({
  color: "dark-1",
  margin: props.margin || { horizontal: "medium" },
}))`
  font-weight: 300;
  font-size: 1.125rem;
`;

export const Logo = styled(Text)`
  font-family: "Rammetto One";
  color: #fff;

  @supports (-webkit-text-stroke: 1px black) {
    -webkit-text-stroke: 1px ${(props) => props.theme?.global?.colors?.["neutral-4"]?.toString()};
    -webkit-text-fill-color: #fff;
  }
`;
