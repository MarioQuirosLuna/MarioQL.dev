import React, { useContext } from 'react'

import initialStateSpanish from '../shared/initialStateSpanish'
import initialStateEnglish from '../shared/initialStateEnglish'
import TranslationContext from './TranslationContext'

const StateContext = React.createContext({})

export const StateContextProvider = ({ children }) => {
	const { language } = useContext(TranslationContext)
	const state = language === 'en' ? initialStateEnglish : initialStateSpanish

	return (
		<StateContext.Provider value={{ state }}>
			{ children }
		</StateContext.Provider>
	)
}

export default StateContext
