import styled from 'styled-components'

export const ContainerAbout = styled.div`
    margin: 4em 0 0 0;
    text-align: left;
    display: inline-block;

    p{
        line-height: 1.5;
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