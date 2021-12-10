import styled from 'styled-components'

export const Gallery = styled.div`

    padding: 2em 0 0 0;

    h3{
        margin: 0 0 1em 0;

        u{
            font-size: calc(0.8em + 0.8vw);
        }
    }
`

export const ContainerItem = styled.div`
    display: inline-block;
    align-items: center;
    padding: 1em 0 1em 0;
    min-width: 100%;
    border-top: 1px solid ${({ theme }) => theme.colors.textColor};

    :last-child {
        border-bottom: 1px solid ${({ theme }) => theme.colors.textColor};  
    }

    @media screen and (min-width: 768px){
        display: flex;
        padding: 2em 0 2em 0;
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
    width: 100%;
    height: auto;
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

export const ContentDetails = styled.div`
    padding: 2em 0 0 0;
`

export const TextDetails = styled.div`
    margin: 0 10% 0 10%;
    text-align: left;

    p{
        line-height: 1.5;
    }

    u{
        line-height: 3em;
    }
`

export const ContainerTechnologies = styled.div`
    margin: 1em 0 0 0;
`