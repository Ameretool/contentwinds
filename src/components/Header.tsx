import { NavLink } from "react-router-dom";
import { Github, Twitter, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/blog", label: "Blog" },
  { to: "/microblog", label: "Microblog" },
  { to: "/tags", label: "Tags" },
  { to: "/archive", label: "Archive" },
  { to: "/about", label: "About" },
];

export const Header = () => {
  const [dark, setDark] = useState(() =>
    typeof window !== "undefined" && document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="border-b border-border/60 bg-background/80 backdrop-blur sticky top-0 z-40">
      <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
        <nav className="flex items-center gap-5 text-sm font-medium">
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
        <div className="flex items-center gap-3 text-muted-foreground">
          <a href={siteConfig.social.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-foreground">
            <Twitter className="h-4 w-4" />
          </a>
          <a href={siteConfig.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-foreground">
            <Github className="h-4 w-4" />
          </a>
          <button
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle theme"
            className="hover:text-foreground"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};
