import { createGlobalStyle } from 'styled-components'
import { blink, fadeIn, fadeOut, slideLeft, slideRight, slideUp } from './animations'

const GlobalStyle = createGlobalStyle`
    ::selection {
        background: ${({ theme }) => theme.colors.backgroundColor};
        color: ${({ theme }) => theme.colors.textColor};
    }

    * {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
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
        background: linear-gradient(to bottom,
            ${({ theme }) => theme.colors.backgroundColor},
            ${({ theme }) => theme.colors.backgroundSecondaryColor}
            );
        background-position: center; 
        background-size: cover; 
    }

    h1 {    
        font-size: calc(1.1em + 1vw);
        
    }

    h3, p {
        font-size: calc(0.7em + 0.7vw);
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    ol {
        margin: 0;
    }

    a {
        color: ${({ theme }) => theme.colors.textColor};
        cursor: pointer;
        text-decoration: none;
    }

    button {
        border: none;
        outline: none;
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

    .slideUp {
        animation: ${slideUp} 1s ease-in forwards;
    }

    .slideLeft{
        animation: ${slideLeft} 1s ease-in-out forwards;
    }

    .slideRight{
        animation: ${slideRight} 1s ease-in-out forwards;
    }

    .cursor {
        border-left: 0.1em solid ${({ theme }) => theme.colors.textColor};
        animation: ${blink} 0.7s steps(1) infinite;
    }
    .delay-1 {
        animation-delay: 100ms;
    }

    .duration-1 {
        animation-duration: 100ms;
    }

    .delay-2 {
        animation-delay: 200ms;
    }

    .duration-2 {
        animation-duration: 200ms;
    }

    .delay-3 {
        animation-delay: 300ms;
    }

    .duration-3 {
        animation-duration: 300ms;
    }

    .delay-4 {
        animation-delay: 400ms;
    }

    .duration-4 {
        animation-duration: 400ms;
    }

    .delay-5 {
        animation-delay: 500ms;
    }

    .duration-5 {
        animation-duration:  500ms;
    }

    .delay-6 {
        animation-delay: 600ms;
    }

    .duration-6 {
        animation-duration: 600ms;
    }

    .delay-7 {
        animation-delay: 700ms;
    }

    .duration-7 {
        animation-duration: 700ms;
    }

    .delay-8 {
        animation-delay: 800ms;
    }

    @media screen and (max-width: 1023px) {
        div.header--visible {
            transform: translateY(0px)
        }
    }

    @media screen and (min-width: 1024px) {
        ::-webkit-scrollbar {
            width: .4em;
        }

        ::-webkit-scrollbar-track {
            background: ${({ theme }) => theme.colors.backgroundColor};
        }

        ::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.colors.textColor};
        }

        ::-webkit-scrollbar-thumb:hover {
            background: ${({ theme }) => theme.colors.textColor};
        }
    }
`

export default GlobalStyle