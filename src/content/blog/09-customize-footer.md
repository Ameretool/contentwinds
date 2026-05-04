---
title: 自定义页脚社交链接
date: 2026-04-14
description: 一键开启 / 隐藏页脚的社交图标
tags: [tutorial, design]
---

# 自定义页脚社交链接

打开 `src/config/site.ts`，找到 `socialLinks` 数组：

```ts
export const socialLinks: SocialLink[] = [
  { label: "Email",   href: "mailto:hi@you.com",        icon: "Mail",    enabled: true  },
  { label: "GitHub",  href: "https://github.com/you",   icon: "Github",  enabled: true  },
  { label: "YouTube", href: "https://youtube.com/@you", icon: "Youtube", enabled: false },
  // ...
];
```

- **显示** → `enabled: true`
- **隐藏** → `enabled: false`
- **新增** → 复制一行，填入 label / href / icon

图标名称参考 [lucide.dev](https://lucide.dev/) 上的 React 图标名。
