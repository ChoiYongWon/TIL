const CONST = require("./const");

module.exports = {
  title: "ChoiYongWon's TIL",
  description: "ChoiYongWon의 Today I Learned",
  // base: "/TIL/",
  themeConfig: {
    nav: [{ text: "Github", link: "https://github.com/ChoiYongWon" }],
    sidebar: [
      {
        title: "AWS",
        children: CONST.AWS,
      },
      {
        title: "Cloud",
        children: CONST.CLOUD,
      },
      {
        title: "Network",
        children: CONST.NETWORK,
      },
    ],
  },
};
