import React from 'react'
import { Copyright, MediaIcon, SocialMedia } from './Footer.styles'

import { faTwitterSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

	const socialMediaIcons = [
		{ 'icon': faTwitterSquare, 'url':'https://twitter.com/MarioQuirosL' },
		{ 'icon': faLinkedin, 'url':'https://www.linkedin.com/in/mario-quir%C3%B3s-luna-Dev-b99050206/' },
		{ 'icon': faGithubSquare, 'url':'https://github.com/MarioQuirosLuna' }
	]

	return (
		<>
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
                    &copy; {new Date().getFullYear()} Mario Quir&oacute;s Luna
			</Copyright>
		</>
	)
}

export default Footer
