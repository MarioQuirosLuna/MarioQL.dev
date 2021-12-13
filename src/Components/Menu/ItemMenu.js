import React from 'react'

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Item, SpaceStyled } from './HamburgerMenu.styled'

const ItemMenu = (props) => {

	const { url, label, menu, handleClick } = props

	return (
		<Item to={url} onClick={handleClick} className={menu ? 'fadeIn' : 'fadeOut'}>
			<h3>{ label }</h3><SpaceStyled /> <FontAwesomeIcon icon={faArrowLeft}/>
		</Item>
	)
}

export default ItemMenu
