<script setup lang="ts">

</script>

<template>
  <nav class="header-navbar">
    <NuxtLink href="/home">首页</NuxtLink>
    |
    <NuxtLink href="/home">玩具集</NuxtLink>
    |
    <NuxtLink href="/home">自我介绍</NuxtLink>
    |
    <NuxtLink href="/">导引</NuxtLink>
  </nav>
</template>

<style scoped>
@reference "~/assets/style/main.css";
.header-navbar {
  @apply text-center;
}
</style>