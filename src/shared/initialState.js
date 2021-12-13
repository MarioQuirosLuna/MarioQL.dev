/* eslint-disable import/no-anonymous-default-export */
import Author from '../Data/Author'
import Stack from '../Data/Stack'
import Projects from '../Data/ProjectsData'

const initialState = {
	author: Author,
	stack: Stack,
	projects: Projects,
	posts: []
}

export default initialState