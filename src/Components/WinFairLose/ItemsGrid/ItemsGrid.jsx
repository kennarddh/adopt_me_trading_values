import React from 'react'

// component
import GridItem from '../GridItem/GridItem'

// styling
import './ItemsGrid.css'

const ItemsGrid = props => {
	return (
		<>
			<div className='items-grid'>
				{Object.keys(props.itemsData).map(key => {
					const value = props.itemsData[key]

					return <GridItem key={key} itemData={value} />
				})}
			</div>
		</>
	)
}

export default ItemsGrid
