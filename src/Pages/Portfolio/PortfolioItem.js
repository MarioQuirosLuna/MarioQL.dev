import React from 'react'
import PropTypes from 'prop-types'

import { ButtonContainer, ContainerItem, Image, ItemText, TitleItem } from './Portfolio.styles'
import { BtnLink } from '../../shared/utils'

const PortfolioItem = ({ project }) => {
	return (
		<ContainerItem>
			<Image src={project.images[0].image} alt={project.nameProject} />
			<ItemText>
				<TitleItem>
					<h3>
						<b>{project.nameProject}</b>
					</h3>
				</TitleItem>
				<p>{project.description}</p>
				<ButtonContainer>
					<BtnLink href="" >
                        Details
					</BtnLink>
					<BtnLink href={project.liveUrl} target="_blank" rel="noopener" >
                        Online 
					</BtnLink>
					<BtnLink href={project.repository} target="_blank" rel="noopener" >
                        Code
					</BtnLink>
				</ButtonContainer>
			</ItemText>
		</ContainerItem>
	)
}

PortfolioItem.propTypes = {
	project: PropTypes.object.isRequired
}

export default PortfolioItem
