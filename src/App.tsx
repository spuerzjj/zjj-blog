import './App.css'
import StickyBar from './components/Stickybar'
import { initSystemTheme } from './utils/theme'
import { Outlet } from 'react-router-dom'

function App() {
  initSystemTheme()
  return (
    <div>
      hello World
      <Outlet></Outlet>
      <StickyBar></StickyBar>
    </div>
  )
}

export default App
