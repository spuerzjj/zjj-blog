function Logo() {
	return (
		<div className="h-12 flex items-center">
			<img src="/img/logo.jpg" className="w-12 h-12 rounded-xl" alt="" />
			<div className="ml-4 text-xl w-12 min-[400px]:w-auto dark:text-white font-bold hover:text-sky-400">
				ZJJ's Blog
			</div>
			<div className="transition-all duration-500 ml-10 text-xs font-semibold text-sky-600 dark:text-sky-400 bg-sky-400/10 rounded-full py-1 px-3 hidden md:flex items-center hover:bg-sky-400/20">
				永远相信最美好的事情即将发生！
			</div>
		</div>
	)
}

export default Logo
