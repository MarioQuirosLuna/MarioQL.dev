import React from 'react'
import Window from '../Window/Window'
import { ContainerGallery, ContainerProjects } from './Gallery.styles'

const Gallery = (props) => {

	const { projects = [] } = props

	return (
		<ContainerGallery>
			<h1>Some of the personal projects that I have done</h1>
			<ContainerProjects className="fadeIn delay-6">
				{
					projects
					&& projects.map((project) => {
						return(
							<Window key={project.nameProject} project={project} />
						)
					})
				}
			</ContainerProjects>
		</ContainerGallery>
	)
}

export default Gallery
