import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Hero = styled.div`
    margin: 2em auto 0 auto;
    width: 70vw;
    & > img{
        width: 200px;
        padding: 0.5em;
        border: 3px solid ${({ theme }) => theme.colors.textColor};
        border-radius: 50%;
    }

    @media screen and (min-width: 768px) {
        margin: 8em auto 0 auto;
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
            margin: auto;
            font-size: 3.5em;
        }

        h3 {
            font-size: 2.5em;
        }
    }
`

export const HeroDescription = styled.div`
    margin: 1em 0;
    
    @media screen and (max-width: 768px){
        min-height: 6em;
    }
    @media screen and (max-width: 1024px){
        min-height: 10em;
    }
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
    color: ${({ theme }) => theme.colors.textTransparentColor};
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.textColor};
        border-bottom: 1px solid ${({ theme }) => theme.colors.textColor};
    }

    @media screen and (min-width: 768px) {
        font-size: 6em;
    }
`