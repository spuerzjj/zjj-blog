const data = [
	{
		label: '日志',
		value: 0
	},
	{
		label: '访问',
		value: 0
	},
	{
		label: '版本',
		value: '0.0.1'
	}
]

const getList = () => {
	return data.map(item => {
		return (
			<div className="flex flex-col items-center text-black border-r last:border-r-0 border-sky-200">
				<div>{item.value}</div>
				<div>{item.label}</div>
			</div>
		)
	})
}

export default function index() {
	return <div className="grid grid-cols-3 px-4 mt-5">{getList()}</div>
}
