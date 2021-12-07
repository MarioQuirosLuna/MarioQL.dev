import styled from 'styled-components'

export const Hero = styled.div`
    display: inline-block;
    margin-top: 4em;
    align-items: center;
    text-align: center;
    justify-content: space-around;

    @media screen and (min-width: 1024px) {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 8em;
    }

    @media screen and (min-width: 1440px) {
        align-items: center;
        margin-top: 12em;
    }

`

export const HeroTitle = styled.div`
    text-align: left;
    justify-content: space-around;

    h1 {    
        font-size: ${({ theme }) => theme.sizes.movil.xl};
    }

    h3 {
        font-size: ${({ theme }) => theme.sizes.movil.s};
    }

    @media screen and (min-width: 768px){
        padding: 0 3vw;
        h1 {    
            font-size: ${({ theme }) => theme.sizes.ipad.xl};
        }

        h3 {
            font-size: ${({ theme }) => theme.sizes.ipad.l};
        }
    }

    @media screen and (min-width: 1024px){
        padding: 0 3vw;
        margin-right: 3em;
        margin-top: 6em;
        h1 {    
            font-size: ${({ theme }) => theme.sizes.desktop.xxl};
        }

        h3 {
            font-size: ${({ theme }) => theme.sizes.desktop.m};
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
`
