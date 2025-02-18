import { Rubik } from 'next/font/google'
const Footer = dynamic(() => import('./components/footer/footer'))
const Header = dynamic(() => import('./components/header/header'))
const Banner = dynamic(() => import('./components/banner/banner'))
import '@/styles/globals.css'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Loader from './loading'
import {Metadata} from "next";

const rubik = Rubik({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
	title: 'Quick Solutions',
	icons: '/QuickSolutions Logo.png',
	description: '...'
}

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
			<main>{children}</main>
			<Footer />
		</Suspense>
		</body>
		</html>
	)
}