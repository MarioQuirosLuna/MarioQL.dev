import styled from 'styled-components'

export const Hero = styled.div`
    display: inline-block;
    margin-top: 6em;
    align-items: center;
    text-align: center;
    justify-content: space-around;

    & > img{
        width: 60vw;
        padding: 1vw;
        border: 3px solid ${({ theme }) => theme.colors.textColor};
        border-radius: 50%;
    }

    @media screen and (min-width: 768px) {
        & > img{
            width: 50vw;
            padding: 2vw;
        }
    }

    @media screen and (min-width: 1024px) {
        display: flex;
        align-items: center;
        justify-content: center;
        & > img{
            width: 35vw;
            padding: 1.5vw;
        }
    }

    @media screen and (min-width: 1440px) {
        align-items: center;
        margin-top: 12em;

        & > img{
            width: 25vw;
            padding: 1vw;
            margin: 0 0 0 2em;
        }
    }

`

export const HeroTitle = styled.div`
    h1 {    
        font-size: 6vw;
    }

    h3 {
        font-size: 3vw;
    }

    @media screen and (min-width: 500px){
        padding: 0 3vw;
        h1 {    
            font-size: 5vw;
        }

        h3 {
            font-size: 3vw;
        }
    }

    @media screen and (min-width: 768px){
        padding: 0 3vw;
        h1 {    
            font-size: 3vw;
        }

        h3 {
            font-size: 2vw;
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
    @media screen and (min-width: 1024px){
        min-height: 10em;
    }
`
