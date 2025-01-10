import Link from 'next/link'
import scss from '../header.module.scss'
import CloseIcon from '@mui/icons-material/Close'

type IActivities = {
	active: boolean
	setActive: (isActive: boolean) => void
}

const Menu = ({ active, setActive }: IActivities) => {
	return (
		<div className={active ? `${scss.menu} ${scss.active}` : `${scss.menu}`}>
			<div className={scss.menu__content}>
				<div className={`${scss.menu_block} ${scss.close_btn}`}>
					<Link href={'/'}>
						<h1 className={scss.title}>Quickpay Solutions</h1>
					</Link>
					<CloseIcon onClick={() => setActive(false)} />
				</div>
				<ul className={scss.row}>
					<li>
						<Link onClick={() => setActive(false)} href='/'>
							Home
						</Link>
					</li>
					<li>
						<Link onClick={() => setActive(false)} href='/about'>
							About
						</Link>
					</li>
					<li>
						<Link onClick={() => setActive(false)} href='/service'>
							Services
						</Link>
					</li>
					<li>
						<Link onClick={() => setActive(false)} href='/contact'>
							Contact
						</Link>
					</li>
				</ul>
				<ul className={scss.row}>
					<li>
						<Link className={scss.link} href='tel:+996775580611'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
							>
								<path
									d='M20.475 16.2215V18.78C20.476 19.0175 20.4273 19.2526 20.3322 19.4703C20.237 19.6879 20.0975 19.8832 19.9224 20.0438C19.7474 20.2044 19.5408 20.3266 19.3158 20.4027C19.0908 20.4788 18.8524 20.5071 18.6158 20.4857C15.9915 20.2005 13.4707 19.3038 11.2558 17.8675C9.19523 16.5581 7.4482 14.8111 6.13881 12.7504C4.69749 10.5256 3.80053 7.99246 3.52059 5.35634C3.49928 5.1205 3.52731 4.88281 3.60289 4.6584C3.67848 4.43399 3.79996 4.22777 3.95961 4.05288C4.11925 3.87799 4.31357 3.73826 4.53018 3.64258C4.74679 3.5469 4.98094 3.49738 5.21774 3.49715H7.77626C8.19014 3.49308 8.59139 3.63964 8.90521 3.90953C9.21903 4.17941 9.42401 4.5542 9.48193 4.96403C9.58992 5.78282 9.79019 6.58675 10.0789 7.36051C10.1937 7.66576 10.2185 7.99751 10.1505 8.31644C10.0825 8.63537 9.92444 8.92812 9.69514 9.16L8.61204 10.2431C9.8261 12.3782 11.5939 14.1461 13.7291 15.3601L14.8122 14.277C15.044 14.0477 15.3368 13.8897 15.6557 13.8217C15.9747 13.7537 16.3064 13.7785 16.6117 13.8932C17.3854 14.182 18.1894 14.3822 19.0081 14.4902C19.4224 14.5487 19.8008 14.7574 20.0712 15.0766C20.3417 15.3958 20.4854 15.8032 20.475 16.2215Z'
									stroke='#121212'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								></path>
							</svg>
							+996 (775) 580 611
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Menu
