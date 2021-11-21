import React from 'react'

import MainSection from '../../shared/components/MainSeaction'
import { Container } from '../../shared/utils'
import { Hero, HeroTitle, HeroDescription, SocialMedia, MediaIcon } from './Home.styles'

import Photo from '../../img/Perfil_400x400.jpg'
import { faTwitterSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Home = () => {

	const socialMediaIcons = [
		faTwitterSquare,
		faLinkedin,
		faGithubSquare
	]

	return (
		<>
			<MainSection isHome>
				<Container>
					<Hero>
						<HeroTitle className="overflow--hidden">
							<h1 className="slideUp">Hi i&apos;m Mario Quirós Luna</h1>
							<HeroDescription className="slideUp delay-2">
								<h3>Software developer</h3>
								<h3>Web technologies are my passion</h3>
							</HeroDescription>
						</HeroTitle>
						<img src={Photo} alt="heroImage" className="FadeIn" />
					</Hero>
					<SocialMedia>
						{
							socialMediaIcons.map((icon, index) => <MediaIcon key={index} icon={icon}/> )
						}
					</SocialMedia>
				</Container>
			</MainSection>
		</>
	)
}

export default Home
