---
title: 如何写一篇新博客
date: 2026-05-02
description: 三步在 Content Wind 上发布一篇 Markdown 博客
tags: [tutorial, notes]
---

# 如何写一篇新博客

## 第一步：新建 .md 文件

在 `src/content/blog/` 下新建文件，例如 `my-first-post.md`。
文件名（去掉 `.md`）就是文章的 URL：`/blog/my-first-post`。

## 第二步：填写 frontmatter

文件顶部加上元信息：

```md
---
title: 我的第一篇文章
date: 2026-05-02
description: 一句话简介
tags: [thoughts, tutorial]
---
```

## 第三步：写正文

frontmatter 之下用普通 Markdown 即可。保存 → 自动出现在博客列表。
