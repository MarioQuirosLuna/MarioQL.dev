import React from 'react'
import { Container } from '../../shared/utils'
import { ContainerAbout, Presentation } from './About.styles'

import StackTechnologies from '../../Components/StackTechnologies/StackTechnologies'

const About = () => {

	return (
		<>
			<main>
				<Container>
					<ContainerAbout>
						<Presentation>
							<h2>About</h2>
							<h1>Mario Quir&oacute;s Luna</h1>
							<h2>¿Who I am?</h2>
							<p>
								Costa Rican software developer with experience working on personal projects. I am characterized by wanting to obtain a lot of knowledge of the things that I like, organized, self-taught, passionate about programming, technology and video games.							
							</p>
							<p>
								With great interest in finding challenges, working in teams of positive people and learning many things.
							</p>
						</Presentation>
						<StackTechnologies />	
						<p>Wanting to learn many more tools and technologies</p>						
					</ContainerAbout>
				</Container>
			</main>
		</>
	)
}

export default About
