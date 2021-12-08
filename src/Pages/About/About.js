import React, { useContext } from 'react'
import { Container } from '../../shared/utils'
import { ContainerAbout, HeaderPresentation, Item, Presentation, TabList, Titles } from './About.styles'

import StateContext from '../../Context/AppContext'

import TabBar from './AboutContext'
import TabPanel from './TabPanel'
import Tab from './Tab'

const About = () => {

	const { state } = useContext(StateContext)

	return (
		<Container className="fadeIn">
			<ContainerAbout>
				<Presentation>
					<HeaderPresentation>
						<Titles>
							<p>About</p>
							<h1>{state.author.name}</h1>
						</Titles>
						<div>
							<img src={ state.author.image } alt={ state.author.name } className="FadeIn" />
						</div>
					</HeaderPresentation>
					<TabBar tab="Profile">
						<TabList>
							<Tab tabTitle="Profile">Profile</Tab>
							<Tab tabTitle="SoftSkills">SoftSkills</Tab>
							<Tab tabTitle="Technologies">Technologies</Tab>
						</TabList>
						<>
							<TabPanel whenActive="Profile">
								<div className="fadeIn">
									<p>
										<b>¿Who I am?</b>
									</p>
									<p>{state.author.whoIam}</p>
									<p>{state.author.interests}</p>
								</div>
							</TabPanel>
							<TabPanel whenActive="SoftSkills">
								<div className="fadeIn">
									{
										state.stack.abilities.map((ability) => {
											return (
												<Item key={ability.tag}>
													<img src={ability.icon} alt={ability.tag} />
													{ability.tag}
												</Item>
											)
										})
									}
								</div>
							</TabPanel>
							<TabPanel whenActive="Technologies">
								<div className="fadeIn">
									{
										state.stack.technologies.map((ability) => {
											return (
												<Item key={ability.tag}>
													<img src={ability.icon} alt={ability.tag} />
													{ability.tag}
												</Item>
											)
										})
									}
								</div>
								<p>{state.author.extra}</p>	
							</TabPanel>
						</>
					</TabBar>
				</Presentation>					
			</ContainerAbout>
		</Container>
	)
}

export default About
