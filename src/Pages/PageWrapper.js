import React from 'react'
import Layout from '../Components/Layout'

const PageWrapper = (props) => {

	const { component: Component } = props

	return (
		<Layout >
			{Component}
		</Layout>
	)
}

export default PageWrapper
