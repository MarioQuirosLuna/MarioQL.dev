import styled, { css } from 'styled-components'

export const ContainerAbout = styled.div`
    margin: 4em 0 0 0;
    text-align: left;
    display: inline-block;

    p{
        line-height: 1.5;
    }

    b{
        line-height: 3em;
    }

    @media screen and (min-width: 768px){
        margin: 6em 0 0 0;
    }

`

export const Presentation = styled.section`
    
`

export const HeaderPresentation = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;

    img{
        width: 25vw;
        border-radius: 50%;
    }

    @media screen and (min-width: 768px) {
        img{
            padding: 10px;
            border: 1px solid ${({ theme }) => theme.colors.textColor};
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
  gap: 0 1rem;
  margin-bottom: 2rem;
  @media(max-width: 767px) {
    display: grid;
    grid-gap: 0 0.5rem;  
    grid-template-columns: repeat(3, 1fr);
  }
`

export const Item = styled.div`
    display: inline-block;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.tagsColor };
    border-radius: 20px;
    margin: 1vw 1vw;
    font-size: ${({ theme }) => theme.sizes.movil.s};
    transition: all 0.5s linear;
    cursor: default;

    &:hover{
        transform: scale(1.1);
        box-shadow: 0px 0px 7px rgba(255,255,255,0.8);
    }

    @media screen and (min-width: 768px){
        font-size: ${({ theme }) => theme.sizes.ipad.m};
        margin: 0.5vw 0.5vw;
    }

    @media screen and (min-width: 1024px){
        font-size: ${({ theme }) => theme.sizes.desktop.s};
    }
    
`

export const TabItem = styled.li`
    cursor: pointer;
    font-weight: 700;
    text-align: center;
    color: ${({ isActive, theme }) => isActive ? theme.colors.purples[0] : 'inherit'};
    pointer-events: ${({ isActive }) => isActive && 'none' };
    position: relative;

    @media(hover: hover) {
        &:hover {
            color: ${({ theme }) => theme.colors.purples[0]};
        }
    }

    ${({ isActive }) => isActive && css`
        &::before {
            content: '';
            width: 100%;
            height: 2px;
            background-color: ${({ theme }) => theme.colors.purples[0]};
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
        }
    `};

`