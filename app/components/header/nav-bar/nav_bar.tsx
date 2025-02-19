import React, {useEffect, useState} from 'react'
import style from '../header.module.scss'
import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'
import Menu from '../menu/menu'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import quickSolveImage from '@/public/QuickSolutions_logo.png'
import AnimatedFlag from '../../../../ui/flag/canvas'

const navigation = [
	{ id: 0, name: 'Home', href: '/' },
	{ id: 1, name: 'About', href: '/about' },
	{ id: 2, name: 'Services', href: '/service' },
	{ id: 3, name: 'Contact', href: '/contact' },
]

export default function NavBar() {
	const [menuActive, setMenuActive] = useState(false)
	const pathname = usePathname()
	const [isPaused, setIsPaused] = useState(false)

	useEffect(() => {
		const interval = setInterval(() => {
			setIsPaused(true)
			setTimeout(() => {
				setIsPaused(false)
			}, 2000) // Пауза на 2 секунды
		}, 5000) // Вращение 3 секунды + пауза 2 секунды

		return () => clearInterval(interval)
	}, [])

	return (
		<div className={style.navbar}>
			<div className={style.navbar__space}>
				<Link href={'/'} className={style.logo_link}>
					<div className={style.logo}>
						<Image
							src={quickSolveImage}
							alt='Quick Solutions Logo'
							width={50}
							height={50}
							priority
							className={`${style.logo_image} ${isPaused ? style.paused : ''}`}
						/>
						<div className={style.logo_text}>
							<p className={style.logo_text_up}>quick solutions</p>
							<p className={style.logo_text_lower}>it services</p>
						</div>
					</div>
					<div className={style.animatedFlag}>
						{/*<AnimatedFlag />*/}
					</div>
				</Link>
				<nav>
					<ul className={style.navbar__navList}>
						{navigation.map(item => (
							<li
								key={item.id}
								className={`${
									pathname === item.href
										? `${style.navbar__selected} ${style.navbar__list}`
										: `${style.navbar__list}`
								}`}
							>
								<Link href={item.href}>{item.name}</Link>
							</li>
						))}
					</ul>
				</nav>
				<div
					onClick={() => {
						setMenuActive(!menuActive)
					}}
					className={
						menuActive
							? `${style.menuButton} ${style.active}`
							: `${style.menuButton}`
					}
					aria-label='menu'
				>
					<MenuIcon style={{ color: '#06a3da' }} />
				</div>
			</div>
			<Menu active={menuActive} setActive={setMenuActive} />
		</div>
	)
}
