import styled from 'styled-components'

export const Section = styled.div`
    margin: 2vw;
`

export const Item = styled.div`
    display: inline-block;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.tagsColor };
    border-radius: 20px;
    margin: 1vw 1vw;
    font-size: 4.8vw;
    transition: all 0.5s linear;
    cursor: default;

    &:hover{
        transform: scale(1.1);
        box-shadow: 0px 0px 7px rgba(255,255,255,0.8);
    }

    @media screen and (min-width: 500px){
        font-size: 3.5vw;
    }

    @media screen and (min-width: 768px){
        font-size: 2.5vw;
        margin: 0.5vw 0.5vw;
    }

    @media screen and (min-width: 1024px){
        font-size: 1.8vw;
    }

    @media screen and (min-width: 1440px){
        font-size: 1vw;
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