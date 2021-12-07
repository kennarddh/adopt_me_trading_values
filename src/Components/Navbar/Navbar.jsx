import React from 'react'

// component

// styling
import './Navbar.css'

const Navbar = props => {
	return (
		<>
			<nav className='navbar'>
				<div className='center'>
					<div
						className={`item${
							props.winFairLose !== undefined ? ' active' : ''
						}`}
					>
						<a href='/WinFairLose'>Win Fair Lose</a>
					</div>
					<div
						className={`item${
							props.knowYourValue !== undefined ? ' active' : ''
						}`}
					>
						<a href='/KnowYourValue'>Know Your Value</a>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar
