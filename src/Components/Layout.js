import React, { useContext } from 'react'
import MenuContext from '../Context/MenuContext'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Blur, Body, Content } from '../shared/utils'
import ChangeVisibility from '../shared/components/ChangeOpacity'

const Layout = (props) => {

	const { menu } = useContext(MenuContext)
	const { children, goBack } = props

	return (
		<>
			<ChangeVisibility component={
				<Blur className={menu ? 'slideLeft' : 'slideRight'} />
			}/>
			<Content>
				<Header goBack={goBack}/>
				<Body>
					{ children }
				</Body>
			</Content>
			<Footer />
		</>
	)
}

export default Layout
