import React from 'react'
import refreshTheme from './src/logic/refreshTheme'

export function onRenderBody({ setPreBodyComponents }) {
	setPreBodyComponents([
		<script dangerouslySetInnerHTML={{__html:`${refreshTheme} refreshTheme()`}} />,
	])
}

// import refreshTheme from './src/logic/refreshTheme'

// export const wrapRootElement = ({ element }) => {
// 	refreshTheme()
// 	return element
// }