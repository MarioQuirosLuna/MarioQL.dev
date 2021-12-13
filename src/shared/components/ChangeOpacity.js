import React, { useEffect, useState } from 'react'

const ChangeOpacity = ({ component: Component }) => {

	const [opacity, setOpacity] = useState('opacity')//opacity: 0

	useEffect(() => {
		setTimeout(() => {
			setOpacity('')//opacity: 1
		},500)
	},[])

	return (
		<div className={opacity}>{Component}</div>
	)
}

export default ChangeOpacity
