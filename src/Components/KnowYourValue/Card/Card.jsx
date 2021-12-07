import React from 'react'

// component

// styling
import './Card.css'

const Card = props => {
	return (
		<>
			<div className='know-your-value-card' onClick={props.clickEvent}>
				<img
					className='item-image'
					src={`http://kennarddh.pythonanywhere.com/static/images/${props.itemData.id}.png`}
					alt={props.itemData.name}
				/>
			</div>
		</>
	)
}

export default Card
