import { Anchor } from "grommet";
import styled from "styled-components";

export const SAnchor = styled(Anchor).attrs({
  color: "dark-1",
  margin: { horizontal: "medium" },
})`
  font-weight: 300;
  font-size: 1.125rem;
`;

export const Logo = styled.span`
  font-family: "Rammetto One";
  font-size: 24px;
  color: #fff;

  @supports (-webkit-text-stroke: 1px black) {
    -webkit-text-stroke: 1px ${(props) => props.theme?.global?.colors?.["neutral-4"]?.toString()};
    -webkit-text-fill-color: #fff;
  }
`;
