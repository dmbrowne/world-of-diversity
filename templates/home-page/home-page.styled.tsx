import { FC, forwardRef } from "react";
import styled from "styled-components";
import { Box, Heading, BoxProps, BoxTypes } from "grommet";
import ContentContainer from "@components/content-container";

export const SImageContainer = styled(Box as FC<BoxProps & { centerImg: boolean }>)`
  width: 100%;
  padding-left: ${(props) => (props.fill ? 0 : "5vw")};

  div {
    overflow: visible !important;
  }
  img {
    transform: ${(props) => (props.centerImg ? "translate3d(0, 30px, 0)" : "translate3d(7vw, 30px, 0)")};
    max-width: ${(props) => (props.fill ? "110%" : "none")};
  }
`;

export const SHeroContent = styled(ContentContainer).attrs({ justify: "between", width: { max: "1440px" } })`
  position: relative;
`;

export const SMobileHeroHeading = styled(Heading).attrs({ level: 1 })`
  text-align: center;
  color: black;
  text-shadow: 2px 4px 6px rgba(255, 255, 255, 0.8);
  margin-bottom: 0;
`;

export const SHeroHeading = styled(SMobileHeroHeading)`
  text-align: left;
  top: 1vw;
  left: 24px;
  position: absolute;
  z-index: 2;
  max-width: 400px;
  margin-top: 0;
`;

export const SSection = styled(Box).attrs((props) => ({
  pad: props.pad || { vertical: "large" },
  align: "center",
  justify: "center",
  fill: "horizontal",
}))`
  min-height: 0;

  @media (min-width: ${({ theme }) => `${theme.global?.breakpoints?.tablet?.value}px`}) {
    min-height: 400px;
  }
  @media (min-width: ${({ theme }) => `${theme.global?.breakpoints?.large?.value}px`}) {
    min-height: 50vh;
  }
`;

export const Section = forwardRef<BoxTypes, any>((props, ref) => (
  <SSection ref={ref} forwardedAs="section" {...props} />
));

export const DatoImageContainer = styled(Box)`
  img {
    width: auto !important;
  }
`;

export const SSectionHeading = styled(Heading).attrs({
  textAlign: "center",
  margin: { top: "none", bottom: "large" },
})`
  max-width: none;
`;
