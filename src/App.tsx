import './App.css'
import Navigator from './components/Navigator'
import SideBar from './components/Sidebar'
import { initSystemTheme } from './utils/theme'
import { Outlet } from 'react-router-dom'

function App() {
	initSystemTheme()

	return (
		<div className="min-w-[375px] min-h-screen bg-white/95 dark:bg-slate-900/75 duration-500 text-slate-700 dark:text-slate-200">
			<Navigator></Navigator>
			<SideBar></SideBar>
			<div className="pl-[300px]">
				<Outlet></Outlet>
			</div>
		</div>
	)
}

export default App
