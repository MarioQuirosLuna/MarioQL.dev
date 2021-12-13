import React from 'react'
import PropTypes from 'prop-types'

import { ImgContainer } from './Portfolio.styles'
import { Image } from '../../shared/utils'

const ImagePortfolio = ({ src, alt}) => {
	return (
		<ImgContainer>
			<Image src={src} alt={alt} />
		</ImgContainer>
	)
}

ImagePortfolio.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired
}

export default ImagePortfolio
