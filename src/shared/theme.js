const colors = {
	darks: [
		'rgb(19,6,45)',
		'rgba(19,6,45,0.8)',
		'rgba(11,3,28,0.8)',
		'#13062D',
		'rgba(10,6,20,1)',
		'rgba(10,6,20,0.8)',
		'#0A0614'
	],
	purples: [
		'rgb(165,165,227)',
		'rgba(165,165,227,1)',
		'#A6A5E3'
	],
	greys: [
		'rgb(204,204,204)',
		'rgba(204,204,204,1)',
		'rgba(204,204,204,0.6)',
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
		backgroundColor: colors.darks[4],
		backgroundSecondaryColor: colors.darks[0],
		backgroundTransparentColor: colors.darks[5],
		blurColor:       colors.darks[5],
		foregroundColor: colors.purples[0],
		textColor:       colors.greys[0],
		textTransparentColor: colors.greys[2],
		lightColor:  	 colors.whites[2],
		...colors
	},
	fonts: {
		primaryFont:  '\'Comfortaa\', sans-serif',
		secondaryFont: '\'Besley\', serif',
		thirdFont: '\'Imbue\', serif',
		fourthFont: '\'Purple Purse\', cursive'
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