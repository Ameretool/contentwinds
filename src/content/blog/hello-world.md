---
title: Hello World
date: 2026-05-04
description: 第一篇示例文章 — 介绍如何在 blog 文件夹中添加新文章
tags: [thoughts, tutorial]
---

# Hello World

这是放在 `src/content/blog/` 文件夹中的第一篇 Markdown 文章。

## 如何新建一篇博客

1. 在 `src/content/blog/` 下新建一个 `.md` 文件，例如 `my-post.md`
2. 顶部添加 frontmatter（标题、日期、标签等）
3. 文件名（去掉 `.md`）会自动作为文章 URL 的 slug

## 代码示例

```ts
// 这是一段带备注的代码
function greet(name: string) {
  // 返回问候语
  return `Hello, ${name}!`;
}
```

> 提示：标签名必须存在于 `src/data/tags.ts` 里才会显示颜色。
