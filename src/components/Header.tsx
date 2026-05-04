import { NavLink } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { SiteLogo } from "./SiteLogo";
import { siteConfig } from "@/config/site";

// 顶部导航 —— 链接定义在这里，修改/新增导航条目就改这个数组
const links = [
  { to: "/", label: "Home", end: true },
  { to: "/blog", label: "Blog" },
  { to: "/microblog", label: "Microblog" },
  { to: "/tags", label: "Tags" },
  { to: "/archive", label: "Archive" },
  { to: "/about", label: "About" },
];

export const Header = () => {
  const [dark, setDark] = useState(
    () => typeof window !== "undefined" && document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="border-b border-border/60 bg-background/80 backdrop-blur sticky top-0 z-40">
      <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-5">
          {/* 纯 CSS 绘制的小 logo，无需图片资源 */}
          <NavLink to="/" className="flex items-center gap-2 font-semibold">
            <SiteLogo />
            <span className="hidden sm:inline text-sm">{siteConfig.name}</span>
          </NavLink>
          <nav className="flex items-center gap-4 text-sm font-medium">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `transition-colors hover:text-foreground ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
        {/* 顶部社交导航已移除；只保留主题切换 */}
        <button
          onClick={() => setDark((d) => !d)}
          aria-label="Toggle theme"
          className="text-muted-foreground hover:text-foreground"
        >
          {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
      </div>
    </header>
  );
};
