<script setup lang="ts">
import LanguageBar from "~/components/index/language-bar.vue";
import RelatedLinkBar from "~/components/index/related-link-bar.vue";
import NavigateBar from "~/components/index/navigate-bar.vue";
import { type Component } from 'vue';

// 1. 移除 ref() 和 onMounted()，将逻辑直接放在 setup 顶层
//    useRoute() 在 setup 期间在服务器和客户端上都可以访问
const route = useRoute();

// 2. 确保在服务器上也能正确获取 lang
//    (route.params.lang 可能是 undefined 或一个数组，我们只取第一个字符串)
let lang: string;
if (Array.isArray(route.params.lang)) {
  lang = route.params.lang[0] || 'en';
} else {
  lang = route.params.lang || 'en';
}

// 3. 动态导入组件列表
const modules = import.meta.glob('~/components/index/i18n/intro-*.vue', { import: 'default' });
const key = `/components/index/i18n/intro-${lang}.vue`;
const defaultKey = '/components/index/i18n/intro-en.vue';

let Content: Component; // Content 不再是 ref，它是一个确定的组件

// 4. 同步地决定 Content 应该是什么
if (modules[key]) {
  // defineAsyncComponent 会返回一个组件定义，
  // Nuxt 知道如何在服务器和客户端上正确处理它
  Content = defineAsyncComponent(modules[key] as () => Promise<Component>);
} else if (modules[defaultKey]) {
  // 回退到 'en'
  Content = defineAsyncComponent(modules[defaultKey] as () => Promise<Component>);
} else {
  // 极端情况：连 en 都没有，提供一个空的占位符以防止崩溃
  console.error("Critical: Default component 'intro-en.vue' is missing!");
  Content = defineComponent({ render: () => null });
}
definePageMeta({
  layout: 'simple',
})
</script>

<template>
  <div class="the-fucking-classical-page">
    <NavigateBar />
    <LanguageBar />
    <Content />
    <RelatedLinkBar />
    <NavigateBar />
  </div>
</template>

<style>
@reference "~/assets/style/main.css";

.the-fucking-classical-page {
  @apply m-2 lg:max-w-7xl xl:mx-auto;
}

h1.title-cn {
  @apply block text-[2em] text-(--text-color);
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0;
  margin-inline-end: 0;
  font-weight: bold;
  unicode-bidi: isolate;
}

h1.title-en {
  @apply block text-2xl font-semibold;
  unicode-bidi: isolate;
  margin-block-end: 0.5em;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
  unicode-bidi: isolate;
}

ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  padding-inline-start: 40px;
  unicode-bidi: isolate;
}

li {
  margin-bottom: 0.5em;
}
</style>