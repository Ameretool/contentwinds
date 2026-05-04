---
title: 主题的文件夹结构说明
date: 2026-05-03
description: 哪个文件放哪里？一文看懂 Content Wind 的目录结构
tags: [tutorial, notes]
---

# 主题的文件夹结构

```
src/
├── config/site.ts          # 站点配置（名称、邮箱、社交链接、每页文章数）
├── content/
│   ├── home.md             # 主页内容
│   ├── blog/*.md           # 博客文章（每个 .md 一篇）
│   └── microblog/*.md      # 微型博客（每个 .md 一条）
├── data/tags.ts            # 60 个彩色标签
├── pages/                  # 各导航页
└── components/             # UI 组件
public/static/              # 静态资源（图片等）
```

新增文章 = 在对应文件夹里新建一个 `.md` 文件即可，**无需改任何代码**。
