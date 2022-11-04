import React from 'react'
import "./Button.css";

interface ButtonProps {
	color: 'primary' | 'secondary';
	children: React.ReactNode
}

const Button = ({ color, children, ...rest }: ButtonProps) => {

	return (
		<button className={`btn btn-${color}`} {...rest}>{children}</button>
	)
}

export default Button;
