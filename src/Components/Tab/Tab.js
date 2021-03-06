import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { TabBarContext } from '../../Context/AboutContext'

import { TabItem } from '../../Pages/About/About.styles'

const Tab = ({ tabTitle, children }) => {
	
	const contextTab = useContext(TabBarContext)
	const isActive = tabTitle === contextTab?.activeTab

	const handleActive = () => contextTab?.setTab(tabTitle)

	return (
		<TabItem isActive={isActive} onClick={handleActive}>
			{children}          
		</TabItem>
	)
}

Tab.propTypes = {
	tabTitle: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
}

export default Tab
