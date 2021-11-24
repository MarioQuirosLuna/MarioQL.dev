import React from 'react'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Item, SpaceStyled } from './HamburgerMenu.styled'

const ItemMenu = (props) => {

	const { url, label, menu, handleClick } = props

	return (
		<Item to={url} onClick={handleClick} className={`${menu ? 'slideLeft' : 'slideRight'} duration-7`}>
			{ label }<SpaceStyled /> <FontAwesomeIcon icon={faArrowLeft}/>
		</Item>
	)
}

export default ItemMenu
