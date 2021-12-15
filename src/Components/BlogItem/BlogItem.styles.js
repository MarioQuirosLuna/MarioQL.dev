import styled from 'styled-components'

export const ItemContent = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    padding: 1em;
    flex-direction: column;
    border: 1px solid ${({ theme }) => theme.colors.foregroundColor};
    border-radius: 5px;

    h2 {
        cursor: pointer;
    }

    span.date, span.author, span.timeReading{
        color: ${({ theme }) => theme.colors.foregroundColor};
        @media screen and (min-width: 1024px){
            padding: 0 4em;
        }
    }

    span.author, span.timeReading{
        text-align: left;
    }

    span.date{
        text-align: right;
    }
    span.author{
        margin: 0.5em 0 0.5em 0;
    }
    span.timeReading{
        margin: 0 0 1em 0;
    }

    p {
        margin: 0.5em 0;
        text-align: start;
        letter-spacing: 0.05px;
    }

    div {
        margin-top: auto;
    }
`
