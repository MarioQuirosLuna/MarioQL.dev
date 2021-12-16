import React, { useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import MenuContext from '../../Context/MenuContext'
import TranslationContext from '../../Context/TranslationContext'

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

const Header = ({ goBack, translate }) => {
	const { menu, setMenu } = useContext(MenuContext)
	const { language, setLanguage } = useContext(TranslationContext)
	const { header, background } = useScroll()

	const navigate = useNavigate()
	const { pathname } = useLocation()

	const handleClick = () => {
		setMenu(!menu)
		document.getElementById('body').classList.toggle('overflow--hidden')
	}

	const handleGoBack = () => {
		const isPortfolio = pathname.includes('/portfolio')
		const isBlog = pathname.includes('/blog')
		
		if (isPortfolio) return navigate('/portfolio')
		if(isBlog) return navigate('/blog')
	}

	const handleGoHome = () => {
		navigate('/')
	}

	const changeLanguage = () => {
		if(language === 'en'){
			setLanguage('es')
		}else{
			setLanguage('en')
		}
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
							<img
								src="https://res.cloudinary.com/dusx4zdpz/image/upload/v1639432893/portfolio/LogoMQL.dev_khumu1.png"
								alt="Logo"
								loading="lazy"
								width="1532"
								height="530"
							/>
						</GoBackBtn>
					)}					
			</LogoContainer>
			<NavbarButton className={header ? 'header--visible' : ''}>
				{translate &&
					<TranslateBtn className='fadeIn' onClick={() => changeLanguage()}>
						{language === 'en' ?				
							<Image							
								src="https://res.cloudinary.com/dusx4zdpz/image/upload/v1639430396/portfolio/espana_mskndi.png"
								alt="Traducir a Ingles"
								loading="lazy"
								width='32'
								height='32'
							/>
							:
							<Image
								src="https://res.cloudinary.com/dusx4zdpz/image/upload/v1639430396/portfolio/estados-unidos_y0z3kh.png"
								alt="Translate Spanish"
								loading="lazy"
								width='32'
								height='32'
							/>
						}
					</TranslateBtn>
				}
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
