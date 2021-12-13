import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { MenuContextProvider } from '../Context/MenuContext'
import { StateContextProvider } from '../Context/AppContext'

import PageWrapper from '../Pages/PageWrapper'
import Home from '../Pages/Home/Home'
import Portfolio from '../Pages/Portfolio/Portfolio'
import PortfolioDetails from '../Pages/PortfolioDetails/PortfolioDetails'
import Blog from '../Pages/Blog/Blog'
import About from '../Pages/About/About'

import theme from '../shared/theme'
import GlobalStyle from '../shared/GlobalStyle'

function App() {

	return (
		<ThemeProvider theme={theme}>
			<StateContextProvider>
				<MenuContextProvider>
					<BrowserRouter>
						<GlobalStyle />
						<Routes>
							<Route path='/' element={ 
								<PageWrapper component={
									<Home />
								} isHome />					
							} />
							<Route path='/portfolio' element={
								<PageWrapper component={
									<Portfolio />
								} /> 
							} />
							<Route path='/portfolio/:projectDetail' element={
								<PageWrapper component={
									<PortfolioDetails />
								} goBack /> 
							} />
							<Route path='/blog' element={
								<PageWrapper component={
									<Blog />
								} /> 
							} />
							<Route path='/about' element={
								<PageWrapper component={
									<About />
								} /> 
							} />
							<Route path='*' element={
								<Navigate to="/"/>
							} />
						</Routes>
					</BrowserRouter>
				</MenuContextProvider>
			</StateContextProvider>
		</ThemeProvider>
	)
}

export default App
