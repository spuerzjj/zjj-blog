import { createBrowserRouter } from 'react-router-dom'
import App from '../App'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/test',
				element: <div className="bg-sky-200 h-[2000px]">test</div>
			}
		]
	}
])

export { router }
