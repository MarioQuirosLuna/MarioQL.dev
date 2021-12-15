import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'

import StateContext from '../../Context/AppContext'
import useTranslation from '../../Hooks/useTranslation'

import PortfolioItem from '../../Components/PortfolioItem/PortfolioItem'

import { Container } from '../../shared/utils'
import { Gallery } from './Portfolio.styles'

const Portfolio = () => {

	const { state } = useContext(StateContext)
	const staticData = useTranslation()

	return (
		<Container className="fadeIn">
			<Helmet>
				<title>{`${state.author.name} | ${staticData.TitleProjects}`}</title>
				<link rel="canonical" href="https://marioql-dev.vercel.app/" />
			</Helmet>
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