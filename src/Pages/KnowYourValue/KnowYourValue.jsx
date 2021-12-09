import React, { useState, useEffect } from 'react'

// component
import Navbar from '../../Components/Navbar/Navbar'
import Card from '../../Components/KnowYourValue/Card/Card'
import Title from '../../Components/Title/Title'

// Api
import { GetAllItems } from '../../Api/FetchApi'

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

	const Restart = () => {
		UpdateItems(Items)

		SetScore(0)

		SetIsGameOver(false)
	}

	const CorrectChoice = () => {
		UpdateItems(Items)

		SetScore(Score + 1)
	}

	const UpdateItems = data => {
		const left =
			Object.keys(data)[
				Math.floor(Math.random() * Object.keys(data).length)
			]

		const right =
			Object.keys(data)[
				Math.floor(Math.random() * Object.keys(data).length)
			]

		SetNowItems({
			left: left,
			right: right,
		})
	}

	const ClickEvent = position => {
		console.log(position)
		const rightItem = Items[NowItems.right]
		const leftItem = Items[NowItems.left]

		if (position === 'right') {
			if (rightItem.value > leftItem.value) {
				CorrectChoice()
			} else {
				GameOver()
			}
		} else if (position === 'left') {
			if (rightItem.value < leftItem.value) {
				CorrectChoice()
			} else {
				GameOver()
			}
		} else if (position === 'fair') {
			if (rightItem.value === leftItem.value) {
				CorrectChoice()
			} else {
				GameOver()
			}
		}
	}

	useEffect(() => {
		console.log('first render')

		const FetchData = async () => {
			await GetAllItems().then(data => {
				AfterFetchData(data)
			})
		}

		const AfterFetchData = data => {
			console.log(data)

			SetItems(data.data)
			UpdateItems(data.data)
		}

		FetchData()
	}, [])

	return (
		<>
			{console.log('Items', Items)}
			{console.log('NowItems', NowItems)}
			{console.log('NowItems Length', Object.keys(NowItems).length)}
			<Navbar />
			<Title title='Know Your Value' />
			<div className='know-your-value-score'>
				<h3>Score: {Score}</h3>
			</div>
			{Object.keys(NowItems).length !== 0 && (
				<>
					{!IsGameOver && (
						<>
							<div className='know-your-value-grid'>
								<div className='left'>
									{Object.keys(NowItems).length !== 0 && (
										<Card
											itemData={Items[NowItems.left]}
											ClickEvent={() =>
												ClickEvent('left')
											}
										/>
									)}
								</div>
								<div className='center'>
									<button
										title='Fair'
										className='button'
										onClick={() => ClickEvent('fair')}
									>
										Fair
									</button>
								</div>
								<div className='right'>
									{Object.keys(NowItems).length !== 0 && (
										<Card
											itemData={Items[NowItems.right]}
											ClickEvent={() =>
												ClickEvent('right')
											}
										/>
									)}
								</div>
							</div>
						</>
					)}
					{IsGameOver && (
						<>
							<div className='know-your-value game-over'>
								<h2 className='game-over-title'>Game Over</h2>
								<button
									className='game-over-button'
									onClick={Restart}
								>
									Play Again
								</button>
							</div>
						</>
					)}
				</>
			)}
		</>
	)
}

export default KnowYourValue
