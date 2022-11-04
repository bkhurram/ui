import React, { FunctionComponent } from 'react'

type AlertProps = {
	color: 'primary' | 'secondary';
}

const Alert: FunctionComponent<AlertProps> = ({ color = 'primary' }) => {
	return (
		<div className={`alert alert-${color}`}>Alert</div>
	)
}

export default Alert;
