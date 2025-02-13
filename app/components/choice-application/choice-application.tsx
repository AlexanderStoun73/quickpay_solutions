import React from 'react'
import styles from './choice.module.scss'

export default function ChoiceApplication() {
	return (
		<section className={styles.why_choose}>
			<h2 className={`main_title ${styles.why_choose__strip_title}`}>
				Why Choose Quick Solutions
			</h2>
			<p className={styles.why_choose__paragraph}>
				We prioritize your objectives and challenges to drive tangible results
				and foster business growth. Trust in our innovative and reliable IT
				services to transform your business in the digital era.
			</p>
			<div className={styles.why_choose_columns}>
				<div className={styles.why_choose_column}>
					{[
						{
							title: 'Expertise and Experience',
							description:
								'Our team of skilled professionals has extensive experience and expertise in various technologies and industries, ensuring the delivery of high-quality and reliable IT solutions.',
						},
						{
							title: 'Innovation and Technology Leadership',
							description:
								'We are committed to staying at the forefront of technological advancements and continuously innovating our services to help our clients adapt to new challenges and opportunities in the digital landscape.',
						},
						{
							title: 'Training',
							description:
								'We believe in imparting modern and best in class training to both aspiring graduates and talented professionals to keep them abreast with changing needs of the competitive market place',
						},
					].map((item, index) => (
						<div key={index} className={styles.why_choose_item}>
							<h3>{item.title}</h3>
							<p>{item.description}</p>
						</div>
					))}
				</div>

				<div className={styles.why_choose_column}>
					{[
						{
							title: 'Client-Centric Approach',
							description:
								"We prioritize our clients' needs and objectives, and collaborate closely with them to develop customized solutions that align with their business goals and drive measurable results.",
						},
						{
							title: 'Quality and Reliability',
							description:
								'We are dedicated to delivering high-quality and reliable IT services, maintaining the highest standards of excellence, and ensuring customer satisfaction.',
						},
						{
							title: 'Proven Track Record',
							description:
								'With a strong history of successful IT projects and happy clients, Quick Solutions is recognized as a trusted IT service provider. Our client success stories and case studies showcase our expertise in delivering high-quality, innovative IT solutions that foster business growth and success.',
						},
					].map((item, index) => (
						<div key={index} className={styles.why_choose_item}>
							<h3>{item.title}</h3>
							<p>{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
