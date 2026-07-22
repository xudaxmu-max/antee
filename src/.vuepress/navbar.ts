import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "博客文章",
    icon: "blog",
    link: "/posts/",
  },
  {
    text: "学习笔记",
    icon: "book",
    link: "/study-notes/",
  },
    {
    text: "冲浪分享",
    icon: "bars",
    prefix: "/tools/",
    children: [
      { text: "网站", link: "website" },
      { text: "电影", link: "movies" },
      { text: "工具", link: "tools" },
    ],
  },
  {
    text: "关于",
    icon: "fire",
    link: "/intro.html",
  },
]);
