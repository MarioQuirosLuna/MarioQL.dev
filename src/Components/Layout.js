import React, { useContext } from 'react'

import MenuContext from '../Context/MenuContext'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import ChangeVisibility from '../shared/components/ChangeOpacity'

import {
	Blur,
	Content
} from '../shared/utils'

const Layout = (props) => {

	const { menu } = useContext(MenuContext)
	const { children, goBack, translate } = props
	return (
		<>
			<ChangeVisibility component={
				<Blur className={menu ? 'slideLeft' : 'slideRight'} />
			}/>
			<Content>
				<Header goBack={goBack} translate={translate}/>
				<section>
					{ children }
				</section>
			</Content>
			<Footer />
		</>
	)
}

export default Layout
