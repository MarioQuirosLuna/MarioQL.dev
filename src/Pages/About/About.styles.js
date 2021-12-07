import styled from 'styled-components'

export const ContainerAbout = styled.div`
    margin: 4em 0 0 0;
    text-align: left;
    display: inline-block;

    h1{
        font-size: ${({ theme }) => theme.sizes.movil.xl};
    }

    h2{
        font-size: ${({ theme }) => theme.sizes.movil.m};
    }

    p{
        font-size: ${({ theme }) => theme.sizes.movil.s};
        line-height: 1.5;
    }

    @media screen and (min-width: 768px){
        margin: 6em 0 0 0;
        h1{
            font-size: ${({ theme }) => theme.sizes.ipad.xl};
        }

        h2{
            font-size: ${({ theme }) => theme.sizes.ipad.l};
        }

        p{
            font-size: ${({ theme }) => theme.sizes.ipad.m};
        }
    }

    @media screen and (min-width: 1024px){
        
        h1{
            font-size: ${({ theme }) => theme.sizes.desktop.xl};
        }

        h2{
            font-size: ${({ theme }) => theme.sizes.desktop.m};
        }

        p{
            font-size: ${({ theme }) => theme.sizes.desktop.s};
        }
    }

`

export const Presentation = styled.section`
    

`

export const HeaderPresentation = styled.div`
    width: 100%;
    display: inline-block;
    align-items: center;
    text-align: center;
    justify-content: center;

    img{
        width: 60vw;
        padding: 1vw;
        border: 3px solid ${({ theme }) => theme.colors.textColor};
        border-radius: 50%;
    }

    @media screen and (min-width: 768px) {
        img{
            width: 50vw;
            padding: 2vw;
        }
    }

    @media screen and (min-width: 1024px) {
        display: flex;
        justify-content: space-between;
        
        img{
            width: 30vw;
            padding: 1.5vw;
            margin-left: 3em;
        }
    }

    @media screen and (min-width: 1440px) {

        img{
            width: 25vw;
            padding: 1vw;
            margin: 0 0 0 2em;
        }
    }
`

export const Titles = styled.div`
    text-align: left;
`