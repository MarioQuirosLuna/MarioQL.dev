import React, { useContext, useEffect, useState } from 'react'

import StateContext from '../../Context/AppContext'
import { Item } from '../../shared/utils'

const PortfolioDetails = () => {

	const { state } = useContext(StateContext)
	const [project, setProject] = useState(null)

	const getElement = () => {
		let nameElement = window.location.href.split('/')
		setProject(state.projects.filter(project => project.nameProject === nameElement[nameElement.length - 1])[0])
	}

	useEffect(() => {
		getElement()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div>
			{project &&
				<div>
					<div>{project.nameProject}</div>
					<div>
						{
							project.images?.map((img) => {
								return (							
									<img key={img} src={img.image} alt="ImgPreview"/>
								)
							})
						}
					</div>
					<div>{project.description}</div>
					<div>
						{
							project.technologiesProject?.map((technology) => {
								return (
									<Item key={technology.tag}>
										<img src={technology.icon} alt={technology.tag} />
										<p>{technology.tag}</p>
									</Item>	
								)
							})
						}
					</div>
				</div>
			}
		</div>
	)
}

export default PortfolioDetails
