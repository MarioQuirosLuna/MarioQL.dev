import React from 'react'

import Layout from '../Components/Layout'

const PageWrapper = ({ component: Component, isHome, goBack }) => {

	return (
		<Layout isHome={isHome} goBack={goBack}>
			{Component}
		</Layout>
	)
}

export default PageWrapper
