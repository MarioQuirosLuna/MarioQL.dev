import React from 'react'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Item, SpaceStyled } from './HamburgerMenu.styled'

const ItemMenu = (props) => {

	const { url, label } = props

	return (
		<Item to={url} className={'slideLeft duration-5 delay-1'}>{ label }<SpaceStyled /> <FontAwesomeIcon icon={faArrowLeft}/></Item>
	)
}

export default ItemMenu
