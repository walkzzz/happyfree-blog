import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  head: [["link", { rel: "icon", href: "/favicon.png" }]], // 添加 favicon
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    lastUpdated: {
      text: "最后更新时间",
      formatOptions: {
        dateStyle: "medium", // 日期样式
        timeStyle: "medium", // 时间样式
      },
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: `Copyright © 2018-${new Date().getFullYear()}&nbsp;&nbsp;<a href="https://beian.miit.gov.cn/#/Integrated/index" style="color: inherit; text-decoration: none;">备案信息</a>`,
    },
  },
  srcDir: "./docs", // 设置文档目录
  lastUpdated: true, // 开启最后更新时间
});
