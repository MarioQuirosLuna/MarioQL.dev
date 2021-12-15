import styled from 'styled-components'

export const ContainerPost = styled.div`
    padding: 2em 0 0 0;
    text-align: start;

    p{ 
        display: flex;
        justify-content: center;
        img{
            max-width: 100%;
        }

        a{
            & {
                background-color: transparent;
                color: ${({ theme }) => theme.colors.foregroundColor};
                padding: 0.5em;
                margin: 0 0 1em 0;
                cursor: pointer;
                border: 3px solid ${({ theme }) => theme.colors.foregroundColor};
                border-radius: 3em;
                display: inline-flex;
                font-weight: 700;
                overflow: hidden;
                position: relative;
                white-space: nowrap;
            }

            @media(hover: hover) {
                &:hover {
                    text-decoration: none;
                    transform: scale(1.05);
                }
            }
        }
    }
`