// composables/use-theme.ts

export const useTheme = () => {
	const storageKey = 'nbdlog-theme'
	const attrKey = 'data-theme'

	// 1. 定义可选字体 (更新这里)
	const fonts = [
		{id: 'default', name: 'Default'},
		{id: 'tfr', name: 'The Fire Rises'},
	]

	// 2. 创建一个 state，并从 <html> 属性初始化它
	const currentFont = useState('nbdlog-theme', () => {
		// 使用这个通用的检查来替代 process.server
		if (typeof window === 'undefined') {
			return 'default'
		}
		return document.documentElement.getAttribute(attrKey) || 'default'
	})

	// 3. 切换字体的函数
	const setFont = (fontId: string) => {
		currentFont.value = fontId

		localStorage.setItem(storageKey, fontId)
		document.documentElement.setAttribute(attrKey, fontId)

	}

	return {
		fonts,
		currentFont,
		setFont,
	}
}