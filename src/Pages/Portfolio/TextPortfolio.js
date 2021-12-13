import React from 'react'
import PropTypes from 'prop-types'

import ContainerButtons from '../../Components/ContainerButtons/ContainerButtons'

import { ItemText } from './Portfolio.styles'
import { TitleItem } from '../../shared/utils'


const TextPortfolio = ({ nameProject, description, liveUrl, repository }) => {
	return (
		<ItemText>
			<TitleItem>
				<h3>
					<b>{nameProject}</b>
				</h3>
			</TitleItem>
			<p>{description}</p>
			<ContainerButtons 
				nameProject={nameProject}
				liveUrl={liveUrl}
				repository={repository}
			/>
		</ItemText>
	)
}

TextPortfolio.propTypes = {
	nameProject: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	liveUrl: PropTypes.string.isRequired,
	repository: PropTypes.string.isRequired
}

export default TextPortfolio
