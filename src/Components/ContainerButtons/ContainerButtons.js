import React from 'react'
import PropTypes from 'prop-types'

import useTranslation from '../../Hooks/useTranslation'

import { BtnLink, BtnLinkReactRouter } from '../../shared/utils'
import { ButtonContainer } from './ContainerButtons.styles'

const ContainerButtons = ({ slug, liveUrl, repository, isDetails }) => {
	const staticData = useTranslation()

	return (
		<ButtonContainer>
			{!isDetails &&
				<BtnLinkReactRouter to={`/portfolio/${slug}`} >
					{staticData.Details}
				</BtnLinkReactRouter>
			}
			{liveUrl &&
				<BtnLink href={liveUrl} target="_blank" rel="noopener" >
					{staticData.LivePreview}
				</BtnLink>
			}
			<BtnLink href={repository} target="_blank" rel="noopener" >
				{staticData.Code}
			</BtnLink>
		</ButtonContainer>
	)
}

ContainerButtons.protoTypes = {
	slug: PropTypes.string.isRequired,
	liveUrl: PropTypes.string.isRequired,
	repository: PropTypes.string.isRequired,
	isDetails: PropTypes.bool
}

export default ContainerButtons
