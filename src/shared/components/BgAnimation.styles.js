import styled from 'styled-components'
import { cubeAnimation } from '../animations'

export const Cube = styled.div`
    position: absolute;
    top: 65vh;
    left: 45vw;
    width: 10px;
    height: 10px;
    border: solid 1px ${({ theme }) => theme.colors.purples[0]};
    transform-origin: top left;
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    animation: ${cubeAnimation} 10s ease-in forwards infinite;
    
    &:nth-child(2n) {
        border-color: ${({ theme }) => theme.colors.whites[1]};
    }
    
    &:nth-child(2) {
        animation-delay: 2s;
        left: 20vw;
        top: 25vh;
    }
    
    &:nth-child(3) {
        animation-delay: 4s;
        left: 75vw;
        top: 50vh;
    }
    
    &:nth-child(4) {
        animation-delay: 6s;
        left: 80vw;
        top: 10vh;
    }
    
    &:nth-child(5) {
        animation-delay: 8s;
        left: 10vw;
        top: 85vh;
    }
    
    &:nth-child(6) {
        animation-delay: 10s;
        left: 40vw;
        top: 10vh;
    }
`