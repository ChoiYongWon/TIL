const CONST = require("./const");

module.exports = {
  title: "ChoiYongWon's TIL",
  description: "ChoiYongWon의 Today I Learned",
  dest: "build",
  base: "/TIL/",
  themeConfig: {
    nav: [{ text: "Github", link: "https://github.com/ChoiYongWon" }],
    sidebar: [
      {
        title: "AWS",
        children: CONST.AWS,
      },
    ],
  },
};
