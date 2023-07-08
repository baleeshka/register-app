import React from 'react'
import Input from './Input'
import styles from './Form.module.css'

const Form = ({
	onSubmit,
	emailError,
	passwordError,
	confirmPasswordError,
	email,
	password,
	confirmPassword,
	onEmailChange,
	onEmailBlur,
	onPasswordChange,
	onConfirmPasswordChange,
	onPasswordBlur,
	onConfirmPasswordBlur,
	registerButtonRef,
}) => {
	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={onSubmit}>
				{(emailError || passwordError || confirmPasswordError) && (
					<div className={styles.error}>
						{emailError || passwordError || confirmPasswordError}
					</div>
				)}
				<Input
					name='email'
					type='email'
					id='email'
					value={email}
					placeholder='Почта'
					onChange={onEmailChange}
					onBlur={onEmailBlur}
				/>
				<Input
					name='password'
					type='password'
					id='password'
					value={password}
					placeholder='Пароль'
					onChange={onPasswordChange}
					onBlur={onPasswordBlur}
				/>
				<Input
					name='ConfirmPassword'
					type='password'
					id='confirmPassword'
					value={confirmPassword}
					placeholder='Повторите пароль'
					onChange={onConfirmPasswordChange}
					onBlur={onConfirmPasswordBlur}
				/>
				<button
					ref={registerButtonRef}
					className={styles.registerButton}
					type='submit'
					disabled={emailError || passwordError || confirmPasswordError}
				>
					Зарегистрироваться
				</button>
			</form>
		</div>
	)
}

export default Form
