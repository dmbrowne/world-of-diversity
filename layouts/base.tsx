import { FC } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { Grommet } from "grommet";
import theme, { diversityTheme } from "@theme/diversity-theme";

export const BaseLayout: FC<{ title: string }> = ({ children, title }) => {
  return (
    <ThemeProvider theme={diversityTheme}>
      <Grommet theme={theme}>
        <Head>
          <title>{title}</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@300;400;900&family=Rammetto+One&family=Open+Sans&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
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
      `}</style>
    </ThemeProvider>
  );
};

export default BaseLayout;
