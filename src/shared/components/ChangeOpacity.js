import React, { useEffect, useState } from 'react'

const ChangeOpacity = (props) => {

	const { component: Component } = props

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
