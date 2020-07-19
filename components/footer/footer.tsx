import React, { useContext } from "react";
import { Box, ResponsiveContext, Text } from "grommet";
import ContentContainer from "@components/content-container";
import { Twitter, Instagram, Facebook } from "grommet-icons";

const Footer = () => {
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
          <Twitter size="16px" color="white" />
          <Instagram size="16px" color="white" />
          <Facebook size="16px" color="white" />
        </Box>
      </ContentContainer>
    </Box>
  );
};

export default Footer;
