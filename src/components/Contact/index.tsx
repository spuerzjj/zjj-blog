import { go } from '../../utils/jump'

export default function index() {
	return (
		<div className="flex flex-col items-center w-full">
			<img src="/img/pm.jpeg" className="rounded-full size-28" alt="" />
			<div className="font-bold text-2xl leading-relaxed mt-5">ZJJ</div>
			<div className="font-light text-sm italic">Stay Hungry, Stay Foolish</div>

			<div className="h-[1px] w-[150px] bg-sky-300 my-5 "></div>
			<div
				className="underline cursor-pointer font-bold text-red-300"
				onClick={() => {
					go('https://blog.csdn.net/g1016779270?type=blog')
				}}
			>
				点我跳转CSDN主页
			</div>
			<div className="mt-3">Phone:18036507270</div>
			<div className="mt-3">18036507270@163.com</div>

			<div className="h-[1px] w-[150px] bg-sky-300 my-5"></div>
		</div>
	)
}
