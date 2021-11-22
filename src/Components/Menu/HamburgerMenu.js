import React from 'react'
import { MenuContainerStyled, MenuItemStyled } from './HamburgerMenu.styled'
import ItemMenu from './ItemMenu'

const HamburgerMenu = (props) => {
	const optionsMenu = [
		{ url: '/', label: 'Home' },
		{ url: 'portfolio', label: 'Portfolio' },
		{ url: 'blog', label: 'Blog' },
		{ url: 'about', label: 'About' }
	]

	return (
		<MenuContainerStyled>	
			{
				optionsMenu.map((option, index) => 
					<MenuItemStyled key={option.url}>
						<ItemMenu key={option.url} url={option.url} label={option.label} index={(index+2 > 8) ? 8 : index+2} />
					</MenuItemStyled> )
			}
		</MenuContainerStyled>
	)
}

export default HamburgerMenu
