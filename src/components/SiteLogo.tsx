// 纯 CSS 小图标 —— 一个带渐变 + 风的圆形 logo，无需任何图片资源
export const SiteLogo = () => (
  <span
    aria-hidden
    className="relative inline-block h-7 w-7 rounded-full overflow-hidden"
    style={{
      background:
        "conic-gradient(from 210deg, hsl(221 83% 53%), hsl(280 80% 60%), hsl(190 90% 55%), hsl(221 83% 53%))",
      boxShadow: "0 1px 6px hsl(221 83% 53% / 0.35)",
    }}
  >
    {/* 中心白点 */}
    <span
      className="absolute inset-1 rounded-full bg-background flex items-center justify-center"
    >
      {/* 用 CSS border 拼一个小风的形状 */}
      <span
        className="block"
        style={{
          width: 0,
          height: 0,
          borderLeft: "5px solid transparent",
          borderRight: "5px solid transparent",
          borderBottom: "8px solid hsl(221 83% 53%)",
          transform: "rotate(20deg)",
        }}
      />
    </span>
  </span>
);
