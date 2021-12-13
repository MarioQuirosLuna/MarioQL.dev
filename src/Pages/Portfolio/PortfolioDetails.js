import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import StateContext from '../../Context/AppContext'

import scrollTop from '../../helpers/scrollTop'

import { Container, Item } from '../../shared/utils'

import { ContainerTechnologies, ContentDetails, Image, TextDetails, TitleItem } from './Portfolio.styles'

const PortfolioDetails = () => {

	const { state } = useContext(StateContext)
	const { projectDetail } = useParams()

	const project = state.projects.find((project) => project.nameProject === projectDetail)

	useEffect(() => {
		scrollTop()
	}, [])
	return (
		<Container className="fadeIn">
			<ContentDetails>
				<TitleItem>
					<p><u><b>{project.nameProject}</b></u></p>
				</TitleItem>
				<Image src={project.preview} alt="image_preview" /> 
				<TextDetails>
					<p><u>Description</u></p>
					<p>{project.description}</p>
					<p><u>Technologies</u></p>
					<ContainerTechnologies>
						{project.technologiesProject?.map((technology) =>  (
							<Item key={technology.tag}>
								<img src={technology.icon} alt={technology.tag} />
								<p>{technology.tag}</p>
							</Item>	
						))}
					</ContainerTechnologies>	
					<p><u>About</u></p>
					<p>{project.specifications}</p>	
				</TextDetails>
			</ContentDetails>
		</Container>
	)
}

export default PortfolioDetails
