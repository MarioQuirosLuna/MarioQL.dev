import { useEffect } from 'react'
import ReactGA from 'react-ga'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { MenuContextProvider } from '../Context/MenuContext'
import { StateContextProvider } from '../Context/AppContext'
import { TranslationContextProvider } from '../Context/TranslationContext'

import PageWrapper from '../Pages/PageWrapper'
import Home from '../Pages/Home/Home'
import Portfolio from '../Pages/Portfolio/Portfolio'
import PortfolioDetails from '../Pages/PortfolioDetails/PortfolioDetails'
import Blog from '../Pages/Blog/Blog'
import BlogPost from '../Pages/BlogPost/BlogPost'
import About from '../Pages/About/About'

import theme from '../shared/theme'
import GlobalStyle from '../shared/GlobalStyle'

function App() {
	
	useEffect(() => {
		ReactGA.initialize(process.env.REACT_APP_ID_GOOGLE_ANALYTICS)
		ReactGA.pageview(window.location.pathname + window.location.search)
	}, [])

	return (
		<ThemeProvider theme={theme}>
			<TranslationContextProvider>
				<StateContextProvider>
					<MenuContextProvider>
						<BrowserRouter>
							<GlobalStyle />
							<Routes>
								<Route path='/' element={ 
									<PageWrapper component={
										<Home />
									} isHome translate />					
								} />
								<Route path='/portfolio' element={
									<PageWrapper component={
										<Portfolio />
									} translate /> 
								} />
								<Route path='/portfolio/:slug' element={
									<PageWrapper component={
										<PortfolioDetails />
									} goBack translate/> 
								} />
								<Route path='/blog' element={
									<PageWrapper component={
										<Blog />
									} translate /> 
								} />
								<Route path='/blog/:slug' element={
									<PageWrapper component={
										<BlogPost />
									} goBack/> 
								} />
								<Route path='/about' element={
									<PageWrapper component={
										<About />
									} translate /> 
								} />
								<Route path='*' element={
									<Navigate to="/"/>
								} />
							</Routes>
						</BrowserRouter>
					</MenuContextProvider>
				</StateContextProvider>
			</TranslationContextProvider>
		</ThemeProvider>
	)
}

export default App
