import React, { useContext } from 'react'

import StateContext from '../../Context/AppContext'

import {
	faTwitterSquare,
	faGithubSquare,
	faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import {
	Container,
	ContainerFooter,
	Copyright,
	MediaIcon,
	SocialMedia
} from './Footer.styles'

const Footer = () => {

	const { state } = useContext(StateContext)

	const socialMediaIcons = [
		{ 'icon': faTwitterSquare, 'url': state.author.Social.twitter.url },
		{ 'icon': faLinkedin, 'url': state.author.Social.linkedin.url },
		{ 'icon': faGithubSquare, 'url': state.author.Social.github.url }
	]

	return (
		<ContainerFooter className="fadeIn">
			<Container>
				<SocialMedia className={'fadeIn duration-4 delay-2'}> 
					{
						socialMediaIcons.map((icon, index) => (
							<a key={icon.url} href={icon.url} target="_blank" rel="noreferrer" >
								<MediaIcon key={index} icon={icon.icon}/>
							</a> )
						)
					}
				</SocialMedia>
				<Copyright>
                    &copy; {new Date().getFullYear()} {state.author.name}
				</Copyright>
			</Container>
		</ContainerFooter>
	)
}

export default Footer
