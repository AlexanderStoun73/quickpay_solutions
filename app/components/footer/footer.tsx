import React from 'react'
import styles from './footer.module.scss'
import PlaceIcon from '@mui/icons-material/Place'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Link from 'next/link'
import Image from 'next/image'
import usFlag from '@/public/us-flag.png'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__nav}>
				<div className={styles.footer__row}>
					<div className={styles.footer__description}>
						<div className={styles.footer__primary}>
							<h5 className={styles.footer__title}>Quick Solutions</h5>
							<ul className={styles.footer__text}>
								<li>Looking for the best deal? Look no further!</li>
								<li>
									Our team is ready to provide you with a personalized quote
									tailored to your needs.
								</li>
								<li>
									Whether you&apos;re searching for a cost-effective solution or
									a premium service, we&apos;ve got you covered.
								</li>
							</ul>
						</div>
					</div>
					<div className={styles.footer__nav_links}>
						<div className={styles.footer__nav_col}>
							<div className={styles.footer__nav_title}>
								<h3>Get In Touch</h3>
							</div>
							<ul className={styles.footer__nav_list}>
								<li>
									<Image
										src={usFlag}
										alt="US Flag"
										width={40}
										height={22}
										className={styles.footer__flag}
									/>
									<PlaceIcon style={{ color: '#06A3DA', marginLeft: '4px' }} />
									<Link href=''>Oxford, NJ, USA</Link>
								</li>
								<li>
									<MailOutlineIcon style={{ color: '#06A3DA' }} />
									<Link href='mailto:order@qcksolve.us'>order@qcksolve.us</Link>
								</li>
							</ul>
						</div>
						<div className={styles.footer__nav_col}>
							<div className={styles.footer__nav_title}>
								<h3>Quick Links</h3>
							</div>
							<ul className={styles.footer__nav_list}>
								<li>
									<ArrowForwardIcon style={{ color: '#06A3DA' }} />
									<Link href='/'>Home</Link>
								</li>
								<li>
									<ArrowForwardIcon style={{ color: '#06A3DA' }} />
									<Link href='/about'>About Us</Link>
								</li>
								<li>
									<ArrowForwardIcon style={{ color: '#06A3DA' }} />
									<Link href='/service'>Our Services</Link>
								</li>
								<li>
									<ArrowForwardIcon style={{ color: '#06A3DA' }} />
									<Link href='/contact'>Contact Us</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.footer__rights}>
				<div className={styles.footer__inner}>
					<div className={styles.footer__col_12}>
						<p>
							©{' '}
							<Link className={styles.footer__inner_link} href='/'>
								Quick Solutions
							</Link>
							. All Rights Reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
