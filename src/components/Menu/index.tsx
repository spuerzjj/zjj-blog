import { Link } from 'react-router-dom'

function Menu() {
	return (
		<div className="ml-auto mr-2 pr-2 sm:mr-5 sm:pr-5 flex space-x-2 items-center text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200 border-r border-slate-200">
			<Link to="/test" className="sm:px-3 hover:text-sky-400">
				首页
			</Link>
			<Link to="/test" className="sm:px-3 hover:text-sky-400">
				DEMO
			</Link>
			<Link to="/test" className="sm:px-3 hover:text-sky-400">
				其他
			</Link>
		</div>
	)
}

export default Menu
