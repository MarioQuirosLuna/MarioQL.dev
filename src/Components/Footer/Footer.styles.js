import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ContainerFooter = styled.div`
    opacity: 0;
    min-height: 20vh;
    display: flex;
    justify-content: center;
`

export const Container = styled.div`
    margin: auto 0 0 0;
`

export const SocialMedia = styled.footer`
    width: 12em;
    height: 4em;
    padding: 2em 0;
    margin: 1em auto 1em auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.colors.lightColor};
    border-radius: 5px;
`

export const MediaIcon = styled(FontAwesomeIcon)`
    font-size: 2em;
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
    font-size: 0.7em;
    text-align: center;
    padding: 0 0 0.3em 0;
    cursor: default;
`