import React, { useContext } from 'react'

import StateContext from '../../Context/AppContext'
import useTranslation from '../../Hooks/useTranslation'

import PortfolioItem from './PortfolioItem'

import { Container } from '../../shared/utils'
import { Gallery } from './Portfolio.styles'

const Portfolio = () => {

	const { state } = useContext(StateContext)
	const staticData = useTranslation()

	return (
		<Container className="fadeIn">
			<Gallery>
				<h3>
					<u>{staticData.TitlePortfolio}</u>
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