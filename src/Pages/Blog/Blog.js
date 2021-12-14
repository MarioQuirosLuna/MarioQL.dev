import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'

import StateContext from '../../Context/AppContext'
import useTranslation from '../../Hooks/useTranslation'

import { Container } from '../../shared/utils'

const Blog = () => {
	const { state } = useContext(StateContext)
	const staticData = useTranslation()

	return (
		<Container className="fadeIn">
			<Helmet>
				<title>{`${state.author.name} | ${staticData.TitleBlogs}`}</title>
			</Helmet>
			Blog
		</Container>
	)
}

export default Blog
