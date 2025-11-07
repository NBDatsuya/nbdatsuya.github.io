<script setup>
import {useTheme} from "~/composables/use-theme.ts";
// --- 皮肤(颜色)逻辑 ---
const appConfig = useAppConfig()
const skins = [
  {name: 'Forest', primary: 'green', gray: 'slate'},
  {name: 'Ocean', primary: 'blue', gray: 'cool'},
  {name: 'Rose', primary: 'rose', gray: 'zinc'},
]
const primaryCookie = useCookie('skin-primary', {default: () => appConfig.ui.primary})
const grayCookie = useCookie('skin-gray', {default: () => appConfig.ui.gray})

function setSkin(skin) {
  primaryCookie.value = skin.primary
  grayCookie.value = skin.gray
  appConfig.ui.primary = skin.primary
  appConfig.ui.gray = skin.gray
}

// 初始化颜色
appConfig.ui.primary = primaryCookie.value
appConfig.ui.gray = grayCookie.value

// --- 字体逻辑 ---
const {fonts, currentFont, setFont} = useTheme()

// --- 明暗模式 (Nuxt UI) ---
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
  <div class="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md w-96" >
    <div class="flex flex-col gap-4">
      <div class="flex justify-between items-center">
        <label for="dark-mode" class="text-sm font-medium">暗黑模式</label>
        <USwitch id="dark-mode" v-model="isDark"/>
      </div>
      <div>
        <label for="font-select" class="block text-sm font-medium mb-1">主题</label>
        <USelect
            id="font-select"
            :model-value="currentFont"
            :items="fonts"
            label-key="name"
            value-key="id"
            @update:model-value="setFont($event)"
            class="w-full"
        />
      </div>
    </div>
  </div>
</template>