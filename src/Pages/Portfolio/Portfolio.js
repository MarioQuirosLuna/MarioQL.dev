import React, { useContext } from 'react'

import StateContext from '../../Context/AppContext'

import { Container } from '../../shared/utils'

import PortfolioItem from './PortfolioItem'

import { Gallery } from './Portfolio.styles'

const Portfolio = () => {

	const { state } = useContext(StateContext)

	return (
		<Container className="fadeIn">
			<Gallery>
				<h3>Some of the personal projects that I have done</h3>
				{
					state.projects?.map((project) => (
						<PortfolioItem key={project.nameProject} project={project}/>
					))
				}
			</Gallery>
		</Container>
	)
}

export default Portfolio