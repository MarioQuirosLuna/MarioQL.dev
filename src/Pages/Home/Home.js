import React, { useContext } from 'react'

import { Container } from '../../shared/utils'
import { Hero, HeroTitle, HeroDescription } from './Home.styles'

import Typing from '../../shared/components/Typing'
import StateContext from '../../Context/AppContext'

const Home = () => {
	const { state } = useContext(StateContext)

	return (
		<>
			<main>
				<Container className="fadeIn">
					<Hero>
						<HeroTitle className="overflow--hidden">		
							
							<h1>
								<span>Hi i&apos;m</span><br/>{ state.author.name }
							</h1>
							<HeroDescription>
								<Typing messages={state.author.phrases} />
							</HeroDescription>
						</HeroTitle>						
					</Hero>
				</Container>
			</main>
		</>
	)
}

export default Home
