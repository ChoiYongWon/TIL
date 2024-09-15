const CONST = require("./const");

module.exports = {
  title: "Today rtolzo Learned",
  description: "Today rtolzo Learned",
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
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'))
    }
  },
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
