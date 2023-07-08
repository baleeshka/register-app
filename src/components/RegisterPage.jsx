import React, { useState, useRef, useEffect } from 'react'
import Form from './Form'
import {
	validateEmail,
	validateConfirmPassword,
	validatePassword,
} from '../utils'

const RegisterPage = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [emailError, setEmailError] = useState(null)
	const [passwordError, setPasswordError] = useState(null)
	const [confirmPasswordError, setConfirmPasswordError] = useState(null)

	const registerButtonRef = useRef(null)

	useEffect(() => {
		const isAllFieldsFilled = email && password && confirmPassword

		if (isAllFieldsFilled) {
			registerButtonRef.current.focus()
		}
	}, [email, password, confirmPassword])

	const sendFormData = formData => {
		console.log(formData)
	}

	const onSubmit = event => {
		event.preventDefault()

		if (!email || !password || !confirmPassword) {
			return
		}

		sendFormData({ email, password })
	}

	const onEmailChange = ({ target }) => {
		setEmail(target.value)

		const newError = validateEmail(target.value)
		setEmailError(newError)
	}

	const onEmailBlur = ({ target }) => {
		const newError = validateEmail(target.value, true)
		setEmailError(newError)
	}

	const onPasswordChange = ({ target }) => {
		setPassword(target.value)

		const newError = validatePassword(target.value)
		setPasswordError(newError)

		const confirmPasswordError = validateConfirmPassword(
			target.value,
			confirmPassword
		)
		setConfirmPasswordError(confirmPasswordError)
	}

	const onConfirmPasswordChange = ({ target }) => {
		setConfirmPassword(target.value)

		const confirmPasswordError = validateConfirmPassword(password, target.value)
		setConfirmPasswordError(confirmPasswordError)
	}

	const onPasswordBlur = ({ target }) => {
		const newError = validatePassword(target.value, true)
		setPasswordError(newError)
	}

	const onConfirmPasswordBlur = ({ target }) => {
		const confirmPasswordError = validateConfirmPassword(
			password,
			target.value,
			true
		)
		setConfirmPasswordError(confirmPasswordError)
	}

	return (
		<Form
			onSubmit={onSubmit}
			emailError={emailError}
			passwordError={passwordError}
			confirmPasswordError={confirmPasswordError}
			email={email}
			password={password}
			confirmPassword={confirmPassword}
			onEmailChange={onEmailChange}
			onEmailBlur={onEmailBlur}
			onPasswordChange={onPasswordChange}
			onConfirmPasswordChange={onConfirmPasswordChange}
			onPasswordBlur={onPasswordBlur}
			onConfirmPasswordBlur={onConfirmPasswordBlur}
			registerButtonRef={registerButtonRef}
		/>
	)
}

export default RegisterPage
