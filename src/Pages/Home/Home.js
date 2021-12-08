import React, { useContext } from 'react'

import { Container } from '../../shared/utils'
import { Hero, HeroTitle, HeroDescription, SubtitleBanner, TitleBanner } from './Home.styles'

import Typing from '../../shared/components/Typing'
import StateContext from '../../Context/AppContext'
import { Cube } from '../../shared/components/BgAnimation.styles'

const Home = () => {
	const { state } = useContext(StateContext)

	return (
		<Container className="fadeIn">
			<Hero>
				<HeroTitle className="overflow--hidden">		
					<SubtitleBanner>¡Hi! i&apos;m,</SubtitleBanner>
					<TitleBanner>{ state.author.name }</TitleBanner>
					<HeroDescription>
						<Typing messages={state.author.phrases} />
					</HeroDescription>
				</HeroTitle>	
				<Cube/><Cube/><Cube/><Cube/><Cube/><Cube/>					
			</Hero>
		</Container>
	)
}

export default Home
