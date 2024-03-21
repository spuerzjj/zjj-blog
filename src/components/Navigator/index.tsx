import GithubBtn from '../GithubBtn'
import Logo from '../Logo'
import Menu from '../Menu'
import ThemeBtn from '../ThemeBtn'

function Navigator() {
	return (
		<div className="sticky w-full h-[60px] top-0 left-0 transition-colors duration-500 bg-white/95 border-b border-slate-900/10 dark:border-slate-50/[0.06] dark:bg-slate-900/75 backdrop-blur z-10">
			<div className="mx-2 lg:mx-20 duration-500 h-full flex items-center justify-between">
				<Logo></Logo>
				<Menu></Menu>
				<ThemeBtn></ThemeBtn>
				<GithubBtn></GithubBtn>
			</div>
		</div>
	)
}

export default Navigator
