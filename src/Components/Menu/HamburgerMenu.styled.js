import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const MenuContainerStyled = styled.ul`
	font-size: 10vw;

	@media screen and (min-width: 500px) {
		font-size: 4vw;
	}

	@media screen and (min-width: 1024px) {
		font-size: 2.5vw;
	}

	@media screen and (min-width: 1440px) {
		font-size: 1.5vw;
	}
`

export const SpaceStyled = styled.div`
	margin: 0 0.3em;
`

export const MenuItemStyled = styled.li`
	margin: 0.2em 0 1.5em 0;
	overflow: hidden;
`

export const Item = styled(Link)`
	font-size: 1em;
	opacity: 0;

	@media screen and (min-width: 768px){
		font-size: 2em;
	}
`