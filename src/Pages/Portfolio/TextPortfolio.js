import React from 'react'
import PropTypes from 'prop-types'

import { ButtonContainer, ItemText } from './Portfolio.styles'
import { BtnLink, BtnLinkReactRouter, TitleItem } from '../../shared/utils'


const TextPortfolio = ({ nameProject, description, liveUrl, repository }) => {
	return (
		<ItemText>
			<TitleItem>
				<h3>
					<b>{nameProject}</b>
				</h3>
			</TitleItem>
			<p>{description}</p>
			<ButtonContainer>
				<BtnLinkReactRouter to={`/portfolio/${nameProject}`} >
                    Details
				</BtnLinkReactRouter>
				{liveUrl &&
					<BtnLink href={liveUrl} target="_blank" rel="noopener" >
						Online
					</BtnLink>
				}
				<BtnLink href={repository} target="_blank" rel="noopener" >
                    Code
				</BtnLink>
			</ButtonContainer>
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
