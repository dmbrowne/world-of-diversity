import React, { FC } from "react";
import { Box, Heading, Paragraph } from "grommet";
import { Image as DatoImage } from "react-datocms";
import { DatoImageContainer } from "./home-page.styled";
import { Service } from "./home-page";

export const ServiceCard: FC<Service> = (props) => (
  <Box
    width="350px"
    flex
    pad="medium"
    elevation="medium"
    as="article"
    background="white"
    align="center"
    justify="between"
  >
    <Heading
      level={3}
      size="small"
      as="header"
      children={props.header}
      textAlign="center"
      margin={{ bottom: "medium" }}
    />
    {props?.image?.responsiveImage && (
      <DatoImageContainer margin={{ bottom: "small" }}>
        <DatoImage data={props.image.responsiveImage} />
      </DatoImageContainer>
    )}
    <Paragraph textAlign="center" children={props.shortDescription} />
  </Box>
);
