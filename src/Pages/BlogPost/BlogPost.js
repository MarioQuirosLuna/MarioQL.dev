import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Markdown from 'markdown-to-jsx'

import StateContext from '../../Context/AppContext'

import { Container } from '../../shared/utils'
import { ContainerPost } from './BlogPost.styles'


const BlogPost = () => {
	const { state } = useContext(StateContext)
	const [post, setPost] = useState('')
	const { slug } = useParams()

	useEffect(() => {
		import('../../Data/posts/'+ slug + '.mdx')
			.then(res => {
				fetch(res.default)
					.then(res => res.text())
					.then(res => setPost(res))
			})
			.catch(err => console.log(err))
	},[slug])

	return (
		<Container className="fadeIn">
			<Helmet>
				<title>{`${state.author.name} | ${slug}`}</title>
				<link rel="canonical" href="https://marioql-dev.vercel.app/" />
			</Helmet>
			<ContainerPost>
				<Markdown children={post}/>
			</ContainerPost>
		</Container>
	)
}

export default BlogPost
