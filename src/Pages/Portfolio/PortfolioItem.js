import React from 'react'
import PropTypes from 'prop-types'

import ImagePortfolio from './ImagePortfolio'
import TextPortfolio from './TextPortfolio'

import { ContainerItem } from './Portfolio.styles'

const PortfolioItem = ({ project, align }) => {

	return (
		<ContainerItem>
			{align % 2 ===0 && window.screen.width>1023 ? 
				<>
					<TextPortfolio 
						nameProject={project.nameProject} 
						description={project.description}
						liveUrl={project.liveUrl}
						repository={project.repository}
					/>
					<ImagePortfolio 
						src={project.images[0].image}
						alt={project.nameProject}
					/>
				</>:<>										
					<ImagePortfolio
						src={project.images[0].image}
						alt={project.nameProject}
					/>
					<TextPortfolio 
						nameProject={project.nameProject} 
						description={project.description}
						liveUrl={project.liveUrl}
						repository={project.repository}
					/>
				</>
			}
		</ContainerItem>
		
	)
}

PortfolioItem.propTypes = {
	project: PropTypes.object.isRequired,
	align: PropTypes.number.isRequired
}

export default PortfolioItem
