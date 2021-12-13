import styled from 'styled-components'

export const Hero = styled.div`
    display: inline-block;
    margin: 8em 0 0 0;
    align-items: center;
    text-align: center;

    @media screen and (min-width: 768px) {
        margin: 11em 0 0 0;
    }

`

export const HeroTitle = styled.div`
    text-align: left;

    @media screen and (min-width: 768px){
        padding: 0 3vw;
    }

    @media screen and (min-width: 1024px){
        padding: 0 3vw;
        margin: 6em 3em 0 0;
    }
`

export const TitleBanner = styled.h1`
  font-weight: 900;
  font-size: calc(1.5em + 1vw);
  
  @media screen and (min-width: 768px) {
    line-height: 2em;
  }
`

export const SubtitleBanner = styled.p`
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts[1]}, sans-serif;
  margin: 0;
  @media screen and (min-width: 768px) {
    line-height: 2em;
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
