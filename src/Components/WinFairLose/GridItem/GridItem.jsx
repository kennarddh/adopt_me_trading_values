import React from 'react'

// component

// styling
import './GridItem.css'

const GridItem = props => {
	return (
		<>
			<div className='grid-item'>
				{props.addButton && (
					<>
						<div className='add-button'>
							<div className='symbol'></div>
						</div>
					</>
				)}
				{!props.empty && (
					<>
						<img
							className='item-image'
							src={`http://kennarddh.pythonanywhere.com/static/images/${props.itemData.id}.png`}
							alt={props.itemData.name}
						/>
						<div className='item-extras'>
							{props.itemData.is_fly && (
								<span className='item-extras-item circle fly'>
									<p>F</p>
								</span>
							)}
							{props.itemData.is_ride && (
								<span className='item-extras-item circle ride'>
									<p>R</p>
								</span>
							)}

							{props.itemData.is_full_grown && (
								<span className='item-extras-item full-grown'>
									<p>G</p>
								</span>
							)}
							{props.itemData.is_neon && (
								<span className='item-extras-item neon'>
									<p>N</p>
								</span>
							)}
							{props.itemData.is_mega_neon && (
								<span className='item-extras-item mega-neon'>
									<p>M</p>
								</span>
							)}
						</div>
					</>
				)}
			</div>
		</>
	)
}

export default GridItem
