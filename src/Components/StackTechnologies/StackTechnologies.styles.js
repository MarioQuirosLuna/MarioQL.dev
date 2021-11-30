import styled from 'styled-components'

export const Section = styled.div`
    margin: 2vw 0;
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

export const Content = styled.div`
    display: flex;
    padding: 0 4vw;
    align-items: center;

    @media screen and (min-width: 768px){
        padding: 0 2vw;
    }
`

export const Text = styled.div`
    @media screen and (max-width: 500px){
        width: 0;
        height: 0;
        font-size: 0;
    }
`