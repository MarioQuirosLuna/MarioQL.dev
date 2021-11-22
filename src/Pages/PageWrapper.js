import React from 'react'
import Layout from '../Components/Layout'

const PageWrapper = (props) => {

	const { component: Component, isHome } = props

	return (
		<Layout isHome={isHome}>
			{Component}
		</Layout>
	)
}

export default PageWrapper
