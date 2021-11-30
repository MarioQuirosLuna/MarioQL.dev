import styled from 'styled-components'

export const ContainerAbout = styled.div`
    margin: 6em 0 0 0;
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

