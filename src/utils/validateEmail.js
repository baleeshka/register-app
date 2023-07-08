export const validateEmail = (email, isBlur = false) => {
	if (!email) {
		return isBlur ? 'Поле не должно быть пустым' : null
	}

	if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
		return 'Неверная почта. Пожалуйста, введите ваш адрес электронной почты'
	}

	if (email.length > 40) {
		return 'Неверная почта. Должно быть не больше 40 символов'
	}

	if (email.length < 9) {
		return 'Неверная почта. Должно быть не меньше 9 символов'
	}

	return null
}
