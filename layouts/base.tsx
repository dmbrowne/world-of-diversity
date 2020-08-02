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
            href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@300;400;900&family=Rammetto+One&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        {children}
        <div
          hidden
          id="snipcart"
          data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY}
          data-config-add-product-behavior="none"
        />
        <script src="https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.js" />
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
