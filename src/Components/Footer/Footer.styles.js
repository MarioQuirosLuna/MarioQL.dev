import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SocialMedia = styled.footer`
    width: 70vw;
    height: 20vw;
    padding: 2em 0;
    margin: 2em auto 2em auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.colors.lightColor};
    border-radius: 5px;

    @media screen and (min-width: 500px) {
        margin: 5em auto 2em auto;
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

export const MediaIcon = styled(FontAwesomeIcon)`
    font-size: 17vw;
    color: ${({ theme }) => theme.colors.textTransparentColor};
    transition: all 0.5s linear;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
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

export const Copyright = styled.div`
    font-size: 4vw;
    text-align: center;
    padding: 0 0 0.5em 0;
    cursor: default;

    @media screen and (min-width: 768px){
        font-size: 2.5vw;
    }

    @media screen and (min-width: 1024px){
        font-size: 1.8vw;
    }

    @media screen and (min-width: 1440px){
        font-size: 1.3vw;
    }
`