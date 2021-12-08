import { keyframes } from 'styled-components'

export const fadeIn = keyframes`
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
`

export const fadeOut = keyframes`
	100% {
		opacity: 0;
	}

	0% {
		opacity: 1;
	}
`

export const slideUp = keyframes`
	0% {
		transform: translateY(200%);
	}

	100% {
		transform: translateY(0);
	}
`

export const slideLeft = keyframes`
	0% {
		transform: translateX(200%);
	}

	100% {
		transform: translateX(0);
	}
`
export const slideRight = keyframes`
	0% {
		transform: translateX(0);
	}

	100% {
		transform: translateX(200%);
	}
`

export const blink = keyframes`
	50% {
	  border-color: transparent;
	}
`

export const cubeAnimation = keyframes`
	from {
		transform: scale(0) rotate(0deg) translate(-50%, -50%);   
		opacity: 1;
	}
	to {
		transform: scale(8) rotate(960deg) translate(-50%, -50%); 
		opacity: 0;
	}
`