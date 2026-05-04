---
title: Frontmatter 字段详解
date: 2026-05-01
description: title / date / description / tags 四个字段怎么写
tags: [tutorial, notes]
---

# Frontmatter 字段详解

| 字段 | 必填 | 示例 | 说明 |
|---|---|---|---|
| `title` | ✅ | `Hello World` | 文章标题 |
| `date` | ✅ | `2026-05-01` | 发布日期，用于排序与归档 |
| `description` | 推荐 | `一句简介` | 列表页摘要 |
| `tags` | 可选 | `[react, css]` | 标签列表，颜色由 `tags.ts` 定义 |

⚠️ 标签必须存在于 `src/data/tags.ts` 才会显示颜色。
