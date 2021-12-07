import React, { useState, useEffect } from 'react'

// component
import Navbar from '../../Components/Navbar/Navbar'
import Card from '../../Components/KnowYourValue/Card/Card'

// styling
import './KnowYourValue.css'

const KnowYourValue = () => {
	const [Items, SetItems] = useState({})
	const [NowItems, SetNowItems] = useState({})
	const [Score, SetScore] = useState(0)
	const [IsGameOver, SetIsGameOver] = useState(false)

	const GameOver = () => {
		SetIsGameOver(true)
	}

	const UpdateItems = () => {
		const left =
			Object.keys(Items)[
				Math.floor(Math.random() * Object.keys(Items).length)
			]

		const right =
			Object.keys(Items)[
				Math.floor(Math.random() * Object.keys(Items).length)
			]

		console.log(Items)
		console.log(Math.floor(Math.random() * Object.keys(Items).length))

		SetNowItems({
			left: left,
			right: right,
		})
	}

	useEffect(() => {
		console.log('first')
		SetItems({
			'1st_place_ribbon': {
				id: 635,
				is_pet: false,
				name: '1st Place Ribbon',
				value: 8,
				value_mega_neon: 0,
				value_neon: 0,
			},
			'2021_uplift_butterfly': {
				id: 459,
				is_pet: true,
				name: '2021 Uplift Butterfly',
				value: 45,
				value_mega_neon: 1000,
				value_neon: 210,
			},
			ace_pride_pin: {
				id: 636,
				is_pet: false,
				name: 'Ace Pride Pin',
				value: 0,
				value_mega_neon: 0,
				value_neon: 0,
			},
			adopt_me_boy_scooter: {
				id: 148,
				is_pet: false,
				name: 'Adopt Me Boy Scooter',
				value: 200,
				value_mega_neon: 0,
				value_neon: 0,
			},
			adopt_me_girl_scooter: {
				id: 149,
				is_pet: false,
				name: 'Adopt Me Girl Scooter',
				value: 200,
				value_mega_neon: 0,
				value_neon: 0,
			},
			adopt_me_snowboard_1: {
				id: 150,
				is_pet: false,
				name: 'Adopt Me Snowboard 1',
				value: 375,
				value_mega_neon: 0,
				value_neon: 0,
			},
			adopt_me_snowboard_2: {
				id: 151,
				is_pet: false,
				name: 'Adopt Me Snowboard 2',
				value: 375,
				value_mega_neon: 0,
				value_neon: 0,
			},
		})

		UpdateItems()
	}, [])

	console.log(NowItems)

	return (
		<>
			<Navbar />
			<div className='know-your-value grid'>
				<div className='left'>
					<Card itemData={Items[NowItems.left]} />
				</div>
				<div className='right'>
					<Card itemData={Items[NowItems.right]} />
				</div>
			</div>
		</>
	)
}

export default KnowYourValue
