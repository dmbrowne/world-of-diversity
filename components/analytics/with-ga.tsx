import React, { useEffect, useState, ComponentType } from "react";
import Router from "next/router";
import { dev as DevAnalytics, prod as ProdAnalytics } from "@utils/google-analytics";

interface WithGaOptions {
  trackingId: string;
  localhostName?: string;
}

type AnalyticsType = DevAnalytics | ProdAnalytics | null;

function withGa<P>({ trackingId, localhostName = "localhost" }: WithGaOptions) {
  return (Component: ComponentType<P & { analytics: AnalyticsType }>) => (props: P) => {
    const [analytics, setAnalytics] = useState<AnalyticsType>(null);

    useEffect(() => {
      const isLocalHost = location.hostname === localhostName;
      const isDev = process.env.NODE_ENV !== "production";
      const analyticsClassLib = isLocalHost || isDev ? DevAnalytics : ProdAnalytics;
      const anlytcs = new analyticsClassLib({ trackingId });
      anlytcs.pageview();
      const logGaPageView = () => anlytcs.pageview();
      Router.events.on("routeChangeComplete", logGaPageView);
      setAnalytics(anlytcs);

      return () => Router.events.off("routeChangeComplete", logGaPageView);
    }, []);
    return <Component {...props} analytics={analytics} />;
  };
}

export default withGa;
