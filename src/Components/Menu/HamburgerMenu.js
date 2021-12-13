import React from 'react'

import ItemMenu from './ItemMenu'
import ChangeVisibility from '../../shared/components/ChangeOpacity'

import { MenuContainerStyled, MenuItemStyled } from './HamburgerMenu.styled'

const HamburgerMenu = (props) => {

	const { menu, handleClick } = props

	const optionsMenu = [
		{ url: '/', label: 'Home' },
		{ url: '/portfolio', label: 'Portfolio' },
		{ url: '/blog', label: 'Blog' },
		{ url: '/about', label: 'About' }
	]

	return (
		<ChangeVisibility component={
			<MenuContainerStyled>	
				{
					optionsMenu.map((option) => 
						<MenuItemStyled key={option.url}>
							<ItemMenu
								key={option.url}
								url={option.url}
								label={option.label}
								menu={menu}
								handleClick={handleClick}
							/>
						</MenuItemStyled> )
				}
			</MenuContainerStyled>
		}/>
	)
}

export default HamburgerMenu
