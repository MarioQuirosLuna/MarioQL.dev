import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Hero = styled.div`
    margin: 2em 0 0 0;
    & > img{
        width: 200px;
        padding: 0.5em;
        border: 3px solid ${({ theme }) => theme.colors.textColor};
        border-radius: 50%;
    }

    @media screen and (min-width: 768px) {
        margin: 8em 0 0 0;
        & > img{
            width: 400px;
            padding: 1em;
        }
    }

`

export const HeroTitle = styled.div`
    @media screen and (min-width: 768px){
        padding: 0 3em;
        h1 {
            margin: 0;
            font-size: 3.5em;
        }

        h3 {
            font-size: 2.5em;
        }
    }
`

export const HeroDescription = styled.div`
    margin: 1em 0;

`

export const SocialMedia = styled.footer`
    width: 15em;
    height: 4em;
    margin-top: 5em;
    margin: 2em auto 0 auto;
    background-color: ${({ theme }) => theme.colors.lightColor};
    border-radius: 5px;

    @media screen and (min-width: 768px){
        width: 30em;
        height: 8em;
    }

`

export const MediaIcon =styled(FontAwesomeIcon)`
    font-size: 3em;
    margin: 0.2em;
    cursor: pointer;

    @media screen and (min-width: 768px) {
        font-size: 6em;
    }
`