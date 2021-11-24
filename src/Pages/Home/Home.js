import React from 'react'

import { Container } from '../../shared/utils'
import { Hero, HeroTitle, HeroDescription, SocialMedia, MediaIcon } from './Home.styles'

import Photo from '../../img/Profile_400x400.jpg'
import { faTwitterSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Typing from '../../shared/components/Typing'

const Home = () => {

	const socialMediaIcons = [
		{ 'icon': faTwitterSquare, 'url':'https://twitter.com/MarioQuirosL' },
		{ 'icon': faLinkedin, 'url':'https://www.linkedin.com/in/mario-quir%C3%B3s-luna-Dev-b99050206/' },
		{ 'icon': faGithubSquare, 'url':'https://github.com/MarioQuirosLuna' }
	]

	return (
		<>
			<main>
				<Container>					
					<Hero>
						<HeroTitle className="overflow--hidden">		
							<h1>Hi i&apos;m Mario Quir&oacute;s Luna</h1>
							<HeroDescription className="">		
								<Typing 
									messages={[
										'Software developer',
										'I love web technologies',
										'Responsive web design',
										'I like programming'
									]} />								
							</HeroDescription>
						</HeroTitle>
						<img src={Photo} alt="heroImage" className="FadeIn" />
					</Hero>
					<SocialMedia className={'fadeIn duration-4 delay-2'}> 
						{
							socialMediaIcons.map((icon, index) => (
								<a key={icon.url} href={icon.url} target="_blank" rel="noreferrer" >
									<MediaIcon key={index} icon={icon.icon}/>
								</a> )
							)
						}
					</SocialMedia>
				</Container>
			</main>
		</>
	)
}

export default Home
