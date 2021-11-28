import React, { useContext } from 'react'
import MenuContext from '../../Context/MenuContext'
import useScroll from '../../Hooks/useScroll'

import HamburgerMenu from '../Menu/HamburgerMenu'

import { BurguerButton, HeaderBackground, MenuContainer, NavbarButton, NavbarMenu } from './Header.styles'

const Header = () => {
	const { menu, setMenu } = useContext(MenuContext)
	const { header, background } = useScroll()

	const handleClick = () => {
		setMenu(!menu)
		document.getElementById('body').classList.toggle('overflow--hidden')
	}
	  
	return (
		<>
			<HeaderBackground className={header ? 'header--visible' : ''} isDark={background}/>
			<div>
				<NavbarButton className={header ? 'header--visible' : ''}>
					<BurguerButton 
						onClick={handleClick} 
						onKeyPress={handleClick} 
						role='button'
						tabIndex='0'
						className={`fadeIn ${menu ? 'active' : ''}`}>
						<i /><i /><i /><i />		
					</BurguerButton>
				</NavbarButton>
			</div>
			<NavbarMenu menu={menu}>
				<MenuContainer className={menu ? 'slideLeft':'slideRight'} >
					<HamburgerMenu menu={menu} handleClick={handleClick} />
				</MenuContainer>
			</NavbarMenu>
		</>
	)
}

export default Header
