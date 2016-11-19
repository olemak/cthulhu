import React, { PropTypes } from 'react'

const Link = ({ active , children, onCLick }) => {
	if (active) {
		return <span>{children}</span>
	}

	return (
		<a 
			href="#"
			onCLick={e => {
				e.preventDefault()
				onCLick()
			}}
		>
		{children}
		</a>
	)
}

Link.propTypes = {
	active: 	PropTypes.bool.isRequired,
	children: 	PropTypes.node.isRequired,
	onCLick: 	PropTypes.func.isRequired
}

export default Link