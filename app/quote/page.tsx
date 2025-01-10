import React from 'react'
import ReplyIcon from '@mui/icons-material/Reply'
import styles from '@/styles/components/quote.module.scss'
import Form from '../components/form/form'
// import PhoneIcon from '@mui/icons-material/Phone'

export default function Quote() {
	return (
		<section className={styles.quote}>
			<div className={styles.quote__text}>
				<div className={styles.quote__devider}>
					<article className={styles.quote__title_text}>
						<h5 className='main_blue-text'>Request Information</h5>
						<h1 className='main_title'>
							Need A Free Quote? Please Feel Free to Contact Us
						</h1>
					</article>
					<h5 className={styles.quote__text_desc}>
						<ReplyIcon className={styles.quote__text_desc__icon} />
						Reply within 24 hours
					</h5>
					<div className={styles.quote__about_text}>
						<p style={{ marginBottom: '1.5rem' }}>
							Are you ready to take your business to the next level? Whether you
							have questions, require more information, or are interested in a
							free quote, don&apos;t hesitate to get in touch. We&apos;re
							committed to providing timely responses, and you can expect to
							hear from us within 24 hours. Let&apos;s start the conversation
							and embark on a journey toward IT success together.
						</p>
					</div>
					{/* <div className={styles.quote__call}>
						<span className={styles.quote__call_icon}>
							<PhoneIcon style={{ color: '#fff' }} />
						</span>
						<div className={styles.quote__call_text}>
							<h4>Call to ask any question</h4>
							<p>+012 345 6789</p>
						</div>
					</div> */}
				</div>
				<Form />
			</div>
		</section>
	)
}
