import styled from "styled-components";
import { Box, BoxProps } from "grommet";
import { FC } from "react";

const ContentContainer = styled(Box as FC<BoxProps & { size?: "large" | "medium" }>).attrs((props) => ({
  width: props.width || {
    max: props.size === "large" ? "1440px" : "1032px",
  },
  pad: {
    horizontal: "medium",
  },
  margin: { horizontal: "auto" },
}))`
  width: 100%;
`;

export default ContentContainer;
