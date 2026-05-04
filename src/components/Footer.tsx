import { Github, Twitter, Mail, Rss } from "lucide-react";
import { siteConfig } from "@/config/site";

export const Footer = () => {
  const year = new Date().getFullYear();
  const span = year > siteConfig.copyrightStart ? `${siteConfig.copyrightStart}–${year}` : `${year}`;
  return (
    <footer className="border-t border-border/60 mt-16">
      <div className="max-w-3xl mx-auto px-4 py-8 flex flex-col sm:flex-row gap-4 items-center justify-between text-sm text-muted-foreground">
        <p>© {span} {siteConfig.name}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground inline-flex items-center gap-1.5">
            <Mail className="h-4 w-4" /> {siteConfig.email}
          </a>
          <a href={siteConfig.social.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-foreground">
            <Twitter className="h-4 w-4" />
          </a>
          <a href={siteConfig.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-foreground">
            <Github className="h-4 w-4" />
          </a>
          <a href={siteConfig.social.rss} aria-label="RSS" className="hover:text-foreground">
            <Rss className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
