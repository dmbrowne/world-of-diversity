import debug from "debug";

const log = debug("analytics");

export default class DevLytics {
  constructor({ trackingId }: { trackingId: string }) {
    console.log(`Analytics init triggered for ${trackingId}`);
    log(`Analytics init triggered for ${trackingId}`);
  }

  pageview() {
    console.log(`Pageview triggered for ${window.location.pathname}`);
    log(`Pageview triggered for ${window.location.pathname}`);
  }

  event(category = "", action = "") {
    console.log(`Event for category ${category} and action ${action} triggered`);
    log(`Event for category ${category} and action ${action} triggered`);
  }

  exception(description = "", fatal = false) {
    console.log(`${fatal ? "Fatal exception" : "Exception"} with description ${description}`);
    log(`${fatal ? "Fatal exception" : "Exception"} with description ${description}`);
  }
}
