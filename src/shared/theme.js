const colors = {
	darks: [
		'rgb(19,6,45)',
		'rgba(19,6,45,0.8)',
		'rgba(11,3,28,0.8)',
		'#13062D',
		'rgba(10,6,20,1)',
		'rgba(10,6,20,0.8)',
		'#0A0614',
		'rgba(30,10,70,1)'
	],
	purples: [
		'rgb(165,165,227)',
		'rgba(165,165,227,0.3)',
		'#A6A5E3',
		'rgba(165,165,227,0.6)'
	],
	greys: [
		'rgb(204,204,204)',
		'rgba(204,204,204,1)',
		'rgba(204,204,204,0.5)',
		'#CCCCCC',
		'#333333'
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
		tagsColor: 		 colors.purples[1],
		...colors
	},
	fonts: ['Merriweather', 'Raleway']
}

export default theme