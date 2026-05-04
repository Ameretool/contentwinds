# Content Winds

> 一个轻量、极简、专注内容的个人站点主题。  
> Blog + Microblog + Tags + Archive，全部用 Markdown 写作。

- 在线预览：<https://contentwinds.vercel.app/>
- 源码仓库：<https://github.com/BareCoders/contentwinds>

技术栈：**React 18 · Vite 5 · TypeScript · Tailwind CSS · React Router**

---

## ✨ 主题特性

- 📝 **Blog** — 长文写作，支持 Markdown + frontmatter
- 💬 **Microblog** — 短想法流，时间倒序
- 🏷️ **Tags** — 60 个预置彩色标签
- 📚 **Archive** — 按年/月归档浏览
- 👤 **About** — 个人介绍页
- 🏠 **Home** — 主页内容也是一个 `.md` 文件，零代码可改
- 🔢 **每页文章数可配置**，访问者也可临时切换
- 🔗 **页脚社交链接** 一键开关、可任意增减
- 🎨 **CSS 纯绘制 Logo**，无图片依赖
- 🌗 内置 light / dark 主题

---

## 🚀 快速开始

### 1. 环境要求

- Node.js ≥ 18  
- 推荐使用 [Bun](https://bun.sh) 或 npm / pnpm / yarn

### 2. 克隆仓库

```bash
git clone https://github.com/BareCoders/contentwinds.git
cd contentwinds
```

### 3. 安装依赖

```bash
# 推荐
bun install

# 或者
npm install
# pnpm install
# yarn
```

### 4. 启动开发服务器

```bash
bun run dev
# 或 npm run dev
```

打开浏览器访问 <http://localhost:8080>。

### 5. 构建生产版本

```bash
bun run build
# 或 npm run build
```

产物输出到 `dist/` 目录。

### 6. 本地预览构建结果

```bash
bun run preview
# 或 npm run preview
```

---

## 📁 项目结构

```
contentwinds/
├── public/
│   └── static/                # 静态资源（图片、PDF 等）
├── src/
│   ├── config/
│   │   └── site.ts            # ⭐ 站点配置（名称、邮箱、社交、每页文章数）
│   ├── content/
│   │   ├── home.md            # ⭐ 主页内容
│   │   ├── blog/*.md          # ⭐ 博客文章（每篇一个 .md）
│   │   └── microblog/*.md     # ⭐ 微型博客（每条一个 .md）
│   ├── data/
│   │   └── tags.ts            # 60 个彩色标签
│   ├── pages/                 # 各导航页（Blog/Microblog/Tags/Archive/About）
│   ├── components/            # UI 组件（Header / Footer / Layout 等）
│   └── lib/frontmatter.ts     # Markdown frontmatter 解析
└── README.md
```

---

## ✍️ 写一篇新文章

### Blog（长文）

在 `src/content/blog/` 新建 `my-post.md`：

```md
---
title: 我的第一篇文章
date: 2026-05-04
description: 一句话简介
tags: [tutorial, thoughts]
---

# 正文标题

这里是正文，使用普通 Markdown 语法。
```

文件名（去掉 `.md`）即为 URL，例如 `/blog/my-post`。

### Microblog（短内容）

在 `src/content/microblog/` 新建 `2026-05-04-slug.md`：

```md
---
date: 2026-05-04
tags: [notes]
---

今天写了一段 CSS，感觉不错。
```

> 无需修改任何列表文件 —— Vite 的 `import.meta.glob` 会自动加载。

---

## 🛠️ 常用配置

打开 `src/config/site.ts` 即可修改：

```ts
// 站点信息
export const siteConfig = {
  name: "Content Wind",
  description: "...",
  email: "hello@contentwind.dev",
  copyrightStart: 2024,
};

// 每页显示文章数量
export const postsPerPage = {
  blog: 5,        // Blog 每页几篇
  microblog: 10,  // Microblog 每页几条
};

// 页脚社交链接（enabled: true/false 一键开关）
export const socialLinks = [
  { label: "Email",  href: "mailto:you@x.com",      icon: "Mail",   enabled: true  },
  { label: "GitHub", href: "https://github.com/x",  icon: "Github", enabled: true  },
  // ... 复制一行即可新增
];
```

修改主页内容：编辑 `src/content/home.md`。  
新增 / 修改标签颜色：编辑 `src/data/tags.ts`。

---

## 🌐 在 GitHub 上添加文章（无需本地环境）

1. 打开仓库的 `src/content/blog/` 目录  
2. 点击 **Add file → Create new file**  
3. 文件名写 `your-slug.md`  
4. 粘贴 frontmatter + 正文  
5. **Commit new file**

几秒后部署平台会自动重新构建并上线。

---

## 📦 部署

构建产物 `dist/` 是纯静态文件，可部署到：

- **Vercel** —— 直接连 GitHub 仓库，零配置
- **Netlify** —— 构建命令 `npm run build`，发布目录 `dist`
- **GitHub Pages** —— 把 `dist/` 推到 `gh-pages` 分支
- **Cloudflare Pages**、自有服务器 等

---

## 📜 License

MIT © Content Winds Contributors
