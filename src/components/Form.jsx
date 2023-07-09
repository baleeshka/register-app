import React from 'react'
import Input from './Input'
import styles from './Form.module.css'

const Form = ({
	onSubmit,
	emailError,
	passwordError,
	confirmPasswordError,
	registerButtonRef,
	register,
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
					placeholder='Почта'
					register={register('email')}
				/>
				<Input
					name='password'
					type='password'
					id='password'
					placeholder='Пароль'
					register={register('password')}
				/>
				<Input
					name='ConfirmPassword'
					type='password'
					id='confirmPassword'
					placeholder='Повторите пароль'
					register={register('confirmPassword')}
				/>
				<button
					className={styles.registerButton}
					type='submit'
					ref={registerButtonRef}
					disabled={!!emailError || !!passwordError || !!confirmPasswordError}
				>
					Зарегистрироваться
				</button>
			</form>
		</div>
	)
}

export default Form
