import { UserData } from '@/types'
import { useState } from 'react'
import { sendQuote } from '../api/billingApi'
import {ContactFormData} from "@/app/contact/contact-form";

export const useSendEmail = () => {
	const [loading, setLoading] = useState(false)
	const [userData, setUserData] = useState<UserData>()

	const mutateAsync = async (userData: ContactFormData) => {
		setLoading(true)
		try {
			const response = await sendQuote(userData)
			setUserData(userData)
			setLoading(false)
			return response
		} catch {
			setLoading(false)
		}
	}

	return {
		mutateAsync,
		loading,
		userData,
	}
}
