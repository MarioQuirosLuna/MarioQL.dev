import React, { useEffect, useState } from 'react'

const TranslationContext = React.createContext({})

export const TranslationContextProvider = ({ children }) => {
	const [language, setLanguage] = useState(localStorage.getItem('LanguagePortfolioMarioQL') ? localStorage.getItem('LanguagePortfolioMarioQL') : 'en')

	useEffect(() => {
		localStorage.setItem('LanguagePortfolioMarioQL',language)
	}, [language])
	return (
		<TranslationContext.Provider value={{ language, setLanguage }}>
			{children}
		</TranslationContext.Provider>
	)
}

export default TranslationContext
