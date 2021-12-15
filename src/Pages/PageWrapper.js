import React from 'react'

import Layout from '../Components/Layout'

const PageWrapper = ({ component: Component, isHome, goBack, translate }) => {

	return (
		<Layout isHome={isHome} goBack={goBack} translate={translate}>
			{Component}
		</Layout>
	)
}

export default PageWrapper
