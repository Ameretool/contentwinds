/// <reference types="vite/client" />

// 允许以 ?raw 方式导入 .md 文件
declare module "*.md?raw" {
  const content: string;
  export default content;
}
