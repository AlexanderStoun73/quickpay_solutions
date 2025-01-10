import React from 'react'
import styles from './button.module.scss'

type Props = {
	children: React.ReactNode
	className: string
	type?: 'submit' | 'button' | 'reset'
	disabled?: boolean
	onClick?: () => void
}

export default function Button({ children, className, type, disabled, onClick }: Props) {
	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={`${styles.btn} ${className}`}
		>
			{children}
		</button>
	)
}
