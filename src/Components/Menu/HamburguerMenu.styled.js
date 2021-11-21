import styled from 'styled-components'
import setFont from '../../shared/mixins/setFont'

export const MenuContainerStyled = styled.ul`
	${({ theme }) => setFont(theme.sizes.l, 600)}

`

export const SpaceStyled = styled.div`
	margin: 0 0.2em;
`

export const MenuItemStyled = styled.li`
	margin: 0 0 15px;
	overflow: hidden;
`