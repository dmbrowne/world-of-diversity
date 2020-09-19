import { FC } from "react";
import Head from "next/head";
import styled, { ThemeProvider } from "styled-components";
import { Grommet, Box, Text, Button } from "grommet";
import theme, { diversityTheme } from "@theme/diversity-theme";
import Link from "next/link";

const SPreviewNavbar = styled(Box).attrs({
  background: "neutral-5",
  pad: "small",
  direction: "row",
  justify: "between",
})`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
`;

export const BaseLayout: FC<{ title: string; showPreviewNav?: boolean }> = ({ children, title, showPreviewNav }) => {
  return (
    <ThemeProvider theme={diversityTheme}>
      <Grommet theme={theme}>
        <Head>
          <title>{title}</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@300;400;900&family=Rammetto+One&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        {showPreviewNav && (
          <SPreviewNavbar>
            <Box>
              <Text weight="bold">YOU ARE IN PREVIEW MODE</Text>
              <Text size="small">Some of the content you are viewing might not have been published yet.</Text>
            </Box>
            <Button>
              <Link href="/api/exit-preview">
                <Box as="a" hoverIndicator="#222" background="black" pad={{ horizontal: "small", vertical: "xsmall" }}>
                  <Text>Exit preview mode</Text>
                </Box>
              </Link>
            </Button>
          </SPreviewNavbar>
        )}
        {children}
      </Grommet>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
        }
        img {
          max-width: 100%;
        }
        .snipcart-modal__container {
          z-index: 1500;
        }
      `}</style>
    </ThemeProvider>
  );
};

export default BaseLayout;
