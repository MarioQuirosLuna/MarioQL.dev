import styled from 'styled-components'

export const Gallery = styled.div`
    margin: 6em 0 0 0;
`

export const ContainerItem = styled.div`
    display: inline-block;
    align-items: center;
    margin: 2em 0 0 0;

    @media screen and (min-width: 1024px){
        display: flex;
    }
`

export const Image = styled.img`
    //TODO: Responsive
    width: 37em;
    height: 18em;
`

export const ItemText = styled.div`

`

export const TitleItem = styled.div`
    margin: 0 0 1em 0;
`

export const ButtonContainer = styled.div`
    display: flex;
    gap: 1em;
    margin: 1em 0 0 0;
    width: 100%;
    justify-content: center;
`