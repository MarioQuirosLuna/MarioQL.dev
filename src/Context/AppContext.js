import React from 'react'

import initialState from '../shared/initialState'

const StateContext = React.createContext({})

export const StateContextProvider = ({ children }) => {
	const state = initialState

	return (
		<StateContext.Provider value={{ state }}>
			{ children }
		</StateContext.Provider>
	)
}

export default StateContext
