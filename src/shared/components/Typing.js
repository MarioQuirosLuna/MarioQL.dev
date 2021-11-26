import React, { useState, useEffect } from 'react'
  
const TYPING_SPEED = 200
const DELETING_SPEED = TYPING_SPEED / 5
  
const initialState = {
	text: '',
	message: '',
	isDeleting: false,
	messageIndex: 0,
	typingSpeed: TYPING_SPEED
}
  
const Typing = (props) => {

	const { messages = ['Phrase default'] } = props
	const [state, setState] = useState(initialState)
  
	const changeSpeed = (state) => {
		return state.isDeleting ? TYPING_SPEED : DELETING_SPEED
	}

	const typing = (state) => {
		return state.isDeleting
			? state.message.substring(0, state.text.length - 1)
			: state.message.substring(0, state.text.length + 1)
	}

	useEffect(() => {
		let timer
		const handleType = () => {
			setState((state) => ({
				...state,
				text: typing(state),
				typingSpeed: changeSpeed(state)
			}))
			timer = setTimeout(handleType, state.typingSpeed)
		}
		handleType()
  
		return () => clearTimeout(timer)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.isDeleting])
  
	useEffect(() => {
		if (!state.isDeleting && state.text === state.message) {
			setTimeout(() => {
				setState((state) => ({
					...state,
					isDeleting: true
				}))
			}, 500)
		} else if (state.isDeleting && state.text === '') {
			setState((state) => ({
				...state,
				isDeleting: false,
				messageIndex: state.messageIndex + 1,
				message: messages[Number(state.messageIndex) % Number(messages.length)]
			}))
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.text, state.message, state.isDeleting, state.messages])
  
	return (
		<h3>
			<span>{state.text}</span>
			<span className="cursor" />
		</h3>
	)
}
  
export default Typing
  