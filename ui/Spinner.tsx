import React from 'react'
import styles from './loading.module.scss'

export default function Spinner() {
	return (
		<div className={styles.loader}>
			<div className={styles.loader__dot}></div>
			<div className={styles.loader__dot}></div>
			<div className={styles.loader__dot}></div>
		</div>
	)
}
