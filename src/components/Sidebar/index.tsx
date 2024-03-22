import Contact from '../Contact'
import Stat from '../Stat'

function SideBar() {
	return (
		<div className="fixed py-10 w-[260px] min-h-screen left-0 top-[60px] bg-zinc-100 dark:bg-zinc-600 hidden md:block">
			<Contact></Contact>
			<Stat></Stat>
		</div>
	)
}

export default SideBar
