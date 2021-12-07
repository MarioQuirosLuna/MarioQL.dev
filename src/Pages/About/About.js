import React, { useContext } from 'react'
import { Container } from '../../shared/utils'
import { ContainerAbout, HeaderPresentation, Presentation, Titles } from './About.styles'

import StackTechnologies from '../../Components/StackTechnologies/StackTechnologies'
import StateContext from '../../Context/AppContext'

const About = () => {

	const { state } = useContext(StateContext)

	return (
		<>
			<main>
				<Container className="fadeIn">
					<ContainerAbout>
						<Presentation>
							<HeaderPresentation>
								<Titles>
									<h2>About</h2>
									<h1>{state.author.name}</h1>
									<h2>¿Who I am?</h2>
								</Titles>
								<div>
									<img src={ state.author.image } alt="heroImage" className="FadeIn" />
								</div>
							</HeaderPresentation>
							<p>{state.author.whoIam}</p>
							<p>{state.author.interests}</p>
						</Presentation>
						<StackTechnologies />	
						<p>{state.author.extra}</p>						
					</ContainerAbout>
				</Container>
			</main>
		</>
	)
}

export default About
