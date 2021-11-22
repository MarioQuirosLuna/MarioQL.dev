import React from 'react'

import { Container } from '../../shared/utils'
import { Hero, HeroTitle, HeroDescription, SocialMedia, MediaIcon } from './Home.styles'

import Photo from '../../img/Profile_400x400.jpg'
import { faTwitterSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Home = () => {

	const socialMediaIcons = [
		{ 'icon': faTwitterSquare, 'url':'https://twitter.com/MarioQuirosL' },
		{ 'icon': faLinkedin, 'url':'https://www.linkedin.com/in/mario-quir%C3%B3s-luna-Dev-b99050206/' },
		{ 'icon': faGithubSquare, 'url':'https://github.com/MarioQuirosLuna' }
	]

	return (
		<>
			<main isHome>
				<Container>
					<Hero>
						<HeroTitle className="overflow--hidden">
							<h1 className="slideUp">Hi i&apos;m Mario Quir&oacute;s Luna</h1>
							<HeroDescription className="slideUp delay-2">
								<h3>Software developer</h3>
								<h3>Web technologies are my passion</h3>
							</HeroDescription>
						</HeroTitle>
						<img src={Photo} alt="heroImage" className="FadeIn" />
					</Hero>
					<SocialMedia className={'fadeIn duration-4 delay-2'}>
						{
							socialMediaIcons.map((icon, index) => <a href={icon.url} target="_blank" rel="noreferrer" ><MediaIcon key={index} icon={icon.icon}/></a> )
						}
					</SocialMedia>
				</Container>
			</main>
		</>
	)
}

export default Home
