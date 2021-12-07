import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ContainerFooter = styled.div`
    opacity: 0;
    min-height: 20vh;
`

export const SocialMedia = styled.footer`
    width: 192px;
    height: 64px;
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

`

export const MediaIcon = styled(FontAwesomeIcon)`
    font-size: 32px;
    color: ${({ theme }) => theme.colors.textTransparentColor};
    transition: transform 0.5s ease;
    cursor: pointer;

    &:hover {
        transform: scale(0.9);
        opacity: 0.9;
        color: ${({ theme }) => theme.colors.textColor};
    }
    
`

export const Copyright = styled.div`
    font-size: 16px;
    text-align: center;
    padding: 0 0 0.5em 0;
    cursor: default;
`