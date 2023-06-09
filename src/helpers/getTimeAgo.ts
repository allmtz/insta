import moment from "moment";

moment.locale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "%ds",
    ss: "%ss",
    m: "%dm",
    mm: "%dm",
    h: "%dh",
    hh: "%dh",
    d: "%dd",
    dd: "%dd",
    M: "a month",
    MM: "%dM",
    y: "a year",
    yy: "%dY",
  },
});

export const getTimeAgo = (ISOdate: string) => {
  return moment(ISOdate).fromNow().replace("ago", "");
};
