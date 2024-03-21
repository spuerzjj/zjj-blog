import './App.css'
import Navigator from './components/Navigator'
import SideBar from './components/Sidebar'
import { initSystemTheme } from './utils/theme'
import { Outlet } from 'react-router-dom'

function App() {
	initSystemTheme()

	return (
		<div className="min-w-[375px]">
			<Navigator></Navigator>
			<SideBar></SideBar>
			<div className="pl-[300px]">
				<Outlet></Outlet>
			</div>
		</div>
	)
}

export default App
