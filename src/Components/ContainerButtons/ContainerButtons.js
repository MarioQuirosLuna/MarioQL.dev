import React from 'react'
import PropTypes from 'prop-types'

import { BtnLink, BtnLinkReactRouter } from '../../shared/utils'
import { ButtonContainer } from './ContainerButtons.styles'

const ContainerButtons = ({ nameProject, liveUrl, repository, isDetails }) => {
	return (
		<ButtonContainer>
			{!isDetails &&
				<BtnLinkReactRouter to={`/portfolio/${nameProject}`} >
					Details
				</BtnLinkReactRouter>
			}
			{liveUrl &&
				<BtnLink href={liveUrl} target="_blank" rel="noopener" >
					Live preview
				</BtnLink>
			}
			<BtnLink href={repository} target="_blank" rel="noopener" >
                    Code
			</BtnLink>
		</ButtonContainer>
	)
}

ContainerButtons.protoTypes = {
	nameProject: PropTypes.string.isRequired,
	liveUrl: PropTypes.string.isRequired,
	repository: PropTypes.string.isRequired,
	isDetails: PropTypes.bool
}

export default ContainerButtons
