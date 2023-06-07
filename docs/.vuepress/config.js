const CONST = require("./const");

module.exports = {
  title: "Today ChoiYongWon Learned",
  description: "Today ChoiYongWon Learned",
  // base: "/TIL/",
  plugins: [
    ["vuepress-plugin-code-copy"],
    ["@vuepress/last-updated"],
    ["@vuepress/back-to-top"],
    // [
    //   "@vuepress/google-analytics",
    //   {
    //     ga: // UA-00000000-0
    //   }
    // ],
  ],
  themeConfig: {
    lastUpdated: "마지막수정일",
    nav: [
      { text: "Github", link: "https://github.com/ChoiYongWon" },
      { text: "Tags", link: "/tag/" },
    ],
    sidebar: [
      {
        title: "TIL",
        children: CONST.TIL,
      },
      // {
      //   title: "Cloud",
      //   children: CONST.CLOUD,
      // },
      // {
      //   title: "Git",
      //   children: CONST.GIT,
      // },
      // {
      //   title: "Issue",
      //   children: CONST.ISSUE,
      // },
      // {
      //   title: "Network",
      //   children: CONST.NETWORK,
      // },
      // {
      //   title: "Security",
      //   children: CONST.SECURITY,
      // },
    ],
  },
};
