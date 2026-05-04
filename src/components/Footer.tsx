import * as Icons from "lucide-react";
import { siteConfig, socialLinks } from "@/config/site";

export const Footer = () => {
  const year = new Date().getFullYear();
  const span =
    year > siteConfig.copyrightStart ? `${siteConfig.copyrightStart}–${year}` : `${year}`;

  // 只渲染 enabled 为 true 的社交链接
  const visible = socialLinks.filter((s) => s.enabled);

  return (
    <footer className="border-t border-border/60 mt-16">
      <div className="max-w-3xl mx-auto px-4 py-8 flex flex-col sm:flex-row gap-4 items-center justify-between text-sm text-muted-foreground">
        {/* 固定版权信息 */}
        <p>© {span} {siteConfig.name}. All rights reserved.</p>

        <div className="flex items-center gap-3 flex-wrap">
          {visible.map((s) => {
            // 动态从 lucide-react 中取图标
            const Icon = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[s.icon] ?? Icons.Link;
            return (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={s.label}
                title={s.label}
                className="hover:text-foreground transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
