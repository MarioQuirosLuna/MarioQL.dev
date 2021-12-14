import { useContext, useEffect, useState } from 'react'
import TranslationContext from '../Context/TranslationContext'

import { ENG } from '../i18n/en'
import { ESP } from '../i18n/es'

const useTranslation = () => {
	const { language } = useContext(TranslationContext)
	const [staticData, setStaticData] = useState(language)
	useEffect(() => {
		setStaticData(language === 'en' ? ENG : ESP)
	}, [language])
	return (
		staticData
	)
}

export default useTranslation