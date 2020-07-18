import React, { FC, useMemo } from "react";
import { rgba } from "polished";
import { Anchor, Box, Button, Text } from "grommet";
import { useTheme } from "styled-components";
import { Shop } from "grommet-icons";
import ContentContainer from "@components/content-container";
import { Logo, SAnchor } from "./navbar.styled";

const Navbar: FC<{ transparency?: number }> = ({ transparency = 1 }) => {
  const { global } = useTheme();
  const brandColor = global?.colors?.brand?.toString();
  const backgroundColor = useMemo(() => (brandColor ? rgba(brandColor, transparency) : "transparent"), [
    transparency,
    brandColor,
  ]);

  return (
    <Box background={backgroundColor} pad={{ vertical: "small" }}>
      <ContentContainer align="center" justify="between" direction="row" size="large">
        <div>
          <Anchor href="/">
            <Logo>World of diversity</Logo>
          </Anchor>
        </div>
        <Box as="nav" align="center" direction="row">
          <SAnchor href="/about" color="dark-1" children="About" />
          <SAnchor href="/bookstore" color="dark-1" children="Books" />
          <Button
            color="dark-1"
            icon={<Shop />}
            className="snipcart-checkout"
            gap="xsmall"
            label={<Text size="small" weight={300} className="snipcart-items-count" children="0" />}
          />
        </Box>
      </ContentContainer>
    </Box>
  );
};

export default Navbar;
