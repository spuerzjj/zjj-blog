export type Theme = 'light' | 'dark' | 'system'

// 设置主题
export function setTheme(theme: Theme) {
  localStorage.setItem('theme', theme)
  initSystemTheme()
}

// 获取当前设置的主题
export function getTheme(): Theme {
  const _theme = localStorage.getItem('theme')
  if (_theme === 'dark' || _theme === 'light') {
    return _theme
  } else {
    return 'system'
  }
}

// 获取是否是暗色主题
export function getIsDark(): boolean {
  const theme = getTheme()
  const isDark =
    theme === 'dark' ||
    (theme !== 'light' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)

  return isDark
}

// 根据当前设置的主题改变html的类名
export function initSystemTheme() {
  getIsDark()
    ? document.documentElement.classList.add('dark')
    : document.documentElement.classList.remove('dark')
}
