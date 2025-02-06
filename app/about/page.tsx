import React from 'react'
import Button from '@/app/components/button/button'
import Image from 'next/image'
import DoneIcon from '@mui/icons-material/Done'
import david from '@/public/ImageResize-Ecom_DavidLaid_Desktopcopy7_7_0798ee67-b547-46e0-94cb-13593794231b.webp'
import styles from '@/styles/components/about.module.scss'

export default function About() {
	return (
		<>
			<section className={styles.about}>
				<div className={styles.about__breaker}>
					<article className={styles.about__title_text}>
						<h5 className='main_blue-text'>About Us</h5>
						<h1 className='main_title'>
							Fresh IT Solutions: Innovative and Agile Services from a Dynamic
							Young Company
						</h1>
					</article>
					<div className={styles.about__paragraph}>
						<p>
							Quick Solutions is a young and dynamic company that offers
							innovative and agile services in the field of information
							technology. The company specializes in providing customized
							solutions to its clients by leveraging cutting-edge technologies
							and a team of highly skilled professionals. Quick Solutions
							benefits its clients in many ways. First and foremost, the
							company&apos;s agile approach ensures that its clients&apos; IT
							needs are met quickly and efficiently, allowing them to stay ahead
							of the competition. Additionally, Quick Solutions innovative
							solutions are designed to enhance the productivity, efficiency,
							and effectiveness of its clients&apos; businesses, resulting in
							increased profitability and growth. Finally, the company&apos;s
							focus on delivering exceptional customer service means that its
							clients receive the support they need to succeed in today&apos;s
							fast-paced and ever-changing business environment.
						</p>
					</div>
					<div className={styles.about__row}>
						<div className={styles.about__row_article}>
							<article className={styles.about__article}>
								<h5 className={styles.about__col_sm}>
									<span className={styles.about__icon}>
										<DoneIcon style={{ color: '#06A3DA' }} />
									</span>
									Trusted quality and integrity
								</h5>
								<h5 className={styles.about__col_sm}>
									<span className={styles.about__icon}>
										<DoneIcon style={{ color: '#06A3DA' }} />
									</span>
									Professional Staff
								</h5>
							</article>
							<article className={styles.about__article}>
								<h5 className={styles.about__col_sm}>
									<span className={styles.about__icon}>
										<DoneIcon style={{ color: '#06A3DA' }} />
									</span>
									24/7 Support
								</h5>
								<h5 className={styles.about__col_sm}>
									<span className={styles.about__icon}>
										<DoneIcon style={{ color: '#06A3DA' }} />
									</span>
									Fair Prices
								</h5>
							</article>
						</div>
						<Button
							// onClick={() => {
							// 	const element = document.getElementById('info')
							// 	element?.scrollIntoView({
							// 		behavior: 'smooth',
							// 	})
							// }}
							className={styles.about__button}
						>
							<span className={styles.about__button_text}>
								Request Information
							</span>
						</Button>
					</div>
				</div>
				<div className={styles.about__image}>
					<Image
						width={512}
						height={674}
						src={david}
						alt='David'
						loading='lazy'
					/>
				</div>
			</section>
		</>
	)
}
