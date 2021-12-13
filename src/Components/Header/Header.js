import React, { useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import MenuContext from '../../Context/MenuContext'

import useScroll from '../../Hooks/useScroll'
import { Image } from '../../shared/utils'

import HamburgerMenu from '../Menu/HamburgerMenu'

import {
	BurgerButton,
	GoBackBtn,
	HeaderBackground,
	LogoContainer,
	MenuContainer,
	NavbarButton,
	NavbarMenu,
	TranslateBtn
} from './Header.styles'

const Header = ({ goBack }) => {
	const { menu, setMenu } = useContext(MenuContext)
	const { header, background } = useScroll()

	const navigate = useNavigate()
	const { pathname } = useLocation()

	const handleClick = () => {
		setMenu(!menu)
		document.getElementById('body').classList.toggle('overflow--hidden')
	}

	const handleGoBack = () => {
		const isPortfolio = pathname.includes('/portfolio')

		if (isPortfolio) {
			navigate('/portfolio')
		}
	}

	const handleGoHome = () => {
		navigate('/')
	}

	return (
		<>
			<HeaderBackground className={header ? 'header--visible' : ''} isDark={background}/>
			<LogoContainer className={header ? 'header--visible': ''}>
				{goBack ? 
					(
						<GoBackBtn
							onClick={handleGoBack}
							onKeyPress={handleGoBack}
							role='button'
							tabIndex='0'
							aria-label='Go Back'
							className='fadeIn'
						>Back
						</GoBackBtn>
					):(
						<GoBackBtn
							onClick={handleGoHome}
							onKeyPress={handleGoHome}
							role='button'
							tabIndex='0'
							aria-label='Go Home'
							className='fadeIn'
						>
							<img src="https://res.cloudinary.com/dusx4zdpz/image/upload/v1639432893/portfolio/LogoMQL.dev_khumu1.png" alt="Logo"/>
						</GoBackBtn>
					)}					
			</LogoContainer>
			<NavbarButton className={header ? 'header--visible' : ''}>
				<TranslateBtn className='fadeIn'>
					<Image
						src="https://res.cloudinary.com/dusx4zdpz/image/upload/v1639430396/portfolio/espana_mskndi.png"
						alt="Translate Spanish"
					/>
				</TranslateBtn>
				<BurgerButton 
					onClick={handleClick} 
					onKeyPress={handleClick} 
					role='button'
					tabIndex='0'
					className={`fadeIn ${menu ? 'active' : ''}`}>
					<i /><i /><i /><i />		
				</BurgerButton>
			</NavbarButton>
			<NavbarMenu menu={menu}>
				<MenuContainer className={menu ? 'slideLeft':'slideRight'} >
					<HamburgerMenu menu={menu} handleClick={handleClick} />
				</MenuContainer>
			</NavbarMenu>
		</>
	)
}

export default Header
