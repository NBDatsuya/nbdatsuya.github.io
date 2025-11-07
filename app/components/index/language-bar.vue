<script setup lang="ts">
interface LanguageNavItem {
  langCode: string;
  label: string;
  prefix: boolean;
}

const availableLanguages = ref<LanguageNavItem[]>([
  {langCode: "", label: "中文", prefix: false},
  {langCode: "en", label: "EN", prefix: true},
  {langCode: "ru", label: "Русский", prefix: true},
  {langCode: "yug", label: "SR-HR-BiH", prefix: true},
  {langCode: "ofk", label: "OFK", prefix: true},
  {langCode: "yun", label: "YUN", prefix: true},
  {langCode: "de", label: "DE", prefix: true},
  {langCode: "fr", label: "FR", prefix: true},
  {langCode: "jp", label: "日本語", prefix: true},
]);

const linkFormatter = (item: LanguageNavItem): string => {
  if (item.prefix) {
    return `/index-${item.langCode}.html`;
  }
  return "/";
};
</script>

<template>
  <nav class="language-navbar">
    <template v-for="(item, index) in availableLanguages" :key="item.langCode">
      <NuxtLink :to="linkFormatter(item)">{{ item.label }}</NuxtLink>
      <span v-if="index < availableLanguages.length - 1"> | </span>
    </template>
  </nav>
</template>

<style scoped>
.language-navbar {
  @apply text-center;
}
</style>