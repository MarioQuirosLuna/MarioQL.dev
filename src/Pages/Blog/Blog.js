import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'

import StateContext from '../../Context/AppContext'
import useTranslation from '../../Hooks/useTranslation'

import BlogItem from '../../Components/BlogItem/BlogItem'

import { Container, TitleItem } from '../../shared/utils'

import { ContainerBlog, TitleContainer } from './Blog.styles'

const Blog = () => {
	const { state } = useContext(StateContext)
	const staticData = useTranslation()

	return (
		<Container className="fadeIn">
			<Helmet>
				<title>{`${state.author.name} | ${staticData.TitleBlogs}`}</title>
				<link rel="canonical" href="https://marioql-dev.vercel.app/" />
			</Helmet>
			<TitleContainer>
				<TitleItem>
					<h1>{staticData.TitleBlogs}</h1>
					<p>{staticData.DescriptionBlogs}</p>
				</TitleItem>
			</TitleContainer>
			<ContainerBlog className="fadeIn delay-5">
				{state.posts?.map((post) => 
					<BlogItem key={post.document} post={post}/>)
				}
			</ContainerBlog>
		</Container>
	)
}

export default Blog
