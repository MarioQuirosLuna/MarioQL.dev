const colors = {
	darks: [
		'rgb(19,6,45)',
		'rgba(19,6,45,1)',
		'#13062D'
	],
	purples: [
		'rgb(165,165,227)',
		'rgba(165,165,227,1)',
		'#A6A5E3'
	],
	greys: [
		'rgb(204,204,204)',
		'rgba(204,204,204,1)',
		'#CCCCCC'
	],
	whites: [
		'rgb(255, 255, 255)',
		'rgba(255, 255, 255, 1)',
		'#FFFFFF'
	],
	blacks: [
		'rgb(0, 0, 0)',
		'rgba(0, 0, 0, 1)',
		'#000000'
	]
}

const theme = {
	colors: {
		backgroundColor: colors.darks[0],
		foregroundColor: colors.purples[0],
		textColor:       colors.greys[0],
		...colors
	},
	fonts: {
		primaryFont: 'Century Schoolbook',
		secondaryFont: 'Cookie'
	},
	sizes: {
		xl: '2.5em',
		l: '1.5em',
		m: '1.125em',
		n: '1em',
		s: '0.9em',
		xs: '0.75em',
		xxs: '0.6em',
	}
}

export default theme