import React from 'react'
import HamburgerMenu from './HamburgerMenu'
import Logo from '../img/logo.png'

const Header = () => {

	return (
		<div>
			<img src={Logo} alt="logo"/>
			<HamburgerMenu />
		</div>
	)
}

export default Header
