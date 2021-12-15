const limitCharacter = (text, start, end) => {
	if(text.length < end || end < start) return text
	return text.slice(start,end).concat('...')
}

export default limitCharacter