import { Link } from 'react-router-dom'
import styled from 'styled-components'
import setFont from '../../shared/mixins/setFont'

export const MenuContainerStyled = styled.ul`
	${({ theme }) => setFont(theme.sizes.l, 600)}

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

	@media screen and (min-width: 768px){
		font-size: 2em;
	}
`