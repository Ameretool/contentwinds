---
title: 控制每页显示的文章数量
date: 2026-04-28
description: 在哪里改 Blog 和 Microblog 的每页条数
tags: [tutorial, notes]
---

# 控制每页文章数量

打开 `src/config/site.ts`，找到这一段：

```ts
export const postsPerPage = {
  blog: 5,        // ← Blog 列表每页几篇
  microblog: 10,  // ← Microblog 每页几条
};
```

改完保存即可生效。
访问者也可以在列表页右下角的 **Per page** 下拉框临时切换 5 / 10 / 20 / 50。
