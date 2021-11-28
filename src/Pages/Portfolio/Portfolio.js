import React from 'react'
import Gallery from '../../Components/Gallery/Gallery'
import { Container } from '../../shared/utils'

const Portfolio = () => {

	const projects = [
		{
			nameProject: 'Primero',
			image: 'https://user-images.githubusercontent.com/37676736/130338393-c4d12293-eb38-4731-9ae9-173331b2befd.png',
			technologiesProject: []
		},
		{
			nameProject: 'Segundo',
			image: 'https://user-images.githubusercontent.com/37676736/130338393-c4d12293-eb38-4731-9ae9-173331b2befd.png',
			technologiesProject: []
		},
		{
			nameProject: 'Tercero',
			image: 'https://user-images.githubusercontent.com/37676736/130338393-c4d12293-eb38-4731-9ae9-173331b2befd.png',
			technologiesProject: []
		}
	]

	return (
		<>
			<main>
				<Container className="fadeIn">
					<Gallery projects={projects} />
				</Container>
			</main>
		</>
	)
}

export default Portfolio