import React, { useContext } from 'react'
import { Content, Item, Section } from './StackTechnologies.styles'

import { IconStyled } from '../../shared/utils'
import StateContext from '../../Context/AppContext'

const StackTechnologies = () => {

	const { state } = useContext(StateContext)

	return (
		<div>
			<Section>
				<h2>My abilities</h2>
				{
					state.stack.abilities.map((ability) => {
						return (
							<Item key={ability.tag}>
								<Content>
									<div>
										<h5>{ability.tag}</h5>
									</div>
									<IconStyled>
										<img src={ability.icon} alt="icon" />
									</IconStyled>
								</Content>
							</Item>
						)
					})
				}	
			</Section>
			<Section>
				<h2>My Stack</h2>
				<h4>Languages</h4>
				{
					state.stack.primaryTechnologies.map((technology) => {
						return (
							<Item key={technology.tag}>
								<Content>
									<div>
										<h5>{technology.tag}</h5>
									</div>
									<IconStyled>
										<img src={technology.icon} alt="icon" />
									</IconStyled>
								</Content>
							</Item>	
						)
					})
				}
				<h4>Frameworks and libraries</h4>
				{
					state.stack.secondaryTechnologies.map((technology) => {
						return (
							<Item key={technology.tag}>
								<Content>
									<div>
										<h5>{technology.tag}</h5>
									</div>
									<IconStyled>
										<img src={technology.icon} alt="icon" />
									</IconStyled>
								</Content>
							</Item>	
						)
					})
				}
				<h4>Database</h4>
				{
					state.stack.dataBaseTechnologies.map((technology) => {
						return (
							<Item key={technology.tag}>
								<Content>
									<div>
										<h5>{technology.tag}</h5>
									</div>
									<IconStyled>
										<img src={technology.icon} alt="icon" />
									</IconStyled>
								</Content>
							</Item>	
						)
					})
				}
			</Section>
		</div>
	)
}

export default StackTechnologies
