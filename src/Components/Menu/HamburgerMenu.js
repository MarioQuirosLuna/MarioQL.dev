import React from 'react'
import { MenuContainer, MenuItem } from './HamburguerMenu.styled'
import ItemMenu from './ItemMenu'

const HamburgerMenu = (props) => {
	const optionsMenu = [
		{ url: '/', label: 'Home' },
		{ url: 'portfolio', label: 'Portfolio' },
		{ url: 'blog', label: 'Blog' },
		{ url: 'about', label: 'About' }
	]

	return (
		<MenuContainer>	
			{
				optionsMenu.map(option => 
					<MenuItem key={option.url}>
						<ItemMenu key={option.url} url={option.url} label={option.label}/>
					</MenuItem> )
			}
		</MenuContainer>
	)
}

export default HamburgerMenu
