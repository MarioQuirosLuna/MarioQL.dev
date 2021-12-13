import React, { useContext } from 'react'

import StateContext from '../../Context/AppContext'

import TabBar from '../../Context/AboutContext'
import TabPanel from './TabPanel'
import Tab from './Tab'

import {
	BtnLink,
	Container,
	Item,
	LinkStyled
} from '../../shared/utils'
import {
	ContainerAbout,
	ContentExtras,
	HeaderPresentation,
	ItemList,
	TabList,
	Titles
} from './About.styles'

const About = () => {

	const { state } = useContext(StateContext)

	return (
		<Container className="fadeIn">
			<ContainerAbout>
				<HeaderPresentation>
					<Titles>
						<p>About</p>
						<h1>{state.author.name}🤓</h1>
					</Titles>
					<div>
						<img
							src={ state.author.image }
							alt={ state.author.name }
							className="FadeIn"
						/>
					</div>
				</HeaderPresentation>
				<BtnLink href="/cv-marioql.pdf" download>
					Download CV
				</BtnLink>
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
									<u>¿Who I am?</u>🤔
								</p>
								<p>{state.author.whoIam}</p>
								<p>{state.author.interests}</p>
								<p>
									<u>Studies</u>📘
								</p>
								<p>{state.author.studies}</p>
								<p>
									<u>Extra Certifications and Courses</u>📝
								</p>
								{
									state.author.Certifications?.map(certification => {
										return <ContentExtras key={certification.name}>
											<LinkStyled href={certification.url} target="_blank" rel="noreferrer" ><p>{certification.name}</p></LinkStyled>
											<b>&nbsp;-&nbsp;{certification.company}</b>
										</ContentExtras>

									})
								}
							</div>
						</TabPanel>
						<TabPanel whenActive="SoftSkills">
							<ItemList className="fadeIn">
								{
									state.stack.abilities?.map((ability) => {
										return (
											<Item key={ability.tag}>
												<img
													src={ability.icon}
													alt={ability.tag}
												/>
												<p>{ability.tag}</p>
											</Item>
										)
									})
								}
							</ItemList>
						</TabPanel>
						<TabPanel whenActive="Technologies">
							<ItemList className="fadeIn">
								{
									state.stack.technologies.map((technology) => {
										return (
											<Item key={technology.tag}>
												<img
													src={technology.icon}
													alt={technology.tag}
												/>
												<p>{technology.tag}</p>
											</Item>
										)
									})
								}
							</ItemList>
							<p className="fadeIn">{state.author.extra}</p>	
						</TabPanel>
					</>
				</TabBar>				
			</ContainerAbout>
		</Container>
	)
}

export default About
