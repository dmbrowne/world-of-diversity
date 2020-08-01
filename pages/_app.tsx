import App, { AppProps } from "next/app";
import { withGa } from "@components/analytics";
import { FC } from "react";

const MyApp: FC<AppProps> = ({ Component, pageProps, router, ...props }) => {
  return <Component {...pageProps} {...props} />;
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default withGa<AppProps>({ trackingId: "UA-172968402-1" })(MyApp);
