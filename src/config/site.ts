// 站点配置 — 修改这里即可更新整站元信息
export const siteConfig = {
  name: "Content Wind",
  description: "A small place on the web for blogs, microblogs and ideas.",
  email: "hello@contentwind.dev",
  copyrightStart: 2024,
};

// ============================================================
// 每页显示文章数量 —— 直接改下面的数字即可
// blog      = Blog 列表页每页显示几篇
// microblog = Microblog 列表页每页显示几条
// 用户也可以在页面右下角的「Per page」下拉框临时切换
// ============================================================
export const postsPerPage = {
  blog: 5,
  microblog: 10,
};

// ============================================================
// 底部社交导航 —— 一键开关：把 enabled 设为 false 即可隐藏
// 新增链接：复制一行，填入 label / href / icon 即可
// 可用 icon 名称见 lucide-react 文档
// ============================================================
export interface SocialLink {
  label: string;
  href: string;
  icon: string; // lucide 图标名
  enabled: boolean;
}

export const socialLinks: SocialLink[] = [
  { label: "Email",    href: "mailto:hello@contentwind.dev",        icon: "Mail",      enabled: true  },
  { label: "GitHub",   href: "https://github.com/username",          icon: "Github",    enabled: true  },
  { label: "Twitter",  href: "https://x.com/username",               icon: "Twitter",   enabled: true  },
  { label: "RSS",      href: "/rss.xml",                             icon: "Rss",       enabled: true  },
  { label: "YouTube",  href: "https://youtube.com/@username",        icon: "Youtube",   enabled: false },
  { label: "Linkedin", href: "https://linkedin.com/in/username",     icon: "Linkedin",  enabled: false },
  { label: "Instagram",href: "https://instagram.com/username",       icon: "Instagram", enabled: false },
  { label: "Facebook", href: "https://facebook.com/username",        icon: "Facebook",  enabled: false },
  { label: "Mastodon", href: "https://mastodon.social/@username",    icon: "AtSign",    enabled: false },
  { label: "Telegram", href: "https://t.me/username",                icon: "Send",      enabled: false },
];
