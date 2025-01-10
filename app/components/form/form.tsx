'use client'
import { useForm } from 'react-hook-form'
import styles from './form.module.scss'
import { useSendEmail } from '@/app/hook/billing.hook'
import { UserData } from '@/types'

export default function Form() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<UserData>()

	const { mutateAsync: sendRequest, loading } = useSendEmail()

	const onSubmit = async (data: UserData) => {
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
				<select
					id='service'
					{...register('service', { required: 'Please select a service' })}
					className={styles.form__selector}
				>
					<option value=''>Select a service</option>
					<option value='web development'>Web Development</option>
					<option value='apps development'>Apps Development</option>
				</select>
				{errors.service && (
					<p className={styles.form__error}>{errors.service.message}</p>
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

			<button type='submit' disabled={loading} className={styles.form__button}>
				{loading ? (
					'Submitting...'
				) : (
					<>
						<span className={styles.form__button_span}>
							Request Information
						</span>
					</>
				)}
			</button>
		</form>
	)
}
