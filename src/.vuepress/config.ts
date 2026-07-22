import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/antee/",

  lang: "zh-CN",
  title: "ANTEE",
  description: "一棵菠菜",

  head: [
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    ],
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=LXGW+WenKai:wght@400;700&display=swap",
      },
    ],
  ],

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
