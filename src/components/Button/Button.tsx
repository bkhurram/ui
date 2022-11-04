import React, { FunctionComponent } from 'react';
import "./Button.css";

interface ButtonProps {
	color: 'primary' | 'secondary';
	children: React.ReactNode
}

const Button: FunctionComponent<ButtonProps> = ({ color = 'primary', children, ...rest }) => {
	return (
		<button className={`btn btn-${color}`} {...rest}>{children}</button>
	)
}

export default Button;
