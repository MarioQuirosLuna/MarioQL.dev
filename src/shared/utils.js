import { Link } from 'react-router-dom'
import styled from 'styled-components'
import setPosition from './mixins/setPosition'

export const Content = styled.section`
    min-height: 70vh;
`

export const LinkStyled = styled.a`
    position: relative;
    &:before {
        content: '';
        width: 100%;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.foregroundColor};
        position: absolute;
        bottom: -2px;
        transition: transform 0.3s ease ;
        transform: scale(0);
    }
    @media (hover: hover) {
        &:hover {
            color: ${({ theme }) => theme.colors.foregroundColor};
            text-decoration: none;
            &::before {
                transition: transform 0.3s ease 0.2s;
                transform: scale(1);
            }
        }
    }
`

export const Container = styled.div`
	justify-content: center;
    text-align: center;
    width: 100%;
    padding: 0 5vw;
    margin: 4em auto 0 auto;
    opacity: 0;

    @media screen and (min-width: 1024px) {
      padding: 0 15vw;
    }

    @media screen and (min-width: 1600px) {
      padding: 0 20vw;
    }
`

export const Blur = styled.div`
    filter: blur(4px);
	backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

	background: ${({ theme }) => theme.colors.blurColor};
	${setPosition('fixed', 20)};
`

export const IconStyled = styled.div`
    max-width: 32px;
    max-height: 32px;
    margin: 0.3em 0.5em;

    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
`

export const BtnLink = styled.a`
    //TODO: Need Refactor
    & {
        background-color: transparent;
        color: ${({ theme }) => theme.colors.foregroundColor};
        padding: 0.5em;
        margin: 0 0 1em 0;
        cursor: pointer;
        border: 3px solid ${({ theme }) => theme.colors.foregroundColor};
        border-radius: 3em;
        display: inline-flex;
        font-weight: 700;
        overflow: hidden;
        position: relative;
        white-space: nowrap;
    }

    @media(hover: hover) {
        &:hover {
            text-decoration: none;
            transform: scale(1.05);
        }
    }
`

export const BtnLinkReactRouter = styled(Link)`
    //TODO: Need Refactor
    & {
        background-color: transparent;
        color: ${({ theme }) => theme.colors.foregroundColor};
        padding: 0.5em;
        margin: 0 0 1em 0;
        cursor: pointer;
        border: 3px solid ${({ theme }) => theme.colors.foregroundColor};
        border-radius: 3em;
        display: inline-flex;
        font-weight: 700;
        overflow: hidden;
        position: relative;
        white-space: nowrap;
    }

    @media(hover: hover) {
        &:hover {
            text-decoration: none;
            transform: scale(1.05);
        }
    }
`

export const TitleItem = styled.div`
    width: 100%;
    margin: 0 0 1em 0;
    font-weight: bold;
`

export const Item = styled.li`
    display: flex;
    align-items: center;

    img{
        width: 24px;
        height: 24px;
        margin: 0 0.8em 0 0;
    }
`

export const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
`

export const ContainerItem = styled.div`
    display: inline-block;
    align-items: center;
    padding: 1em 0 1em 0;
    min-width: 100%;
    min-height: 250px;
    border-top: 1px solid ${({ theme }) => theme.colors.foregroundColor};

    :last-child {
        border-bottom: 1px solid ${({ theme }) => theme.colors.foregroundColor};  
    }

    @media screen and (min-width: 768px){
        display: flex;
        padding: 2em 0 2em 0;
    }
`

export const ContainerTagCategory = styled.div`
    text-align: start;
    @media screen and (min-width: 768px){
        margin: 0 2em;
    }

    @media screen and (min-width: 1440px){
        margin: 0 3em;
    }
`

export const TagCategory = styled.div`
    display: inline-flex;
    padding: 0 0.5em;
    margin: 0.5em;
    position: relative;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.foregroundColor};
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.foregroundColor};
    cursor: default;
    font-size: 0.8em;
    color: ${({ theme }) => theme.colors.foregroundColor}
`