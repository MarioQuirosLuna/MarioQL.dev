import React from 'react'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const ItemMenu = (props) => {

	const { url, label } = props

	return (
		<>
			<div>
				<Link to={url} >{ label } <FontAwesomeIcon icon={faArrowLeft}/></Link>
			</div>
		</>
	)
}

export default ItemMenu
