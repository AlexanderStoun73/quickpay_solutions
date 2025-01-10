import { Rubik } from 'next/font/google'
const Footer = dynamic(() => import('./components/footer/footer'))
const Header = dynamic(() => import('./components/header/header'))
const Banner = dynamic(() => import('./components/banner/banner'))
import '@/styles/globals.css'
import styles from '@/styles/page.module.scss'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Loader from './loading'

const rubik = Rubik({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={rubik.className}>
				<Suspense fallback={<Loader />}>
					<Header />
					<Banner />
					<main className={styles.container}>{children}</main>
					<Footer />
				</Suspense>
			</body>
		</html>
	)
}
