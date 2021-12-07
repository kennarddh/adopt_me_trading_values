import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import WinFairLose from './Pages/WinFairLose/WinFairLose'
import KnowYourValue from './Pages/KnowYourValue/KnowYourValue'

// 404
import NoMatch from './Pages/NoMatch/NoMatch'

const App = () => {
	return (
		<>
			<Router>
				<Routes>
					{/* WinFairLose */}
					<Route
						exact
						path='/WinFairLose'
						element={<WinFairLose />}
					/>

					{/* KnowYourValue */}
					<Route
						exact
						path='/KnowYourValue'
						element={<KnowYourValue />}
					/>

					{/* 404 */}
					<Route path='*' element={<NoMatch />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
