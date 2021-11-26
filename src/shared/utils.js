import styled from 'styled-components'
import setPosition from './mixins/setPosition'

export const Background = styled.div`
    background: linear-gradient(
        to bottom,
        ${({ theme }) => theme.color.secondary},
        transparent
    );
    ${setPosition('absolute', -100)}
`

export const Container = styled.div`
	justify-content: center;
    text-align: center;
    width: 100%;
    padding: 0 5vw;
    margin: 0 auto;

    @media screen and (min-width: 1024px) {
      padding: 0 10vw;
    }

    @media screen and (min-width: 1440px) {
      padding: 0 15vw;
    }
`

export const Blur = styled.div`
    filter: blur(4px);
	backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

	background: ${({ theme }) => theme.colors.blurColor};
	${setPosition('fixed', 20)};
`
