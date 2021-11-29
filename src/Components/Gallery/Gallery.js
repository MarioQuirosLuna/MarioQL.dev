import React, { useContext } from 'react'
import StateContext from '../../Context/AppContext'
import Window from '../Window/Window'
import { ContainerGallery, ContainerProjects } from './Gallery.styles'

const Gallery = () => {

	const { state } = useContext(StateContext)

	return (
		<ContainerGallery>
			<h1>Some of the personal projects that I have done</h1>
			<ContainerProjects className="fadeIn delay-6">
				{
					state.projects
					&& state.projects.map((project) => {
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
