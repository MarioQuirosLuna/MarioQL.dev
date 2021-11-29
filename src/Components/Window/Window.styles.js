import styled from 'styled-components'

export const WindowContainer = styled.div`
    width: 100%;
    min-width: 250px;
    max-width: 400px;
    height: 250px;
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.colors.greys[4]};
    border-radius: 10px 10px 3px 3px;
`

export const WindowBar = styled.div`
    height: 25px;
    position: relative;
    background: ${({ theme }) => theme.colors.greys[4]};
    border-radius: 9px 9px 0 0;
    padding: 0.2em 0;

    div{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 5px;
        position: absolute;
        left: 5px;
    }

    span{
        font-size: 0.75em;
    }
`

export const WindowScreen = styled.div`
    width: 100%;
    height: 200px;
    cursor: pointer;
    background: #222;
    position: relative;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const Technologies = styled.div`
    width: 100%;
    max-width: 400px;
    height: 25px;
    position: relative;
    padding-right: 0.5em;
    display: flex;
    justify-content: end;
    background: ${({ theme }) => theme.colors.greys[4]};
    border-radius: 0 0 3px 3px;
`