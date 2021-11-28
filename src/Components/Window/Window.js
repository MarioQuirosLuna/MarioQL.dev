import React from 'react'
import { IconStyled } from '../../shared/utils'
import { ContentContainer, Technologies, WindowBar, WindowContainer, WindowScreen } from './Window.styles'

const Window = (props) => {

	const { nameProject='Name Project Example', images, technologiesProject = [] } = props

	return (
		<ContentContainer>
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
					<span>{nameProject}</span>
				</WindowBar>
				<WindowScreen>
					<img src={images} alt="alt" />
				</WindowScreen>
				<Technologies>
					{
						technologiesProject 
						&& technologiesProject.map((technology)=> {
							return (
								<IconStyled key={technology.icon}>
									<img src={technology.icon} alt={technology.icon} />
								</IconStyled>
							)
						})
					}
				</Technologies>
			</WindowContainer>			
		</ContentContainer>
	)
}

export default Window
