const CONST = require("./const");

module.exports = {
  title: "Today ChoiYongWon Learned",
  description: "Today ChoiYongWon Learned",
  // base: "/TIL/",
  themeConfig: {
    nav: [{ text: "Github", link: "https://github.com/ChoiYongWon" }],
    sidebar: [
      {
        title: "Cloud",
        children: CONST.CLOUD,
      },
      {
        title: "Git",
        children: CONST.GIT,
      },
      {
        title: "Network",
        children: CONST.NETWORK,
      },
      {
        title: "Security",
        children: CONST.SECURITY,
      },
    ],
  },
};
