import React, { FC, useContext, useMemo, Ref, useState } from "react";
import { Main, Box, Heading, ResponsiveContext, Paragraph, Text } from "grommet";
import { ResponsiveImageType, Image as DatoImage } from "react-datocms";
import Color from "color";
import { TextField } from "@material-ui/core";
import { ServiceCard } from "./service-card";
import ContentContainer from "@components/content-container";
import {
  SMobileHeroHeading,
  SHeroHeading,
  SHeroContent,
  SImageContainer,
  Section,
  SSectionHeading,
  DatoImageContainer,
} from "./home-page.styled";
import MailingListForm from "@components/mailing-list-form";

interface IImage
  extends Partial<{
    url: string;
    responsiveImage?: ResponsiveImageType;
  }> {}

export interface Service {
  id: string;
  header: string;
  shortDescription?: string;
  image?: IImage;
}

interface HomePageProps {
  heroSectionRef: Ref<any>;
  headline?: string;
  coverImage?: IImage;
  title: string;
  websiteDescription?: string;
  factHeadline?: string;
  factFigure?: IImage;
  factDetails?: string;
  factBackgroundColor?: string;
  servicesHeadline?: string;
  services: Array<Service>;
  mailingListCtaTitle?: string;
  mailingListDescription?: string;
}

const HomePage: FC<HomePageProps> = (props) => {
  const [hasSignedUp, setHasSignedUp] = useState(false);
  const screensize = useContext(ResponsiveContext);
  const isMobile = screensize === "small";
  const HeroHeading = isMobile ? SMobileHeroHeading : SHeroHeading;
  const heroHeadingSize = useMemo(() => {
    switch (screensize) {
      case "xlarge":
      case "large":
        return "large";
      default:
        return "medium";
    }
  }, [screensize]);

  const showIntroSection = props.title || props.websiteDescription;
  const showFactSection = props.factHeadline || props.factFigure || props.factDetails;
  const showServices = props.services && props.services.length > 0;
  const factTextColor = props.factBackgroundColor ? (Color(props.factBackgroundColor).isDark() ? "light-1" : "dark-1") : "dark-1";

  return (
    <Main>
      <Section ref={props.heroSectionRef} background="#F4FFB2" pad={{ top: "xlarge" }}>
        <SHeroContent direction={isMobile ? "column" : "row"}>
          {props.headline && <HeroHeading children={props.headline} size={heroHeadingSize} />}
          {props.coverImage && (
            <SImageContainer centerImg={isMobile} fill={isMobile}>
              <div>{props.coverImage?.responsiveImage && <DatoImage data={props.coverImage.responsiveImage} />}</div>
            </SImageContainer>
          )}
        </SHeroContent>
      </Section>
      {showIntroSection && (
        <Section background="white">
          <ContentContainer>
            <Heading level={1} textAlign="center" children={props.title} />
            <Paragraph textAlign="center" fill children={props.websiteDescription} />
          </ContentContainer>
        </Section>
      )}
      {showFactSection && (
        <Section background={props.factBackgroundColor || "radial-gradient(52% 99%, #FFFFFF 48%, #CFEBFD 100%)"}>
          <ContentContainer align="center">
            <SSectionHeading level={2} children={props.factHeadline} color={factTextColor} />
            {props.factFigure && props.factFigure.responsiveImage && (
              <DatoImageContainer style={{ width: "60%" }}>
                <DatoImage data={props.factFigure.responsiveImage} lazyLoad />
              </DatoImageContainer>
            )}
            <Paragraph textAlign="center" fill children={props.factDetails} color={factTextColor} />
          </ContentContainer>
        </Section>
      )}
      {showServices && (
        <Section>
          <ContentContainer>
            <SSectionHeading level={2} children={props.servicesHeadline} />
            <Box direction="row" wrap justify="center">
              {props.services.map((service) => (
                <Box key={service.id} margin="medium" justify="stretch">
                  <ServiceCard {...service} />
                </Box>
              ))}
            </Box>
          </ContentContainer>
        </Section>
      )}
      <Section background="white">
        <ContentContainer>
          <SSectionHeading level={2} children={props.mailingListCtaTitle} />
          {hasSignedUp ? (
            <Text textAlign="center" color="accent-2" children="Your details have been sent, thanks for signing up!" />
          ) : (
            <>
              <Paragraph margin={{ top: "none" }} fill textAlign="center" children={props.mailingListDescription} />
              <MailingListForm onSubmitSuccess={() => setHasSignedUp(true)} />
            </>
          )}
        </ContentContainer>
      </Section>
    </Main>
  );
};

export default HomePage;
