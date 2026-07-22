---
title: 详细介绍 Frontmatter
date: 2026-07-17
icon: book-open
category:
  - 学习笔记
tag:
  - VuePress
description: 介绍 Frontmatter 的作用、语法、常用字段，以及在 VuePress Theme Hope 博客中的使用方式。
star: true
---

# 详细介绍 Frontmatter

写博客时，我们通常会把注意力放在正文上：标题、段落、图片、代码块、引用等等。但在 VuePress、VuePress Theme Hope 这类静态站点工具里，一篇文章除了正文内容，还需要一些“页面信息”。比如这篇文章叫什么、什么时候发布、属于哪个分类、有哪些标签、是否置顶、是否显示在收藏列表里。

这些写在 Markdown 文件顶部的页面信息，就叫 **Frontmatter**。

## 什么是 Frontmatter

Frontmatter 是一段放在 Markdown 文件最顶部的配置内容。它通常使用 YAML 格式，并且用两行 `---` 包起来。

一个最简单的例子是：

```md
---
title: 我的第一篇文章
date: 2026-07-17
category:
  - 博客
tag:
  - 记录
---

# 我的第一篇文章

这里才是正文内容。
```

上面这段中，顶部的这一部分就是 Frontmatter：

```yaml
---
title: 我的第一篇文章
date: 2026-07-17
category:
  - 博客
tag:
  - 记录
---
```

而从 `# 我的第一篇文章` 开始，才是普通 Markdown 正文。

简单来说，Frontmatter 负责告诉网站：**这篇文章的元信息是什么**。正文负责告诉读者：**这篇文章具体写了什么**。

## 为什么需要 Frontmatter

如果只是写一篇 Markdown 笔记，不写 Frontmatter 也能阅读。但如果你要把 Markdown 变成一个完整的网站页面，Frontmatter 就很有用了。

它可以帮助网站完成这些事情：

- 在文章列表里显示正确标题
- 按发布时间排序文章
- 给文章归类，例如“博客”“学习笔记”“娱乐”
- 给文章添加标签，例如“VuePress”“Markdown”“前端”
- 给页面设置图标、封面、摘要
- 控制文章是否置顶、是否星标
- 为搜索引擎提供页面描述
- 对单独页面启用或关闭某些功能

也就是说，Frontmatter 像是文章的“身份证”。它不一定直接显示在正文里，但网站会根据它来组织和展示页面。

## Frontmatter 的基本语法

Frontmatter 常用 YAML 格式。YAML 看起来简单，但对缩进比较敏感。

### 1. 必须放在文件最顶部

Frontmatter 应该放在 Markdown 文件的最开头，前面不要有正文、空标题或其他内容。

正确写法：

```md
---
title: 示例文章
---

# 示例文章
```

不推荐写法：

```md
# 示例文章

---
title: 示例文章
---
```

因为这时 VuePress 可能不会把它识别为页面配置。

### 2. 使用 `---` 包起来

开头一行和结束一行都要写 `---`：

```yaml
---
title: 示例文章
date: 2026-07-17
---
```

中间才是具体配置。

### 3. 字段和值用冒号分隔

```yaml
title: 示例文章
date: 2026-07-17
```

冒号后面建议留一个空格。

正确：

```yaml
title: 示例文章
```

不推荐：

```yaml
title:示例文章
```

### 4. 列表使用缩进和短横线

分类和标签通常是列表：

```yaml
category:
  - 学习笔记
  - 博客

tag:
  - VuePress
  - Markdown
```

这里要注意，`- 学习笔记` 前面有两个空格。缩进不对，可能会导致解析失败。

### 5. 特殊内容建议加引号

普通中文标题可以不加引号：

```yaml
title: 欲买桂花同载酒
```

但如果标题里有冒号、井号、特殊符号，建议加引号：

```yaml
title: "Markdown: 从 Frontmatter 开始"
```

这样更稳。

## 常用字段介绍

下面这些字段，在 VuePress Theme Hope 博客里很常用。

## title：页面标题

`title` 用来设置页面标题。

```yaml
title: 详细介绍 Frontmatter
```

它通常会影响：

- 浏览器标签页标题
- 文章列表里的标题
- 搜索结果里的标题
- 页面元信息

如果不写 `title`，网站可能会根据 Markdown 里的一级标题自动推断。但对于博客文章来说，建议明确写上。

## date：发布日期

`date` 表示文章日期。

```yaml
date: 2026-07-17
```

博客系统通常会用它来排序文章。一般建议使用 `YYYY-MM-DD` 格式，也就是“年-月-日”。

如果你希望更精确，也可以写时间：

```yaml
date: 2026-07-17 20:30:00
```

对于日常博客来说，只写日期通常就够了。

## category：分类

`category` 是文章所属的大类。

```yaml
category:
  - 学习笔记
```

你的 ANTEE 博客目前主要有三个方向：

```yaml
category:
  - 博客
```

```yaml
category:
  - 学习笔记
```

```yaml
category:
  - 娱乐
```

分类适合用来做比较稳定的栏目。比如一篇文章是技术学习，就放到“学习笔记”；一篇文章是日常想法，就放到“博客”；一篇文章是影视、游戏、音乐相关，就放到“娱乐”。

## tag：标签

`tag` 是文章的关键词。

```yaml
tag:
  - VuePress
  - Markdown
  - Frontmatter
```

分类和标签的区别可以这样理解：

- 分类是书架：一篇文章通常属于少数几个大栏目
- 标签是便签：一篇文章可以贴很多关键词

比如一篇介绍 Frontmatter 的文章，可以这样写：

```yaml
category:
  - 学习笔记
tag:
  - VuePress
  - Theme Hope
  - Markdown
  - Frontmatter
```

这样它既会进入“学习笔记”分类，也可以通过多个标签被找到。

## icon：页面图标

`icon` 用来设置页面图标。

```yaml
icon: book-open
```

你的主题配置里使用了 Font Awesome 风格的图标前缀，所以可以写一些常见图标名，例如：

```yaml
icon: pen-to-square
icon: book-open
icon: blog
icon: gamepad
icon: circle-info
```

图标通常会显示在导航、侧边栏、页面标题或文章列表附近。它不是必须的，但可以让页面更容易辨认。

## description：页面描述

`description` 是页面简介。

```yaml
description: 介绍 Frontmatter 的作用、语法和常用字段。
```

它常用于 SEO，也可能被搜索、文章卡片或页面元信息使用。建议写成一句完整的话，简短说明这篇文章讲什么。

## cover：封面图

`cover` 可以设置文章封面。

```yaml
cover: /assets/images/frontmatter-cover.jpg
```

如果你把图片放在：

```text
src/.vuepress/public/assets/images/frontmatter-cover.jpg
```

那么在 Frontmatter 里就可以这样引用：

```yaml
cover: /assets/images/frontmatter-cover.jpg
```

注意这里的路径是网站访问路径，不是电脑里的完整文件路径。

## star：星标文章

`star` 可以把文章标记为星标文章。

```yaml
star: true
```

也可以用数字表示优先级：

```yaml
star: 10
```

如果你希望某些重要文章更容易被看到，可以给它们加上 `star`。

## sticky：置顶文章

`sticky` 用来控制文章是否置顶。

```yaml
sticky: true
```

也可以写数字：

```yaml
sticky: 5
```

数字越大，通常优先级越高。适合放公告、索引文章、长期维护的目录页。

## 常见错误

## 错误一：缩进不对

错误写法：

```yaml
category:
- 学习笔记
 - 博客
```

推荐写法：

```yaml
category:
  - 学习笔记
  - 博客
```

YAML 对缩进很敏感，最好统一使用两个空格。

## 错误二：冒号后面没有空格

不推荐：

```yaml
title:详细介绍 Frontmatter
```

推荐：

```yaml
title: 详细介绍 Frontmatter
```

## 错误三：把 Frontmatter 写到正文中间

Frontmatter 应该写在文件顶部。如果写到正文中间，它就只是普通文本，不会被当作配置。

## 错误四：路径写成电脑路径

不推荐：

```yaml
cover: /Users/huazai/Desktop/ANTEE/src/.vuepress/public/assets/images/a.jpg
```

推荐：

```yaml
cover: /assets/images/a.jpg
```

网站运行后，读的是公开资源路径，不是本机文件路径。

## 在 ANTEE 博客里的推荐模板

以后你在 `src/posts/` 里新建文章，可以从这个模板开始：

```md
---
title: 文章标题
date: 2026-07-17
icon: pen-to-square
category:
  - 学习笔记
tag:
  - 标签一
  - 标签二
description: 用一句话介绍这篇文章。
---

# 文章标题

这里开始写正文。
```

如果是日常博客，可以这样：

```md
---
title: 欲买桂花同载酒
date: 2026-07-17
icon: blog
category:
  - 博客
tag:
  - 随笔
  - 生活
description: 一篇日常记录。
---

# 欲买桂花同载酒

正文内容。
```

如果是学习笔记，可以这样：

```md
---
title: VuePress 学习笔记
date: 2026-07-17
icon: book-open
category:
  - 学习笔记
tag:
  - VuePress
  - Markdown
description: 记录 VuePress 的学习过程。
---

# VuePress 学习笔记

正文内容。
```

如果是娱乐内容，可以这样：

```md
---
title: 最近看的作品
date: 2026-07-17
icon: gamepad
category:
  - 娱乐
tag:
  - 记录
  - 灵感
description: 记录最近看过的一些有趣作品。
---

# 最近看的作品

正文内容。
```

## 总结

Frontmatter 是 Markdown 页面顶部的一段配置。它不负责写正文，而是负责描述页面。

可以记住这句话：

> Markdown 写内容，Frontmatter 管信息。

对于 ANTEE 这样的博客来说，最常用的字段就是：

```yaml
title: 标题
date: 日期
icon: 图标
category:
  - 分类
tag:
  - 标签
description: 简介
```

先掌握这些字段，就已经可以写出结构清楚、分类明确、能被博客系统良好识别的文章了。
