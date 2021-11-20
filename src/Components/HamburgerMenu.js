import React, { useState } from 'react'
import { faWindowClose, faBars } from '@fortawesome/free-solid-svg-icons'
import ItemMenu from './ItemMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HamburgerMenu = () => {
	const optionsMenu = [
		{ url: '/', label: 'Home' },
		{ url: 'portfolio', label: 'Portfolio' },
		{ url: 'blog', label: 'Blog' },
		{ url: 'about', label: 'About' }
	]

	const [visible, setVisible] = useState(false)

	return (
		<div>
			<div onClick={() => setVisible(!visible)}><FontAwesomeIcon icon={visible ? faWindowClose : faBars}/></div>
			<nav>
				{
					visible && optionsMenu.map(option => <ItemMenu key={option.url} url={option.url} label={option.label}/> )
				}
			</nav>
		</div>
	)
}

export default HamburgerMenu
