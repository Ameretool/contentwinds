// 极简的 frontmatter 解析器（无需额外依赖）
// 支持：字符串、数字、布尔、形如 [a, b, c] 的数组
export interface Parsed {
  data: Record<string, unknown>;
  content: string;
}

const parseValue = (raw: string): unknown => {
  const v = raw.trim();
  if (!v) return "";
  // 去除首尾引号
  const unquoted = v.replace(/^["'](.*)["']$/, "$1");
  // 数组：[a, b, "c"]
  if (v.startsWith("[") && v.endsWith("]")) {
    return v
      .slice(1, -1)
      .split(",")
      .map((s) => s.trim().replace(/^["'](.*)["']$/, "$1"))
      .filter(Boolean);
  }
  if (v === "true") return true;
  if (v === "false") return false;
  if (/^-?\d+(\.\d+)?$/.test(v)) return Number(v);
  return unquoted;
};

export function parseFrontmatter(raw: string): Parsed {
  // 匹配文件开头的 --- ... --- 块
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  const [, head, body] = match;
  const data: Record<string, unknown> = {};
  for (const line of head.split("\n")) {
    const m = line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/);
    if (m) data[m[1]] = parseValue(m[2]);
  }
  return { data, content: body };
}
