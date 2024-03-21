# 手把手教你搭建个人博客（一）

## 前言

最近想到把自己的个人博客系统性重构一下，想了想索性从 0 开始写，顺便记录下整个过程给大家做个参考，现在我们马上开始。

## 一. 使用 Vite 脚手架构建一个 React + TS 项目

### 1. 键入如下命令

```bash
pnpm create vite
```

记住选择 **React** 和 **TypeScript**

### 2. 清空代码

清空一下`App.css` `App.tsx` `index.css`里面的代码，我们不需要他预设的一些样式

> ##### why not webpack
>
> 因为 vite 快，构建简单，配置少
>
> ##### why not vue
>
> 因为最近工作中都是用的 Vue3 + JS，Vue 已经写烂了，所以这里就用 React 和 TS 的使用。

## 二. React Router

### 1. 安装

```bash
pnpm i react-router-dom
```

### 2. 配置

这里比较简单，贴上代码自己看一下

- #### main.ts

```tsx
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router}></RouterProvider>)
```

- #### App.tsx

```tsx
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  )
}

export default App
```

- #### router/index.tsx

```tsx
// router目录自己新建一下
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/test',
        element: <div>test</div>
      }
    ]
  }
])

export { router }
```

### 3. 测试

启动一下项目

```bash
npm run dev
```

在浏览器访问一下 http://localhost:5173/test
不出意外可以看到 test 字符了

## 三. tailwindCSS + headlessUI + heroicons

### 1. 安装

```bash
pnpm add -D tailwindcss postcss autoprefixer
pnpm add @headlessui/react
pnpm add @heroicons/react
```

### 2. 配置 tailwindCSS

- #### 执行一下初始化命令

```bash
npx tailwindcss init -p
```

- #### 配置根目录下的 tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{tsx,jsx,ts,js}'], // 一定要把tsx放到最前面，这个是会影响编译效率的
  theme: {
    extend: {}
  },
  plugins: []
}
```

- #### 配置 index.css
  这是为了注入 tailwind 预设的一些基础样式

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

> ##### 为什么使用 tailwind
>
> 1.  原子化，通过类名的组合，可以让我不再去写 css
> 2.  提供的主题切换功能非常好用，省心
> 3.  天然的样式隔离，不存在样式冲突问题了

## 四. 主题切换功能开发

### 1. 方案

- 提供 3 种选项给用户，`light` `dark` `跟随操作系统` ，默认跟随操作系统，选择结果保存在`localstorage`中
- 根据 html 根标签上的 class 是`dark` 还是 `light` 来决定深色和亮色，tailwind 提供了`DarkMode selector`功能

### 2. 配置 tailwind

- #### 配置 tailwind.config.js
  tailwind 提供一个 Dark Mode 功能，在类名之前添加`dark:`，表示暗色模式下采用的样式
  tailwind 默认是根据媒体查询来确定当前是`light`还是`dark`，我们这里改一下

```js
module.exports = {
  darkMode: 'selector' // 加上这一行，tailwind就会根据html根标签的类名来决定当前主题了
  // ...
}
```

- #### 如何使用
  我们在 App.tsx 里面测试一下

```tsx
function App() {
  return (
    // 这表示light模式下黑色字体，白色背景，dark模式下，白色字体，黑色背景
    <div className="text-black bg-white dark:text-white dark:bg-black">hello World</div>
  )
}
```

打开浏览器，手动修改 html 标签的 class 试一下主题的切换

### 3. 切换主题的函数实现

```ts
// src/utils/theme.ts，新建一下这个文件

export type Theme = 'light' | 'dark' | 'system'

// 设置主题，并改变html标签类
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
  const isDark = theme === 'dark' || (theme !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches)

  return isDark
}

// 根据当前设置的主题改变html的类名
export function initSystemTheme() {
  getIsDark() ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
}
```

### 4. 写一个切换主题的控件

一个 button 选择控件，效果如下
![alt text](http://120.77.169.147:8080/zjj-blog/step1/themeBtn.png)
ui 部分就贴代码了，文件目录：`src/components/ThemeBtm/index.tsx`里
我将这个组件固定在了页面右上角，后续再进行调整

## 结语

我们已经搭建好了继承的框架，确定了 ui 和 css 方案。接下来就是布局整体页面。
