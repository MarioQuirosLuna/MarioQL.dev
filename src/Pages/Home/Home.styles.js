import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Hero = styled.div`
    width: 70vw;
    margin: 6em auto 0 auto;
    justify-content: space-around;
    & > img{
        width: 60vw;
        padding: 1vw;
        border: 3px solid ${({ theme }) => theme.colors.textColor};
        border-radius: 50%;
    }

    @media screen and (min-width: 768px) {
        margin: 8em auto 0 auto;
        & > img{
            width: 50vw;
            padding: 2vw;
        }
    }

    @media screen and (min-width: 1024px) {
        width: 80vw;
        margin: 8em auto 0 auto;
        display: flex;
        align-items: center;
        & > img{
            width: 35vw;
            padding: 1.5vw;
        }
    }

    @media screen and (min-width: 1440px) {
        width: 80vw;
        display: flex;
        align-items: center;
        margin: 12em auto 0 auto;

        & > img{
            width: 25vw;
            padding: 1vw;
            margin: 0 0 0 2em;
        }
    }

`

export const HeroTitle = styled.div`
    h1 {    
        margin: auto;
        font-size: 6vw;
    }

    h3 {
        font-size: 3vw;
    }

    @media screen and (min-width: 500px){
        padding: 0 3vw;
        h1 {    
            margin: auto;
            font-size: 5vw;
        }

        h3 {
            font-size: 3vw;
        }
    }

    @media screen and (min-width: 768px){
        padding: 0 3vw;
        h1 {    
            margin: auto;
            font-size: 3vw;
        }

        h3 {
            font-size: 2vw;
        }
    }
`

export const HeroDescription = styled.div`
    margin: 1em 0;
    min-height: 3.5em;
    
    @media screen and (min-width: 500px){
        min-height: 5em;
    }
    @media screen and (min-width: 768px){
        min-height: 6em;
    }
    @media screen and (min-width: 1024px){
        min-height: 10em;
    }
`

export const SocialMedia = styled.footer`
    width: 70vw;
    height: 20vw;
    margin: 2em auto 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.colors.lightColor};
    border-radius: 5px;

    @media screen and (min-width: 500px) {
        margin: 5em auto 0 auto;
    }

    @media screen and (min-width: 768px) {
        width: 60vw;
        height: 10vw;
    }

    @media screen and (min-width: 1024px) {
        width: 30vw;
        height: 8vw;
    }

    @media screen and (min-width: 1440px) {
        width: 20vw;
        height: 6vw;
    }

`

export const MediaIcon =styled(FontAwesomeIcon)`
    font-size: 17vw;
    color: ${({ theme }) => theme.colors.textTransparentColor};
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.textColor};
        border-bottom: 1px solid ${({ theme }) => theme.colors.textColor};
    }
    
    @media screen and (min-width: 768px) {
        font-size: 10vw;
    }

    @media screen and (min-width: 1024px) {
        font-size: 6vw;
    }

    @media screen and (min-width: 1440px) {
        font-size: 4vw;
    }
`