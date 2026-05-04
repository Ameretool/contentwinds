---
title: 静态资源放在哪里
date: 2026-04-01
description: 图片、PDF 等文件的存放位置
tags: [tutorial, notes]
---

# 静态资源

把图片、字体、PDF 等放在 `public/static/` 文件夹，
然后在 Markdown 里直接用绝对路径引用：

```md
![一张图](/static/my-photo.jpg)
```

- `public/` 下的内容会原样发布到网站根目录
- 子目录可以自由组织，例如 `public/static/2026/cover.png`
- 不要放在 `src/` 下，那是源代码区域
