import React, { useContext } from 'react'

import StateContext from '../../Context/AppContext'
import useTranslation from '../../Hooks/useTranslation'

import Typing from '../../shared/components/Typing'

import { Container } from '../../shared/utils'
import { Cube } from '../../shared/components/BgAnimation.styles'
import { 
	Hero,
	HeroTitle,
	HeroDescription,
	SubtitleBanner,
	TitleBanner 
} from './Home.styles'

const Home = () => {
	const { state } = useContext(StateContext)
	const staticData = useTranslation()
	
	return (
		<Container className="fadeIn">
			<Hero>
				<HeroTitle className="overflow--hidden">		
					<SubtitleBanner>{staticData.HiIm}</SubtitleBanner>
					<TitleBanner><u>{ state.author.name }</u></TitleBanner>
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
