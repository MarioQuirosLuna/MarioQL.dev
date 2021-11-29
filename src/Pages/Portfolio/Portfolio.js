import React from 'react'
import Gallery from '../../Components/Gallery/Gallery'
import { Container } from '../../shared/utils'

const Portfolio = () => {

	return (
		<>
			<main>
				<Container className="fadeIn">
					<Gallery />
				</Container>
			</main>
		</>
	)
}

export default Portfolio