/* eslint-disable import/no-anonymous-default-export */

const projects = require('../Data/ProjectsData.json')
const author = require('../Data/Author.json')
const stack = require('../Data/Stack.json')

export default {
	author: author,
	stack: stack,
	projects: projects,
	posts: []
}