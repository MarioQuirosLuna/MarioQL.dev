import React, { useContext } from 'react'
import MenuContext from '../Context/MenuContext'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Blur } from '../shared/utils'

const Layout = (props) => {

	const { menu } = useContext(MenuContext)
	const { children, isHome } = props

	return (
		<div>
			{ menu && <Blur />}
			<Header />
			{children}
			{ !isHome && <Footer />}
		</div>
	)
}

export default Layout
