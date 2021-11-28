import styled from 'styled-components'

export const ContainerGallery = styled.div`
    margin-top: 6em;

    h1{
        font-size: 6vw;
    }

    @media screen and (min-width: 500px) {
        h1{
            font-size: 5vw;
        }
    }

    @media screen and (min-width: 768px) {
        h1{
            font-size: 3vw;
        }
    }

    @media screen and (min-width: 1440px) {
        margin-top: 8em;

        h1{
            font-size: 2vw;
        }
    }
`

export const ContainerProjects = styled.div`
    display: grid;
    min-height: 250px;
    row-gap: 20px;
    column-gap: 20px;
    justify-content: center;
    opacity: 0;

    @media screen and (min-width: 768px){
        min-height: 500px;
    }

    @media screen and (min-width: 1024px){
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
    }

    @media screen and (min-width: 1440px){
        grid-template-columns: repeat(3, 1fr);
    }

`