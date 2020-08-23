import React, { useContext, FC } from "react";
import { Box, ResponsiveContext, Text, Anchor } from "grommet";
import ContentContainer from "@components/content-container";
import { Twitter, Instagram, Facebook, FacebookOption, Pinterest, Linkedin, Youtube } from "grommet-icons";
import Link from "next/link";

export interface SocialMediaLinks {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  pinterest?: string;
  youtube?: string;
  linkedin?: string;
}

const getSocialMediaComponent = (socialPlatform: keyof SocialMediaLinks | string) => {
  switch (socialPlatform) {
    case "facebook":
      return Facebook;
    case "twitter":
      return Twitter;
    case "instagram":
      return Instagram;
    case "pinterest":
      return Pinterest;
    case "linkedin":
      return Linkedin;
    case "youtube":
      return Youtube;
    default:
      return null;
  }
};

const Footer: FC<{ socialMediaLinks: SocialMediaLinks }> = ({ socialMediaLinks }) => {
  const isMobile = useContext(ResponsiveContext) === "small";

  return (
    <Box background="#6E1414" pad={{ vertical: "small" }}>
      <ContentContainer
        size="large"
        justify={!isMobile ? "between" : undefined}
        align="center"
        direction={isMobile ? "column" : "row"}
      >
        <Box direction={isMobile ? "column" : "row"} align="center">
          {["Copyright 2020", "Authors world ltd. \u00A9"].map((txt, idx) => (
            <React.Fragment key={txt}>
              {idx !== 0 && !isMobile && (
                <Text color="white" size="small" margin={{ horizontal: "small" }} children=" | " />
              )}
              <Text color="white" size="small" children={txt} textAlign="center" />
            </React.Fragment>
          ))}
        </Box>
        <Box direction="row" gap="small" margin={isMobile ? { top: "large", bottom: "medium" } : undefined}>
          {Object.entries(socialMediaLinks).map(([key, url]) => {
            const SocialMediaComponent = getSocialMediaComponent(key);
            return !!SocialMediaComponent && !!url ? (
              <Anchor href={url} key={key} target="_blank">
                <SocialMediaComponent size="16px" color="white" />
              </Anchor>
            ) : null;
          })}
        </Box>
      </ContentContainer>
    </Box>
  );
};

export default Footer;
