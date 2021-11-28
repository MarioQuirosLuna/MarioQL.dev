import React from 'react'

import { Container } from '../../shared/utils'
import { Hero, HeroTitle, HeroDescription } from './Home.styles'

import Photo from '../../img/Profile_400x400.jpg'

import Typing from '../../shared/components/Typing'

const Home = () => {

	const phrases = [
		'Software developer',
		'I love web technologies',
		'Responsive web design',
		'I like programming'
	]

	return (
		<>
			<main>
				<Container className="fadeIn">					
					<Hero>
						<HeroTitle className="overflow--hidden">		
							<h1>Hi i&apos;m Mario Quir&oacute;s Luna</h1>
							<HeroDescription className="">		
								<Typing messages={phrases} />								
							</HeroDescription>
						</HeroTitle>
						<img src={Photo} alt="heroImage" className="FadeIn" />
					</Hero>
				</Container>
			</main>
		</>
	)
}

export default Home
