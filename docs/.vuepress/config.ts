import { defineUserConfig } from "vuepress-vite";
import type { DefaultThemeOptions, ViteBundlerOptions } from "vuepress-vite";

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  bundler: "@vuepress/vite",
  bundlerConfig: {
    // vite bundler options
  },
  lang: "zh-CN",
  title: "脑洞大开の乱乱想",
  description: "desc",
  themeConfig: {
    // logo:''
  },
  base: "/vuepress-blog/",
});
