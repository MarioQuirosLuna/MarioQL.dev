import React, { useContext } from 'react'
import { BtnLinkCV, Container, LinkStyled } from '../../shared/utils'
import { ContainerAbout, ContentExtras, HeaderPresentation, Item, ItemList, TabList, Titles } from './About.styles'

import StateContext from '../../Context/AppContext'

import TabBar from './AboutContext'
import TabPanel from './TabPanel'
import Tab from './Tab'

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
						<img src={ state.author.image } alt={ state.author.name } className="FadeIn" />
					</div>
				</HeaderPresentation>
				<BtnLinkCV href="" download>
					Download CV
				</BtnLinkCV>
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
									<b><u>¿Who I am?</u></b>🤔
								</p>
								<p>{state.author.whoIam}</p>
								<p>{state.author.interests}</p>
								<p>
									<b><u>Studies</u></b>📘
								</p>
								<p>{state.author.studies}</p>
								<p>
									<b><u>Extra Certifications and Courses</u></b>📝
								</p>
								{
									state.author.certifications?.map(certification => {
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
												<img src={ability.icon} alt={ability.tag} />
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
									state.stack.technologies.map((ability) => {
										return (
											<Item key={ability.tag}>
												<img src={ability.icon} alt={ability.tag} />
												<p>{ability.tag}</p>
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
