import { UserData } from '@/types'
import axios from 'axios'
import {ContactFormData} from "@/app/contact/contact-form";

export const baseApi = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export const sendQuote = async (sendQuote: ContactFormData) => {
	const { name, email, service, message } = sendQuote
	const response = await baseApi.post('/send-email', {
		name,
		email,
		service,
		message,
	})
	return response.data
}
