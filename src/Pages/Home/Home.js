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
							<h1>Hi i&apos;m { state.author.name }</h1>
							<HeroDescription className="">
								<Typing messages={state.author.phrases} />
							</HeroDescription>
						</HeroTitle>
						<img src={ state.author.image } alt="heroImage" className="FadeIn" />
					</Hero>
				</Container>
			</main>
		</>
	)
}

export default Home
