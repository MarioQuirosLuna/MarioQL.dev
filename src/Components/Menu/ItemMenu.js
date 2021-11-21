import React from 'react'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { SpaceStyled } from './HamburguerMenu.styled'

const ItemMenu = (props) => {

	const { url, label, index } = props

	return (
		<Link to={url} className={`slideUp duration-5 delay-${index}`}>{ label }<SpaceStyled /> <FontAwesomeIcon icon={faArrowLeft}/></Link>
	)
}

export default ItemMenu
