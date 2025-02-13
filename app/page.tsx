import dynamic from 'next/dynamic'
const ChoiceApplication = dynamic(
	() => import('./components/choice-application/choice-application')
)
const About = dynamic(() => import('./about/page'))
const Decision = dynamic(() => import('@/app/components/decision/decision'))
const Service = dynamic(() => import('./service/page'))
const Information = dynamic(() => import('@/app/components/info/info'))

export default function Home() {
	return (
		<>
			<About />
			<Decision />
			<Service />
			<ChoiceApplication />
			<Information />
		</>
	)
}
