<script setup lang="ts">

import NavigateBar from "~/components/index/navigate-bar.vue";
import LanguageBar from "~/components/index/language-bar.vue";
import RelatedLinkBar from "~/components/index/related-link-bar.vue";

useHead({
  title: "欢迎 - NBDatsuya的主页"
})

definePageMeta({
  layout: 'simple',
})
</script>

<template>
  <div class="the-fucking-classical-page">

    <NavigateBar />
    <LanguageBar />
    <main>
      <center>
        <h1 class="title-cn">NBDatsuya的主页欢迎您！</h1>
        <h1 class="title-en">Welcome to NBDatsuya's homepage!</h1>
        <img alt="my-portrait" src="https://avatars.githubusercontent.com/u/92795619?v=4" width="270" />
      </center>
      <p>
        大家好 👋 NBDatsuya是也。玩具系统学徒，从事Web前端和游戏开发，也略玩一点后端。目前在某中厂上班，研究和学习游戏开发，争取自己出来做独立游戏。
      </p>
      <p>
        🌱 Vue.js 3, Golang , Springboot
      </p>
      <p>
        😄 不搞西方性别政治，是个正常取向的男人。
      </p>
      <p>
        🏙 目前在深圳，一个讲究分型艺术的城市。
      </p>

      <ul>
        <li>
          <a>DDataComponent(Based on PrimeVue UI)</a>
          <span>: 一个借助现有组件库快速搭建的符合作者2023-2025开发需求的，囊括对话框、数据表格、数据详情、数据搜索框等开箱即用的组件。</span>
        </li>
        <li>
          <a>The Frontroom</a>
          <span>: 后室的捏他，一个简易的多人对战游戏，互相碰撞，根据碰撞判定出局，成为那个坚持到最后的人</span>
        </li>
        <li>
          <a>SNAMC</a>
        </li>
      </ul>
    </main>

    <RelatedLinkBar />
    <NavigateBar />
  </div>
</template>

<style scoped>
@reference "~/assets/style/main.css";

.the-fucking-classical-page {
  @apply m-2 lg:max-w-7xl xl:mx-auto;
}

h1.title-cn {
  @apply block text-[2em];
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