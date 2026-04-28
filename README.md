# NBDatsuya's Page

NBDatsuya 的个人主页，基于 Nuxt 4 + Tailwind CSS 构建，部署在 GitHub Pages。

## 技术栈

- [Nuxt 4](https://nuxt.com/) — SSR / 静态生成框架
- [Vue 3](https://vuejs.org/) — 前端框架
- [Nuxt UI v4](https://ui.nuxt.com/) — UI 组件库
- [Tailwind CSS v4](https://tailwindcss.com/) — 原子化 CSS
- TypeScript

## 功能特性

- **多语言支持** — 通过动态路由 `/index-[lang].html` 提供中文、英文、俄语、塞尔维亚-克罗地亚-波黑语、德语、法语、日语等多语言介绍页
- **主题切换** — 支持多套字体主题（Default / The Fire Rises），偏好持久化到 `localStorage`，并通过内联脚本防止页面闪烁
- **SSR + 静态导出** — 使用 `nitro` 的 `github-pages` preset 生成静态文件，直接部署到 GitHub Pages

## 目录结构

```
app/
├── assets/style/        # 全局样式与主题 CSS
├── components/
│   ├── index/           # 首页组件（导航栏、语言栏、外链栏）
│   │   └── i18n/        # 各语言介绍内容组件
│   └── theme/           # 主题切换组件
├── composables/
│   └── use-theme.ts     # 主题状态管理
├── layouts/             # 页面布局（portal / simple）
└── pages/
    ├── index.vue        # 中文首页（导引页）
    ├── home.vue         # 主页（portal 布局）
    └── (i18n-index)/    # 多语言介绍页动态路由
public/
└── font/                # 自定义字体文件
```

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器（http://localhost:8099）
pnpm dev

# 静态构建
pnpm generate

# 预览构建产物
pnpm preview
```

## 部署

项目使用 GitHub Actions 自动构建并部署到 GitHub Pages，推送到主分支后自动触发。
