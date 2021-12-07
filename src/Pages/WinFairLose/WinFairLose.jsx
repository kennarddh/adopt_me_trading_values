import React from 'react'

// component
import ItemsGrid from '../../Components/WinFairLose/ItemsGrid/ItemsGrid'
import Navbar from '../../Components/Navbar/Navbar'

// styling
import './WinFairLose.css'

const WinFairLose = () => {
	const data = {
		albino_monkey: {
			id: 15,
			name: 'Albino Monkey',
			is_pet: true,
			is_fly: true,
			is_ride: true,
			is_neon: true,
			is_mega_neon: true,
			is_full_grown: true,
			value: 600,
			value_neon: 2000,
			value_mega_neon: 6200,
		},
		albino_monkeys: {
			id: 15,
			name: 'Albino Monkey',
			is_pet: true,
			is_fly: true,
			is_ride: true,
			is_neon: true,
			is_mega_neon: true,
			is_full_grown: true,
			value: 600,
			value_neon: 2000,
			value_mega_neon: 6200,
		},
		albino_monkeyss: {
			id: 15,
			name: 'Albino Monkey',
			is_pet: true,
			is_fly: true,
			is_ride: true,
			is_neon: true,
			is_mega_neon: true,
			is_full_grown: true,
			value: 600,
			value_neon: 2000,
			value_mega_neon: 6200,
		},
		albino_monkeysss: {
			id: 15,
			name: 'Albino Monkey',
			is_pet: true,
			is_fly: true,
			is_ride: true,
			is_neon: true,
			is_mega_neon: true,
			is_full_grown: true,
			value: 600,
			value_neon: 2000,
			value_mega_neon: 6200,
		},
		albino_monkeyssss: {
			id: 15,
			name: 'Albino Monkey',
			is_pet: true,
			is_fly: true,
			is_ride: true,
			is_neon: true,
			is_mega_neon: true,
			is_full_grown: true,
			value: 600,
			value_neon: 2000,
			value_mega_neon: 6200,
		},
		albino_monkeysssss: {
			id: 15,
			name: 'Albino Monkey',
			is_pet: true,
			is_fly: true,
			is_ride: true,
			is_neon: true,
			is_mega_neon: true,
			is_full_grown: true,
			value: 600,
			value_neon: 2000,
			value_mega_neon: 6200,
		},
		albino_monkeyssssss: {
			id: 15,
			name: 'Albino Monkey',
			is_pet: true,
			is_fly: true,
			is_ride: true,
			is_neon: true,
			is_mega_neon: true,
			is_full_grown: true,
			value: 600,
			value_neon: 2000,
			value_mega_neon: 6200,
		},
		albino_monkeysssssss: {
			id: 15,
			name: 'Albino Monkey',
			is_pet: true,
			is_fly: true,
			is_ride: true,
			is_neon: true,
			is_mega_neon: true,
			is_full_grown: true,
			value: 600,
			value_neon: 2000,
			value_mega_neon: 6200,
		},
	}

	return (
		<>
			<Navbar />
			<div className='win-fair-lose-grid'>
				<div className='left'>
					<ItemsGrid itemsData={data} />
				</div>
				<div className='center'></div>
				<div className='right'>
					<ItemsGrid itemsData={data} />
				</div>
			</div>
		</>
	)
}

export default WinFairLose
