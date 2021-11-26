import styled from 'styled-components'

export const ContainerAbout = styled.div`
    margin: 6em 0 0 0;
    text-align: left;
    display: inline-block;

    h1{
        font-size: 8vw;
    }

    h2{
        font-size: 6vw;
    }

    p{
        font-size: 4.8vw;
        line-height: 1.5;
    }

    @media screen and (min-width: 500px){
        h1{
            font-size: 6vw;
        }

        h2{
            font-size: 3.5vw;
        }

        p{
            font-size: 3vw;
        }
    }

    @media screen and (min-width: 768px){
        h1{
            font-size: 5vw;
        }

        h2{
            font-size: 2.5vw;
        }

        p{
            font-size: 2.3vw;
        }
    }

    @media screen and (min-width: 1024px){
        
        h1{
            font-size: 4vw;
        }

        h2{
            font-size: 1.8vw;
        }

        p{
            font-size: 1.5vw;
        }
    }

    @media screen and (min-width: 1440px){
        h1{
            font-size: 3vw;
        }

        h2{
            font-size: 1.5vw;
        }

        p{
            font-size: 1.3vw;
        }
    }
`

export const Presentation = styled.section`
    

`

