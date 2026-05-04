---
title: 60 个彩色标签系统
date: 2026-04-25
description: 为什么用预定义标签？如何新增 / 修改颜色
tags: [design, color, tutorial]
---

# 60 个彩色标签

主题预置了 60 个常用标签，每个都有自己的颜色。
源文件：`src/data/tags.ts`

## 新增标签

只需在 `names` 数组里加一项：

```ts
const names = [
  // ...
  "我的新标签",
];
```

颜色会从 `palette` 调色板循环取用。
也可以扩展 `palette` 加入更多颜色。
