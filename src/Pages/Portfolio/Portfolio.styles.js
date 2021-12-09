import styled from 'styled-components'

export const Gallery = styled.div`
    margin: 6em 0 0 0;
`

export const ContainerItem = styled.div`
    display: inline-block;
    align-items: center;
    margin: 5em 0 0 0;

    @media screen and (min-width: 1024px){
        display: flex;
    }
`

export const ImgContainer = styled.div`
    min-width: 18em;
    min-height: 9em;

    @media screen and (min-width: 1440px){
        min-width: 37em;
        min-height: 18em;
    }
`

export const Image = styled.img`
    width: 18em;
    height: 9em;

    @media screen and (min-width: 1440px){
        width: 37em;
        height: 18em;
    }
`

export const ItemText = styled.div`
    width: 100%;
`

export const TitleItem = styled.div`
    
    width: 100%;
    margin: 0 0 1em 0;
`

export const ButtonContainer = styled.div`
    display: flex;
    gap: 1em;
    margin: 1em 0 0 0;
    width: 100%;
    justify-content: center;
`