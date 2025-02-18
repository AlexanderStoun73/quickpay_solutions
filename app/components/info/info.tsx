import React from 'react'
import ReplyIcon from '@mui/icons-material/Reply'
import styles from './info.module.scss'
import Form from '../form/form'

export default function Information() {
	return (
		<section className={styles.info} id='info'>
			<div className='container'>
				<div className={styles.info__text}>
					<div className={styles.info__devider}>
						<article className={styles.info__title_text}>
							<h5 className='main_blue-text'>Request A Quote</h5>
							<h1 className='main_title'>
								Need A Free Quote? Please Feel Free to Contact Us
							</h1>
						</article>
						<h5 className={styles.info__text_desc}>
							<ReplyIcon className={styles.info__text_desc__icon} />
							Reply within 24 hours
						</h5>
						<div className={styles.info__about_text}>
							<ul style={{ marginBottom: '1.5rem' }}>
								<li>Looking for the best deal? Look no further!</li>
								<li>
									Our team is ready to provide you with a personalized info
									tailored to your needs.
								</li>
								<li>
									Whether you&apos;re searching for a cost-effective solution or
									a premium service, we&apos;ve got you covered.
								</li>
							</ul>
							<p style={{ marginBottom: '1.5rem' }}>
								Why choose us for your info request?
							</p>
							<ul className={styles.info__list_of_requirements}>
								<li>Extensive industry experience and expertise</li>
								<li>Competitive pricing without compromising quality</li>
								<li>Customized solutions to fit your specific requirements</li>
								<li>Prompt and reliable customer support</li>
								<li>Quick turnaround time on info requests</li>
							</ul>
							<ul style={{ marginBottom: '1.5rem' }}>
								<li>
									Don&apos;t hesitate to reach out to us and request a free info
									today.
								</li>
								<li>
									Our friendly team is eager to assist you and help you make an
									informed decision.
								</li>
								<li>
									info us now to get started on your next project or service.
								</li>
							</ul>
						</div>
					</div>
					<Form />
				</div>
			</div>
		</section>
	)
}
