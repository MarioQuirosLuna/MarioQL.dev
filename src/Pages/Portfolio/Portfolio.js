import React, { useContext } from 'react'

import StateContext from '../../Context/AppContext'

import PortfolioItem from './PortfolioItem'

import { Container } from '../../shared/utils'
import { Gallery } from './Portfolio.styles'

const Portfolio = () => {

	const { state } = useContext(StateContext)

	return (
		<Container className="fadeIn">
			<Gallery>
				<h3>
					<u>Some of the personal projects that I have done</u>
				</h3>
				{
					state.projects?.map((project, index) => (
						<PortfolioItem key={project.nameProject} project={project} align={index} />
					))
				}
			</Gallery>
		</Container>
	)
}

export default Portfolio