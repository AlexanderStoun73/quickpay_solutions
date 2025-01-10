'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/scrollbar'
// import 'swiper/css/navigation'
import style from './banner.module.scss'
import { Autoplay, EffectFade } from 'swiper/modules'
import Image from 'next/image'
import one from '@/public/carousel_two.jpg'
import david from '@/public/14741719ee55741e8dd45eb0256ab52c.jpg'
import NavBar from '../header/nav-bar/nav_bar'
import Link from 'next/link'

export default function Banner() {
	return (
		<div className={style.banner}>
			<NavBar />
			<Swiper
				modules={[Autoplay, EffectFade]}
				effect={'fade'}
				loop={true}
				// navigation={true}
				spaceBetween={50}
				speed={1000}
				slidesPerView={1}
				autoplay={{ delay: 10000 }}
			>
				<SwiperSlide className={style.banner__swiper_slide}>
					<Image
						className={style.banner__background_image}
						height={685}
						src={one}
						alt='Chaos'
						loading='lazy'
					/>
				</SwiperSlide>
				<SwiperSlide className={style.banner__swiper_slide}>
					<Image
						className={style.banner__background_image}
						height={685}
						src={david}
						alt='King'
						loading='lazy'
					/>
				</SwiperSlide>
				<div className={style.banner__text_wrapper}>
					<h5 className={style.banner__title}>Creative & Innovative</h5>
					<h1 className={style.banner__main_title}>
						Creative & Innovative Digital Solution
					</h1>
					<div className={style.banner__buttons}>
						<Link
							className={`${style.banner__link} ${style.banner__button} ${style.banner__border}`}
							href='/quote'
						>
							<span style={{ zIndex: '2' }}>Free Quote</span>
						</Link>
						<Link
							className={`${style.banner__link} ${style.banner__button} ${style.banner__naked}`}
							href='/contact'
						>
							<span style={{ zIndex: '2' }}>Contact Us</span>
							<svg>
								<rect x='0' y='0' fill='none' width='100%' height='100%' />
							</svg>
						</Link>
					</div>
				</div>
				<div className={style.banner__background} />
			</Swiper>
		</div>
	)
}
