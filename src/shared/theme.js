const colors = {
	darks: [
		'rgb(19,6,45)',
		'rgba(19,6,45,0.8)',
		'rgba(11,3,28,0.8)',
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
		'rgba(255,253,253,0.1)',
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
		backgroundTransparentColor: colors.darks[1],
		blurColor:       colors.darks[2],
		foregroundColor: colors.purples[0],
		textColor:       colors.greys[0],
		lightColor:  	 colors.whites[2],
		...colors
	},
	fonts: {
		primaryFont:  '\'Purple Purse\', cursive',
		secondaryFont: '\'Besley\', serif',
		thirdFont: '\'Imbue\', serif'
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