import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'

import StateContext from '../../Context/AppContext'
import useTranslation from '../../Hooks/useTranslation'

import TabBar from '../../Context/AboutContext'
import TabPanel from '../../Components/TabPanel/TabPanel'
import Tab from '../../Components/Tab/Tab'

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
	const staticData = useTranslation()

	return (
		<Container className="fadeIn">
			<Helmet>
				<title>{`${state.author.name} | ${staticData.TitleAbout}`}</title>
				<link rel="canonical" href="https://marioql-dev.vercel.app/" />
			</Helmet>
			<ContainerAbout>
				<HeaderPresentation>
					<Titles>
						<p>{staticData.About}</p>
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
				<BtnLink href="/cvMarioQuirósLuna.pdf" download>
					{staticData.DownloadCV}
				</BtnLink>
				<TabBar tab="Profile">
					{staticData.Profile && staticData.SoftSkills && staticData.Technologies && 
						<TabList>
							<Tab tabTitle="Profile">{staticData.Profile}</Tab>
							<Tab tabTitle="SoftSkills">{staticData.SoftSkills}</Tab>
							<Tab tabTitle="Technologies">{staticData.Technologies}</Tab>
						</TabList>
					}
					<>
						<TabPanel whenActive="Profile">
							<div className="fadeIn">
								<p>
									<u>{staticData.WhoIam}</u>🤔
								</p>
								<p>{state.author.whoIam}</p>
								<p>{state.author.interests}</p>
								<p>
									<u>{staticData.Studies}</u>📘
								</p>
								<p>{state.author.studies}</p>
								<p>
									<u>{staticData.ExtraCertificationsCourses}</u>📝
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
