import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { viteBundler } from "@vuepress/bundler-vite";
import { TOPICS } from "./const";
import { getDirname, path } from "vuepress/utils";
import plugins from "./configs/plugins";

const __dirname = import.meta.dirname || getDirname(import.meta.url);

export default defineUserConfig({
  title: "Today rtolzo Learned",
  description: "Today rtolzo Learned",
  theme: defaultTheme({
    lastUpdatedText: "마지막 수정일",
    contributors: false,
    navbar: [
      { text: "Github", link: "https://github.com/ChoiYongWon" },
      { text: "Tags", link: "/tags/" },
    ],
    sidebar: [
      {
        text: "Topics",
        prefix: "/topics/",
        link: "/topics/",
        children: TOPICS,
      },
    ],
    themePlugins: { prismjs: false },
    alias: {
      "@theme/Page.vue": path.resolve(__dirname, "./components/Page.vue"),
    },
  }),
  bundler: viteBundler(),
  plugins,
});
