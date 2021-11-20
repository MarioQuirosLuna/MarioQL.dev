import React from 'react'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const ItemMenu = (props) => {

	const { url, label, isFooter } = props

	return (
		<Link to={url} className={`slideUp ${isFooter ? 'delay-6' : 'duration-3'}`}>{ label } <FontAwesomeIcon icon={faArrowLeft}/></Link>
	)
}

export default ItemMenu
