import React from 'react'
import { Content, Item, Section } from './StackTechnologies.styles'

import LogoHtml from '../../img/Icons/html.png'
import LogoCss from '../../img/Icons/css-3.png'
import LogoPhp from '../../img/Icons/php.png'
import { IconStyled } from '../../shared/utils'

const StackTechnologies = () => {

	const abilities = [
		{ tag:'Autodidact', icon: '' },
		{ tag:'Leadership', icon: '' },
		{ tag:'Teamwork', icon: '' },
		{ tag:'Communication', icon: '' },
		{ tag:'Collaborative', icon: '' },
		{ tag:'Enthusiastic', icon: '' },
		{ tag:'Empathic', icon: '' }
	]

	const PrimaryTechnologies = [
		{ tag: 'HTML', icon: LogoHtml },
		{ tag: 'CSS', icon: LogoCss },
		{ tag: 'Javascript', icon: '' },
		{ tag: 'Java', icon: '' },
		{ tag: 'PHP', icon: LogoPhp },
		{ tag: 'C#', icon: '' }
	]

	const SecondaryTechnology = [
		{ tag: 'React', icon: '' },
		{ tag: 'Styled-components', icon: '' },
		{ tag: 'Bootstrap', icon: '' },
		{ tag: 'Node', icon: '' },
		{ tag: 'Express', icon: '' },
		{ tag: '.Net', icon: '' }
	]

	const DataBaseTechnology = [ 
		{ tag: 'MySQL', icon: '' },
		{ tag: 'MSSQL', icon: '' },
		{ tag: 'Mongo', icon: '' }
	]

	return (
		<div>
			<Section>
				<h2>My abilities</h2>
				{
					abilities.map((ability) => {
						return (
							<Item key={ability.tag}>
								<Content>
									<div>
										<h5>{ability.tag}</h5>
									</div>
									<IconStyled>
										<img src='' alt="" />
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
					PrimaryTechnologies.map((technology) => {
						return (
							<Item key={technology.tag}>
								<Content>
									<div>
										<h5>{technology.tag}</h5>
									</div>
									<IconStyled>
										<img src={technology.icon} alt="" />
									</IconStyled>
								</Content>
							</Item>	
						)
					})
				}
				<h4>Frameworks and libraries</h4>
				{
					SecondaryTechnology.map((technology) => {
						return (
							<Item key={technology.tag}>
								<Content>
									<div>
										<h5>{technology.tag}</h5>
									</div>
									<IconStyled>
										<img src={technology.icon} alt="" />
									</IconStyled>
								</Content>
							</Item>	
						)
					})
				}
				<h4>Database</h4>
				{
					DataBaseTechnology.map((technology) => {
						return (
							<Item key={technology.tag}>
								<Content>
									<div>
										<h5>{technology.tag}</h5>
									</div>
									<IconStyled>
										<img src={technology.icon} alt="" />
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
