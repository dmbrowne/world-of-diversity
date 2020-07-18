import React, { FC, useContext } from "react";
import { ResponsiveImageType, Image as DatoImage } from "react-datocms";
import { Box, Button, ResponsiveContext } from "grommet";
import Slider, { Settings as SlickSettings } from "react-slick";
import styled from "styled-components";
import PageHeader from "@components/page-header";
import Avatar from "@components/avatar";
import Quote from "@components/quote";
import ContentContainer from "@components/content-container";
import { FormNext } from "grommet-icons";

const SContent = styled(Box)`
  h1,
  h2,
  h3 {
    text-align: center;
    margin: 24px 0 40px;
    line-height: 1em;
  }
`;

interface Props {
  title: string;
  subtitle?: string;
  intro?: string;
  authorQuote?: {
    quote: string;
    image?: {
      responsiveImage: ResponsiveImageType;
    };
  };
  content?: string;
  authorGallery?: {
    id: string;
    responsiveImage: ResponsiveImageType;
  }[];
}

const NextArrow = ({ onClick }: any) => (
  <Box round="full" overflow="hidden" background="accent-2">
    <Button icon={<FormNext />} hoverIndicator onClick={onClick} />
  </Box>
);
const PrevArrow = ({ onClick }: any) => (
  <Box round="full" overflow="hidden" background="accent-2">
    <Button icon={<FormNext />} hoverIndicator onClick={onClick} />
  </Box>
);

const slickSettings: SlickSettings = {
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const AboutPage: FC<Props> = ({ title, subtitle, intro, authorQuote, content, authorGallery }) => {
  const isMobile = useContext(ResponsiveContext) === "small";

  return (
    <>
      <PageHeader title={title} subtitle={subtitle} />
      <ContentContainer>
        <SContent pad={{ top: "medium", bottom: "large" }}>
          {intro && <div dangerouslySetInnerHTML={{ __html: intro }} />}
          {authorQuote && authorQuote.quote && (
            <Box
              direction={isMobile ? "column" : "row"}
              align="center"
              gap="large"
              pad={{ left: "xlarge" }}
              margin={{ vertical: "large" }}
            >
              {authorQuote.image && (
                <div>
                  <Avatar responsiveImage={authorQuote.image.responsiveImage} size="200px" />
                </div>
              )}
              <Quote children={authorQuote.quote} />
            </Box>
          )}
          {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
          {authorGallery && authorGallery.length && (
            <Box margin={{ vertical: "large" }}>
              <Slider {...slickSettings}>
                {authorGallery.map((galleryItem) => (
                  <Box key={galleryItem.id} pad={{ horizontal: "medium" }} height="350px">
                    <div>
                      <DatoImage data={galleryItem.responsiveImage} />
                    </div>
                  </Box>
                ))}
              </Slider>
            </Box>
          )}
        </SContent>
      </ContentContainer>
    </>
  );
};

export default AboutPage;
