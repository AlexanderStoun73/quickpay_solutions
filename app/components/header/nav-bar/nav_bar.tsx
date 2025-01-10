import React, { useState } from 'react'
import style from '../header.module.scss'
import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'
import Menu from '../menu/menu'
import { usePathname } from 'next/navigation'

const navigation = [
	{ id: 0, name: 'Home', href: '/' },
	{ id: 1, name: 'About', href: '/about' },
	{ id: 2, name: 'Services', href: '/service' },
	{ id: 3, name: 'Contact', href: '/contact' },
]

export default function NavBar() {
	const [menuActive, setMenuActive] = useState(false)
	const pathname = usePathname()

	return (
		<div className={style.navbar}>
			<div className={style.navbar__space}>
				<Link href={'/'}>
					<h3 className={style.navbar__title}>Quickpay Solutions</h3>
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
