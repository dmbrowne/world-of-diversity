import React, { FC, useMemo, useContext } from "react";
import { rgba } from "polished";
import { Box, Button, Text, ResponsiveContext } from "grommet";
import { useTheme } from "styled-components";
import { Shop } from "grommet-icons";
import ContentContainer from "@components/content-container";
import { SAnchor } from "./navbar.styled";
import SideNav from "@components/side-nav";
import TextLogoIcon from "./text-logo";
import MenuItems from "./menu-items";

const Navbar: FC<{ transparency?: number }> = ({ transparency = 1 }) => {
  const { global } = useTheme();
  const screensize = useContext(ResponsiveContext);
  const isTabletAndSmaller = screensize === "tablet" || screensize === "small";
  const brandColor = global?.colors?.brand?.toString();
  const backgroundColor = useMemo(() => (brandColor ? rgba(brandColor, transparency) : "transparent"), [
    transparency,
    brandColor,
  ]);

  return isTabletAndSmaller ? (
    <SideNav />
  ) : (
    <Box background={backgroundColor} pad={{ vertical: "small" }}>
      <ContentContainer align="center" justify="between" direction="row" size="large">
        <TextLogoIcon />
        <Box as="nav" align="center" direction="row">
          <MenuItems />
        </Box>
      </ContentContainer>
    </Box>
  );
};

export default Navbar;
