---
title: 用听得懂的方式理解 VuePress 配置
date: 2026-07-17
icon: gears
category:
  - 学习笔记
tag:
  - VuePress
  - Theme Hope
  - 配置
  - 博客搭建
description: 用 ANTEE 博客作为例子，解释 VuePress Theme Hope 里的 config.ts、theme.ts、navbar.ts、sidebar.ts 和 Frontmatter 分别负责什么。
star: true
---

# 用听得懂的方式理解 VuePress 配置

刚开始接触 VuePress Theme Hope 时，很容易被各种配置文件绕晕。

一会儿是 `config.ts`，一会儿是 `theme.ts`，又有 `navbar.ts`、`sidebar.ts`，Markdown 文件顶部还有一段 Frontmatter。它们看起来都像配置，但到底谁管谁、该改哪里，初学时确实不直观。

这篇文章用我的 ANTEE 博客作为例子，把 VuePress 的配置讲成一套更容易理解的东西。

## 先记住一句话

VuePress 项目可以先这样理解：

```text
src/             写文章、写页面
src/.vuepress/   管网站怎么运行、怎么显示
```

也就是说：

- `src/posts/` 里主要放博客文章
- `src/README.md` 是首页
- `src/intro.md` 是关于页
- `src/.vuepress/` 里面放网站配置

如果把整个博客比作一本书：

- `src/posts/` 是每一篇文章
- `src/README.md` 是封面
- `src/intro.md` 是作者介绍
- `src/.vuepress/` 是排版规则、目录规则和网站设置

## ANTEE 项目的基本结构

我的项目大概长这样：

```text
ANTEE/
├─ package.json
├─ pnpm-lock.yaml
└─ src/
   ├─ README.md
   ├─ intro.md
   ├─ posts/
   │  ├─ blog.md
   │  ├─ study-notes.md
   │  ├─ entertainment.md
   │  └─ frontmatter-guide.md
   └─ .vuepress/
      ├─ config.ts
      ├─ theme.ts
      ├─ navbar.ts
      └─ sidebar.ts
```

其中最重要的是这几个文件：

```text
config.ts    全站基础设置
theme.ts     主题、作者、博客信息、插件
navbar.ts    顶部导航栏
sidebar.ts   侧边栏
README.md    首页
intro.md     关于我
posts/       博客文章目录
```

以后不知道改哪里时，可以先回来看这个表。

## `.vuepress` 是什么

`.vuepress` 是 VuePress 的配置目录。

在我的项目里，它的位置是：

```text
src/.vuepress/
```

注意这个文件夹名字前面有一个点：`.vuepress`。

在很多系统里，以点开头的文件夹会被看作隐藏文件夹。但它不是没用，也不是可以随便删掉的东西。VuePress 会专门读取它里面的配置。

简单说：

```text
src/.vuepress/ = 博客网站的设置中心
```

它里面通常会放：

- 主配置
- 主题配置
- 导航栏配置
- 侧边栏配置
- 公共资源
- 自定义样式

## `config.ts`：网站的总入口

`config.ts` 是 VuePress 的核心配置入口。

在 ANTEE 项目里，它的位置是：

```text
src/.vuepress/config.ts
```

它大概长这样：

```ts
import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "ANTEE",
  description: "XHH",

  theme,
});
```

先不用害怕 TypeScript 语法。真正需要看懂的是大括号里的内容：

```ts
base: "/",
lang: "zh-CN",
title: "ANTEE",
description: "XHH",
theme,
```

这些就是网站最基础的信息。

## `base`：网站部署在哪个路径

`base` 很重要，它表示网站部署在什么路径下。

如果网站部署在根路径，比如：

```text
https://xudaxmu-max.github.io/
```

通常写：

```ts
base: "/",
```

如果网站部署在子路径，比如：

```text
https://xudaxmu-max.github.io/ANTEE/
```

就应该写：

```ts
base: "/ANTEE/",
```

很多图片加载不出来、页面跳转路径不对的问题，都和 `base` 有关系。

所以可以简单记：

```text
网站在根目录，用 /
网站在某个仓库名下面，用 /仓库名/
```

## `lang`：网站语言

```ts
lang: "zh-CN",
```

意思是网站语言是简体中文。

这个通常不用经常改。

## `title`：网站名称

```ts
title: "ANTEE",
```

这是网站的名字。它可能会显示在浏览器标题、搜索结果、默认页面标题里。

如果以后要改博客名字，就来这里改。

## `description`：网站描述

```ts
description: "XHH",
```

这是网站的简短描述。它常用于 SEO，也就是搜索引擎理解你的网站时会参考的信息。

## `theme`：把主题配置接进来

```ts
theme,
```

这一行的意思是：

> 使用 `theme.ts` 里的主题配置。

因为上面有这一行：

```ts
import theme from "./theme.js";
```

所以 `config.ts` 会把 `theme.ts` 导入进来。

也就是说：

```text
config.ts 是总入口
theme.ts 是主题设置
config.ts 通过 theme 这一行使用 theme.ts
```

## 为什么配置要拆成多个文件

VuePress 的配置其实可以都写在一个文件里，但那样会很长、很乱。

所以 Theme Hope 模板把它拆开了：

```text
config.ts    管全站基础信息
theme.ts     管主题相关信息
navbar.ts    管顶部导航栏
sidebar.ts   管侧边栏
```

这样以后修改时更清楚。

想改顶部菜单，就去 `navbar.ts`。
想改作者邮箱，就去 `theme.ts`。
想改网站标题，就去 `config.ts`。

## `theme.ts`：主题和博客信息

`theme.ts` 是 Theme Hope 的主要配置文件。

位置是：

```text
src/.vuepress/theme.ts
```

里面大概会有这些内容：

```ts
export default hopeTheme({
  hostname: "https://xudaxmu-max.github.io",

  author: {
    name: "XHH",
    url: "https://github.com/xudaxmu-max/xudaxmu-max.github.io",
  },

  repo: "xudaxmu-max/xudaxmu-max.github.io",

  navbar,
  sidebar,

  footer: "MIT Licensed | Copyright © 2026-present XHH",

  blog: {
    name: "XHH",
    description: "欲买桂花同载酒",
    intro: "/intro.html",
    medias: {
      Email: "mailto:xuda.xmu@gmail.com",
      GitHub: "https://github.com/xudaxmu-max/xudaxmu-max.github.io",
      Rss: "/rss.xml",
    },
  },
});
```

这里的配置就更像“博客主题的信息”。

## `hostname`：网站正式地址

```ts
hostname: "https://xudaxmu-max.github.io",
```

这是网站的正式访问地址。

它常用于生成站点地图、SEO 信息等。简单理解就是告诉工具：

> 我的博客以后正式部署在这个网址。

## `author`：作者信息

```ts
author: {
  name: "XHH",
  url: "https://github.com/xudaxmu-max/xudaxmu-max.github.io",
},
```

这是作者信息。

`name` 是作者名，`url` 是作者链接。

## `repo`：GitHub 仓库

```ts
repo: "xudaxmu-max/xudaxmu-max.github.io",
```

它表示这个博客项目对应的 GitHub 仓库。

一般写法是：

```text
用户名/仓库名
```

如果仓库地址是：

```text
https://github.com/xudaxmu-max/xudaxmu-max.github.io
```

那么 `repo` 就写：

```ts
repo: "xudaxmu-max/xudaxmu-max.github.io",
```

## `footer`：页脚文字

```ts
footer: "MIT Licensed | Copyright © 2026-present XHH",
```

这是网页底部的文字。

你可以写版权信息，也可以写一句话。

## `blog`：博客相关设置

```ts
blog: {
  name: "XHH",
  description: "欲买桂花同载酒",
  intro: "/intro.html",
  medias: {
    Email: "mailto:xuda.xmu@gmail.com",
    GitHub: "https://github.com/xudaxmu-max/xudaxmu-max.github.io",
    Rss: "/rss.xml",
  },
},
```

这部分是博客功能会用到的信息。

```ts
name: "XHH"
```

博主名字。

```ts
description: "欲买桂花同载酒"
```

博客简介或者个人签名。

```ts
intro: "/intro.html"
```

介绍页地址，也就是“关于我”页面。

```ts
medias
```

社交链接，比如邮箱、GitHub、RSS。

## `navbar.ts`：顶部导航栏

`navbar.ts` 控制网站顶部的菜单。

位置是：

```text
src/.vuepress/navbar.ts
```

例如：

```ts
export default navbar([
  "/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      { text: "博客", icon: "blog", link: "blog" },
      { text: "学习笔记", icon: "book-open", link: "study-notes" },
      { text: "娱乐", icon: "gamepad", link: "entertainment" },
    ],
  },
  {
    text: "关于",
    icon: "circle-info",
    link: "/intro.html",
  },
]);
```

这会生成顶部菜单：

```text
首页 / 博文 / 关于
```

其中“博文”下面还有三个子项：

```text
博客
学习笔记
娱乐
```

## `prefix` 和 `link` 的关系

这一段最容易迷糊：

```ts
prefix: "/posts/",
children: [
  { text: "博客", link: "blog" },
]
```

它最终会变成：

```text
/posts/blog.html
```

因为：

```text
/posts/ + blog = /posts/blog
```

VuePress 会把 Markdown 页面转换成 HTML 页面，所以最终访问地址通常是：

```text
/posts/blog.html
```

## `sidebar.ts`：侧边栏

`sidebar.ts` 控制页面左边的侧边栏。

位置是：

```text
src/.vuepress/sidebar.ts
```

例如：

```ts
export default sidebar({
  "/": [
    "",
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
  ],
});
```

这里的意思是：

```ts
"/"
```

对整个网站生效。

```ts
""
```

代表首页。

```ts
prefix: "posts/"
children: "structure"
```

表示自动读取 `posts/` 里的文章结构，生成侧边栏。

```ts
"intro"
```

代表关于页。

## Frontmatter：单个页面自己的配置

除了 `.vuepress` 里面的全站配置，每个 Markdown 文件还可以在顶部写自己的配置，也就是 Frontmatter。

例如一篇文章：

```md
---
title: 详细介绍 Frontmatter
date: 2026-07-17
icon: book-open
category:
  - 学习笔记
tag:
  - VuePress
  - Markdown
---

# 详细介绍 Frontmatter

正文内容从这里开始。
```

这段 Frontmatter 只影响这一篇文章。

它不会影响整个网站，也不会影响其他文章。

## 三种配置的区别

可以这样分：

```text
config.ts       全站基础配置
theme.ts        主题和博客整体配置
Markdown 顶部    单个页面配置
```

举例：

- 想改网站名：改 `config.ts`
- 想改作者名：改 `theme.ts`
- 想改某篇文章标题：改那篇文章顶部的 Frontmatter
- 想改首页标语：改 `src/README.md` 的 Frontmatter
- 想改顶部菜单：改 `navbar.ts`
- 想改侧边栏：改 `sidebar.ts`

## 样式配置是什么

有时候文档里还会提到 `.vuepress/styles`。

它是用来改外观的，比如颜色、字体、间距。

常见文件有：

```text
src/.vuepress/styles/index.scss
src/.vuepress/styles/config.scss
src/.vuepress/styles/palette.scss
```

大概可以这样理解：

```text
index.scss    写普通样式
config.scss   改主题变量
palette.scss  改颜色和布局常量
```

刚开始搭博客，不需要急着碰样式。先把内容、导航、分类和基础信息弄明白就可以。

## 插件配置是什么

Theme Hope 自带很多功能，比如博客、图标、组件、SEO、站点地图等等。

这些功能可以在 `theme.ts` 的 `plugins` 里配置。

例如：

```ts
plugins: {
  blog: true,

  components: {
    components: ["Badge", "VPCard"],
  },

  icon: {
    prefix: "fa6-solid:",
  },
}
```

意思是：

```ts
blog: true
```

开启博客功能。

```ts
components
```

启用一些内置组件。

```ts
icon
```

设置图标前缀，所以在文章里可以写：

```yaml
icon: house
icon: book-open
icon: gamepad
```

## 最实用的修改指南

以后维护 ANTEE 博客，可以按下面这个表找文件：

```text
改网站名字：
src/.vuepress/config.ts

改网站描述：
src/.vuepress/config.ts

改作者、邮箱、GitHub、页脚：
src/.vuepress/theme.ts

改顶部菜单：
src/.vuepress/navbar.ts

改侧边栏：
src/.vuepress/sidebar.ts

改首页大标题、标语、首页卡片：
src/README.md

改关于我：
src/intro.md

写新文章：
src/posts/新文章.md
```

## 总结

VuePress 的配置看起来多，其实可以分成几层：

```text
config.ts     管网站基础信息
theme.ts      管主题、作者、博客信息
navbar.ts     管顶部菜单
sidebar.ts    管侧边栏
Frontmatter   管单个页面
```

如果把博客比作一家店：

- `config.ts` 是店名和地址
- `theme.ts` 是装修风格和老板信息
- `navbar.ts` 是门口菜单牌
- `sidebar.ts` 是店内导览牌
- Frontmatter 是每件商品自己的标签
- Markdown 正文才是真正展示给读者的内容

刚开始不用一次记住所有配置。先记住“想改什么，就找对应文件”，博客就能顺利维护起来。
