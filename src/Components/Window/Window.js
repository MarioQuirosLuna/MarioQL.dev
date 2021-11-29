import React from 'react'
import { IconStyled } from '../../shared/utils'
import { Technologies, WindowBar, WindowContainer, WindowScreen } from './Window.styles'

const Window = (props) => {

	const { project } = props

	return (
		<WindowContainer>
			<WindowBar>
				<div>
					<svg width='10' height='10'>
						<circle cx='5' cy='5' r='5' fill='#FF5F57' />
					</svg>
					<svg width='10' height='10'>
						<circle cx='5' cy='5' r='5' fill='#FFBD2E' />
					</svg>
					<svg width='10' height='10'>
						<circle cx='5' cy='5' r='5' fill='#28CA41' />
					</svg>
				</div>
				<span>{project.nameProject}</span>
			</WindowBar>
			<WindowScreen>
				{
					<img src={project.images[0].image} alt={project.nameProject} />
				}
			</WindowScreen>
			<Technologies>
				{
					project.technologiesProject 
						&& project.technologiesProject.map((technology, index)=> {
							return (
								<IconStyled key={index + technology.icon}>
									<img src={technology.icon} alt={technology.icon} />
								</IconStyled>
							)
						})
				}
			</Technologies>
		</WindowContainer>			
	)
}

export default Window
