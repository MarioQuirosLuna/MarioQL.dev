import React from 'react'
import Layout from '../Components/Layout'

const PageWrapper = (props) => {

	const { component: Component, isHome, goBack } = props

	return (
		<Layout isHome={isHome} goBack={goBack}>
			{Component}
		</Layout>
	)
}

export default PageWrapper
