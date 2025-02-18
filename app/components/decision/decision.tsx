import React from 'react'
import styles from './decision.module.scss'

import WidgetsIcon from '@mui/icons-material/Widgets'
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import PhoneIcon from '@mui/icons-material/Phone'

import Image from 'next/image'
import david from '@/public/jordan.jpg'
import FadeInOnScroll from '@/ui/FadeInOnScroll'

export default function Decision() {
	return (
		<section className={styles.decision}>
			<FadeInOnScroll direction='left'>
				<div className='container'>
					<article className={styles.title_text}>
						<h5 className={`main_blue-text`}>Why choose us</h5>
						<h1 className={`main_title ${styles.title_width}`}>
							We Are Here To Grow Your Business Exponentially
						</h1>
					</article>
					<div className={styles.list_cards}>
						<div className={styles.card_description_block}>
							<article className={styles.card}>
								<span className={styles.icon}>
									<WidgetsIcon
										style={{ color: '#fff' }}
										className={styles.svg}
									/>
								</span>
								<h5 className={styles.card_title}>Best In Industry</h5>
								<p className={styles.card_desc}>
									Discover the pinnacle of the industry with our unparalleled
									solutions that will help you achieve success.
								</p>
							</article>
							<article className={styles.card}>
								<span className={styles.icon}>
									<MilitaryTechIcon
										style={{ color: '#fff' }}
										className={styles.svg}
									/>
								</span>
								<h5 className={styles.card_title}>Award Winning</h5>
								<p className={styles.card_desc}>
									Embark on a journey with us as we strive for excellence,
									aiming to achieve award-winning status in delivering
									exceptional products/services
								</p>
							</article>
						</div>
						<div className={styles.centered_image}>
							<Image
								width={272}
								height={350}
								src={david}
								alt=''
								loading='lazy'
							/>
						</div>
						<div className={styles.card_description_block}>
							<article className={styles.card}>
								<span className={styles.icon}>
									<ManageAccountsIcon
										style={{ color: '#fff' }}
										className={styles.svg}
									/>
								</span>
								<h5 className={styles.card_title}>Professional Staff</h5>
								<p className={styles.card_desc}>
									Our team of highly skilled professionals is dedicated to
									delivering exceptional service tailored to meet your specific
									needs.
								</p>
							</article>
							<article className={styles.card}>
								<span className={styles.icon}>
									<PhoneIcon style={{ color: '#fff' }} className={styles.svg} />
								</span>
								<h5 className={styles.card_title}>24/7 Support</h5>
								<p className={styles.card_desc}>
									Experience peace of mind with our round-the-clock support,
									ensuring prompt assistance whenever you need it
								</p>
							</article>
						</div>
					</div>
				</div>
			</FadeInOnScroll>
		</section>
	)
}
