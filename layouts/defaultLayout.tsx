import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Navbar from "../components/navbar/navbar";
import { Grommet } from "grommet";
import theme, { diversityTheme } from "../theme/diversity-theme";

const DefaultLayout = ({ children }) => {
  return (
    <ThemeProvider theme={diversityTheme}>
      <Grommet theme={theme}>
        <div className="container" style={{ minHeight: "100vh" }}>
          <Head>
            <title>Welcome to diversity</title>
            <link
              href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@300;400;900&family=Rammetto+One&display=swap"
              rel="stylesheet"
            ></link>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar />
          {children}
          <style jsx global>{`
            html,
            body {
              padding: 0;
              margin: 0;
            }
          `}</style>
        </div>
      </Grommet>
    </ThemeProvider>
  );
};

export default DefaultLayout;
