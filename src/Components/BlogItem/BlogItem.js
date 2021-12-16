import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import useTranslation from '../../Hooks/useTranslation'
import limitCharacter from '../../helpers/limitCharacter'

import {
	ContainerItem,
	ContainerTagCategory,
	TagCategory
} from '../../shared/utils'

import { ItemContent } from './BlogItem.styles'

const BlogItem = ({ post }) => {

	const staticData = useTranslation()
	const dateOptions = {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
		timeZone: 'UTC',
	}
    
	return (
		<ContainerItem>
			<ItemContent>
				<Link to={`/blog/${post.document}`}>
					<h2><u>{post.title}</u></h2>
				</Link>
				<span className="date">
					{new Date(post.date).toLocaleDateString('en-US', dateOptions)}
				</span>
				<p>{limitCharacter(post.description,0,500)}</p>
				<span className="author">{staticData.Author}: {post.author}</span>
				<span className="timeReading">{staticData.TimeReading}: {post.timeReading}</span>
				<ContainerTagCategory>
					{post.tags?.map((tag,i) => (
						<TagCategory key={tag.name}>
							<span>#{tag.name}</span>
						</TagCategory>
					))}
				</ContainerTagCategory>
			</ItemContent>
		</ContainerItem>
	)
}

BlogItem.propTypes = {
	post: PropTypes.object.isRequired
}

export default BlogItem
