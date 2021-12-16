import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'

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
			<Helmet>
				<title>{`${state.author.name} | ${staticData.TitleHome}`}</title>
				<link rel="canonical" href="https://marioql-dev.vercel.app/" />
			</Helmet>
			<Hero>
				<HeroTitle className="overflow--hidden">		
					<SubtitleBanner>{staticData.HiIm}</SubtitleBanner>
					<u><TitleBanner>{ state.author.name }</TitleBanner></u>
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
