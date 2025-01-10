'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../components/button/button'
import styles from '@/styles/components/contact.module.scss'
import {useSendEmail} from "@/app/hook/billing.hook";
import {UserData} from "@/types";

export type ContactFormData = {
	name: string
	email: string
	service: 'web development' | 'apps development'
	message: string
}

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<ContactFormData>()


    const { mutateAsync: sendRequest, loading } = useSendEmail()

    const onSubmit = async (data: ContactFormData) => {
        try {
            await sendRequest(data)
        } catch {
            console.error('Failed to send request')
        }
    }
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<div style={{ marginBottom: '1rem' }}>
				<input
					type='text'
					id='name'
					{...register('name', { required: 'Name is required' })}
					className={styles.form__input}
					placeholder='Your Name'
				/>
				{errors.name && (
					<p className={styles.form__error}>{errors.name.message}</p>
				)}
			</div>

			<div style={{ marginBottom: '1rem' }}>
				<input
					type='email'
					id='email'
					{...register('email', {
						required: 'Email is required',
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: 'Invalid email address',
						},
					})}
					placeholder='Your Email'
					className={styles.form__input}
				/>
				{errors.email && (
					<p className={styles.form__error}>{errors.email.message}</p>
				)}
			</div>

			<div style={{ marginBottom: '1rem' }}>
				<input
					type='text'
					id='name'
					{...register('service', { required: 'Name is required' })}
					className={styles.form__input}
					placeholder='Subject'
				/>
				{errors.name && (
					<p className={styles.form__error}>{errors.name.message}</p>
				)}
			</div>

			<div style={{ marginBottom: '1rem' }}>
				<textarea
					id='message'
					rows={4}
					{...register('message', {
						required: 'Message is required',
						minLength: {
							value: 10,
							message: 'Message must be at least 10 characters',
						},
						maxLength: {
							value: 500,
							message: 'Message must not exceed 500 characters',
						},
					})}
					placeholder='Message'
					className={styles.form__text_area}
				/>
				{errors.message && (
					<p className={styles.form__error}>{errors.message.message}</p>
				)}
			</div>

			<Button
				type='submit'
				disabled={isSubmitting}
				className={styles.form__button}
			>
				{isSubmitting ? (
					'Submitting...'
				) : (
					<>
						<span className={styles.form__button_text}>
							Request Information
						</span>
					</>
				)}
			</Button>
		</form>
	)
}
