import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Hero = styled.div`
    margin: 1.5em 0 0 0;
    & > img{
        width: 200px;
        padding: 0.5em;
        border: 3px solid ${({ theme }) => theme.colors.textColor};
        border-radius: 50%;
    }

    @media screen and (min-width: 768px) {
        & > img{
            width: 350px;
        }
    }

`

export const HeroTitle = styled.div`

`

export const HeroDescription = styled.div`
    margin: 1em 0;

`

export const SocialMedia = styled.div`
    width: 15em;
    height: 4em;
    margin: auto;
    background-color: ${({ theme }) => theme.colors.ligthColor};
    border-radius: 5px;
`

export const MediaIcon =styled(FontAwesomeIcon)`
    font-size: 3em;
    margin: 0.2em;
    cursor: pointer;
`