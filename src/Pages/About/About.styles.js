import styled, { css } from 'styled-components'

export const ContainerAbout = styled.div`
    width: 100%;
    text-align: left;
    display: inline-block;

    p{
        line-height: 1.5;
    }

    u{
        line-height: 3em;
    }

    @media screen and (min-width: 768px){
        margin: 2em 0 0 0;
    }

`

export const HeaderPresentation = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;

    img{
        width: 20vw;
        border-radius: 50%;
    }

    @media screen and (min-width: 768px) {
        img{
            padding: 10px;
            border: 1px solid ${({ theme }) => theme.colors.textColor};
            margin: 0 3em 0 0;
        }
    }

    @media screen and (min-width: 1440px) {
        img{
            width: 15vw;
        }
    }
`

export const Titles = styled.div`
    text-align: left;
`

export const TabList = styled.ul`
    list-style: none;
    display: flex;
    gap: 0 1em;
    margin: 0.8em 0 1.2em 0;
    grid-template-columns: repeat(3, 1fr);
    
    @media screen and (min-width: 768px) {
        margin: 0.5em 0 1.5em 0;
    }
`

export const ItemList = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em 0;
    list-style: none;
    margin: 0 0 1em 0;

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5em 1em;
    }

    @media screen and (min-width: 1440px) {
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1.5em 1em;
    }
`

export const TabItem = styled.li`
    cursor: pointer;
    font-weight: 700;
    text-align: center;
    color: ${({ isActive, theme }) => isActive ? theme.colors.foregroundColor : 'inherit'};
    pointer-events: ${({ isActive }) => isActive && 'none' };
    position: relative;

    @media(hover: hover) {
        &:hover {
            color: ${({ theme }) => theme.colors.foregroundColor};
        }
    }

    ${({ isActive }) => isActive && css`
        &::before {
            content: '';
            width: 100%;
            height: 2px;
            background-color: ${({ theme }) => theme.colors.foregroundColor};
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
        }
    `};

`

export const ContentExtras = styled.div`
    display: flex;
    align-items: center;
`