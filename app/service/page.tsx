import React from 'react'
import styles from '@/styles/components/service.module.scss'

// import ShieldIcon from '@mui/icons-material/Shield'
// import InsertChartIcon from '@mui/icons-material/InsertChart'
// import WebIcon from '@mui/icons-material/Web'
// import AdbIcon from '@mui/icons-material/Adb'
// import SearchIcon from '@mui/icons-material/Search'

import AI from '@/public/Service/ai-generated.jpg'
import Cloud from '@/public/Service/cloud-computing.jpg'
import Consulting from '@/public/Service/businessman.jpg'
import MobApplication from '@/public/Service/pexels-cottonbro-studio.jpg'
import Social from '@/public/Service/social.jpg'
import Security from '@/public/Service/cyber-security.png'
import Software from '@/public/Service/pexels-thisisengineering.jpg'
import IOT from '@/public/Service/internet-of-things.jpg'
import Sass from '@/public/Service/saas.jpeg'
import Image from 'next/image'

export default function Service() {
	return (
		<>
			<section className={styles.service}>
				<article className={styles.service__title_text}>
					<h5 className='main_blue-text'>Our Services</h5>
					<h1 className='main_title'>
						Custom IT Solutions for Your Successful Business
					</h1>
				</article>
				<div className={styles.service__card_image}>
					{[
						// {
						// 	icon: (
						// 		<ShieldIcon
						// 			className={styles.service__icon}
						// 			style={{ color: '#fff' }}
						// 		/>
						// 	),
						// 	title: 'Cyber Security',
						// 	description:
						// 		'Protect your digital assets with our cutting-edge cyber security solutions, safeguarding your business against evolving threats.',
						// },
						// {
						// 	icon: (
						// 		<InsertChartIcon
						// 			className={styles.service__icon}
						// 			style={{ color: '#fff' }}
						// 		/>
						// 	),
						// 	title: 'Data Analytics',
						// 	description:
						// 		'Unlock the power of data with our advanced analytics tools, gaining valuable insights to drive informed decisions and maximize your business potential.',
						// },
						// {
						// 	icon: (
						// 		<WebIcon
						// 			className={styles.service__icon}
						// 			style={{ color: '#fff' }}
						// 		/>
						// 	),
						// 	title: 'Web Development',
						// 	description:
						// 		'Elevate your online presence with our top-notch web development services, creating stunning websites that captivate your audience and drive tangible results.',
						// },
						// {
						// 	icon: (
						// 		<AdbIcon
						// 			className={styles.service__icon}
						// 			style={{ color: '#fff' }}
						// 		/>
						// 	),
						// 	title: 'Apps Development',
						// 	description:
						// 		'Transform your ideas into reality with our expert app development services, crafting innovative and user-friendly applications that revolutionize the way you engage with your customers.',
						// },
						// {
						// 	icon: (
						// 		<SearchIcon
						// 			className={styles.service__icon}
						// 			style={{ color: '#fff' }}
						// 		/>
						// 	),
						// 	title: 'SEO Optimization',
						// 	description:
						// 		"Boost your online visibility and outrank the competition with our comprehensive SEO optimization strategies, driving targeted traffic and maximizing your website's potential.",
						// },
						{
							image: (
								<Image
									width={416}
									height={416}
									src={AI}
									alt='Ai generated'
								/>
							),
						},
						{
							image: (
								<Image
									width={416}
									height={234}
									src={Cloud}
									alt='Cloud solutions'
								/>
							),
						},
						{
							image: (
								<Image
									width={416}
									height={270}
									src={Consulting}
									alt='Business consulting'
								/>
							),
						},
						{
							image: (
								<Image
									width={416}
									height={624}
									src={MobApplication}
									alt='Mobile Application'
								/>
							),
						},
						{
							image: (
								<Image
									width={416}
									height={277}
									src={Social}
									alt='social'
								/>
							),
						},
						{
							image: (
								<Image
									width={416}
									height={302}
									src={Security}
									alt='cyber security'
								/>
							),
						},
						{
							image: (
								<Image
									width={416}
									height={624}
									src={Software}
									alt='software engineering'
								/>
							),
						},
						{
							image: (
								<Image
									width={416}
									height={260}
									src={IOT}
									alt='internet of security'
								/>
							),
						},
						{
							image: (
								<Image
									width={416}
									height={277}
									src={Sass}
									alt='Sass development'
								/>
							),
						},
					].map((service, index) => (
						<article
							className={styles.service__grid_area}
							key={index}
						>
							{service.image}
						</article>
					))}
				</div>
			</section>
		</>
	)
}

{
	/* <article className={styles.service__card_inner}>
								<div className={styles.service__service_icon}>
									{service.icon}
								</div>
								<h4 className={styles.service__card_title}>{service.title}</h4>
								<p className={styles.service__card_description}>
									{service.description}
								</p>
							</article> */
}
