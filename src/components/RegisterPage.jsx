import React, { useEffect, useRef } from 'react'
import Form from './Form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

const RegisterPage = () => {
	const fieldsSchema = yup.object({
		email: yup
			.string()
			.required('Email не введен.')
			.email('Некорректный формат email.'),
		password: yup
			.string()
			.required('Пароль не введён.')
			.min(8, 'Пароль слишком короткий. Минимум - 8 символов.')
			.matches(
				/^(?=.*[a-zа-яё])(?=.*[A-ZА-ЯЁ])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
				'Пароль должен содержать строчную и заглавную букву, минимум одну цифру и спец. символ.'
			),
		confirmPassword: yup
			.string()
			.required('Подтверждение пароля обязательно.')
			.oneOf([yup.ref('password')], 'Пароли должны совпадать.'),
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: '',
		},
		resolver: yupResolver(fieldsSchema),
	})

	const emailError = errors.email?.message
	const passwordError = errors.password?.message
	const confirmPasswordError = errors.confirmPassword?.message

	const registerButtonRef = useRef()

	useEffect(() => {
		if (
			Object.keys(errors).length === 0 &&
			emailError === undefined &&
			passwordError === undefined &&
			confirmPasswordError === undefined
		) {
			registerButtonRef.current.focus()
		}
	}, [errors, emailError, passwordError, confirmPasswordError])

	const sendFormData = formData => {
		console.log(formData)
	}

	return (
		<Form
			onSubmit={handleSubmit(sendFormData)}
			emailError={emailError}
			passwordError={passwordError}
			confirmPasswordError={confirmPasswordError}
			registerButtonRef={registerButtonRef}
			register={register}
		/>
	)
}

export default RegisterPage
