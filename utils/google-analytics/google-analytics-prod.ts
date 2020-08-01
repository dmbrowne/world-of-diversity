import ReactGA from "react-ga";

const IS_BROWSER = typeof window !== "undefined";

export default class ProdLytics {
  constructor({ trackingId }: { trackingId: string }) {
    if (IS_BROWSER && trackingId) {
      ReactGA.initialize(trackingId);
    }
  }

  pageview() {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }

  event(category = "", action = "") {
    if (category && action) {
      ReactGA.event({ category, action });
    }
  }

  exception(description = "", fatal = false) {
    if (description) {
      ReactGA.exception({ description, fatal });
    }
  }
}
