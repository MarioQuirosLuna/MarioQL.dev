import { createGlobalStyle } from 'styled-components'
import {
	blink,
	fadeIn,
	fadeOut,
	gradientAnimation,
	slideLeft,
	slideRight
} from './animations'

const GlobalStyle = createGlobalStyle`
    ::selection {
        background: ${({ theme }) => theme.colors.textColor};
        color: ${({ theme }) => theme.colors.backgroundColor};
    }

    * {
        box-sizing: border-box;
        font-family: ${({ theme }) => theme.fonts[0]}, sans-serif;
        font-weight: 400;
        margin: 0;
        padding: 0;
        line-height: 1.3em;
    }
    
    body{ 
        margin: 0;
        min-height: 100vh;
        color: ${({ theme }) => theme.colors.textColor};
        background: linear-gradient(-45deg,
            ${({ theme }) => theme.colors.darks[4]},
            ${({ theme }) => theme.colors.backgroundColor},
            ${({ theme }) => theme.colors.backgroundSecondaryColor},
            ${({ theme }) => theme.colors.darks[7]}
            );
        background-position: center; 
        background-size: 400% 400%; 
        animation: ${gradientAnimation} 15s ease infinite;
    }

    h1, h2 {    
        font-size: calc(1.1em + 1vw);
    }

    h3, p {
        font-size: calc(0.8em + 0.4vw);
    }

    h4{
        font-size: calc(1.2em + 0.7vw)
    }

    b, u{
        font-weight: bold;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    a {
        color: ${({ theme }) => theme.colors.textColor};
        cursor: pointer;
        text-decoration: none;
    }

    .overflow--hidden {
        overflow: hidden;
    }

    .opacity{
        opacity: 0
    }

    .fadeIn {
        animation: ${fadeIn} 1s ease-in forwards;
    }

    .fadeOut {
        animation: ${fadeOut} 1s ease-in forwards;
    }

    .slideLeft{
        animation: ${slideLeft} 0.7s ease-in-out forwards;
    }

    .slideRight{
        animation: ${slideRight} 0.7s ease-in-out forwards;
    }

    .cursor {
        border-left: 0.1em solid ${({ theme }) => theme.colors.textColor};
        animation: ${blink} 0.7s steps(1) infinite;
    }

    .delay-5 {
        animation-delay: 500ms;
    }

    @media screen and (max-width: 1023px) {
        div.header--visible {
            transform: translateY(0px)
        }
    }
`

export default GlobalStyle