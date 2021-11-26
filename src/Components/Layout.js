import React, { useContext } from 'react'
import MenuContext from '../Context/MenuContext'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Blur } from '../shared/utils'
import ChangeVisibility from '../shared/components/ChangeOpacity'

const Layout = (props) => {

	const { menu } = useContext(MenuContext)
	const { children } = props

	return (
		<div>
			<ChangeVisibility component={
				<Blur className={menu ? 'slideLeft' : 'slideRight'} />
			}/>
			<Header />
			{ children }
			<Footer />
		</div>
	)
}

export default Layout
