import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import StateContext from '../../Context/AppContext'
import useTranslation from '../../Hooks/useTranslation'

import ContainerButtons from '../../Components/ContainerButtons/ContainerButtons'

import scrollTop from '../../helpers/scrollTop'

import {
	Container,
	Image,
	Item,
	TitleItem
} from '../../shared/utils'
import {
	ContainerTechnologies,
	ContentDetails,
	TextDetails
} from './PortfolioDetails.styles'

const PortfolioDetails = () => {

	const { state } = useContext(StateContext)
	const staticData = useTranslation()
	const { slug } = useParams()

	const project = state.projects.find((project) => project.nameProject === slug)

	useEffect(() => {
		scrollTop()
	}, [])

	return (
		<Container className="fadeIn">
			<Helmet>
				<title>{`${state.author.name} | ${project.nameProject}`}</title>
			</Helmet>
			<ContentDetails>
				<TitleItem>
					<h1><u>{project.nameProject}</u></h1>
				</TitleItem>
				<Image src={project.preview} alt="image_preview" loading="lazy" /> 
				<ContainerButtons 
					nameProject={project.nameProject}
					liveUrl={project.liveUrl}
					repository={project.repository}
					isDetails
				/>
				<TextDetails>
					<p><u>{staticData.Description}</u></p>
					<p>{project.description}</p>
					<p><u>{staticData.Technologies}</u></p>
					<ContainerTechnologies>
						{project.technologiesProject?.map((technology) =>  (
							<Item key={technology.tag}>
								<img
									src={technology.icon}
									alt={technology.tag}
									loading="lazy"
									width="24"
									height="24"
								/>
								<p>{technology.tag}</p>
							</Item>	
						))}
					</ContainerTechnologies>	
					<p><u>{staticData.About}</u></p>
					<p>{project.specifications}</p>	
				</TextDetails>
			</ContentDetails>
		</Container>
	)
}

export default PortfolioDetails
