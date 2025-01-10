import Spinner from '@/ui/Spinner'
import styles from '@/styles/page.module.scss'

export default function Loader() {
	return (
		<div className={styles.loader_container}>
			<Spinner />
		</div>
	)
}
