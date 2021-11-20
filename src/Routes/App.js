import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Home from '../Pages/Home'
import Portfolio from '../Pages/Portfolio'
import Blog from '../Pages/Blog'
import About from '../Pages/About'

import theme from '../shared/theme'
import GlobalStyle from '../shared/GlobalStyle'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<GlobalStyle />
				<Routes>
					<Route path='/' element={ <Home /> } />
					<Route path='portfolio' element={ <Portfolio /> } />
					<Route path='blog' element={ <Blog /> } />
					<Route path='about' element={ <About /> } />
					<Route path='*' element={ <main> NotFound </main> } />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default App
