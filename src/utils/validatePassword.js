export const validatePassword = (password, isBlur = false) => {
	if (!password) {
		return isBlur ? 'Поле не должно быть пустым' : null
	}

	if (
		!/^(?=.*[a-zа-яё0-9])(?=.*[A-ZА-ЯЁ])(?=.*\d)(?=.*[@$!%*?&])[A-Za-zА-Яа-яёЁ\d@$!%*?&]{8,}$/.test(
			password
		)
	) {
		return 'Неверный пароль. Пароль должен содержать как минимум 8 символов, одну строчную букву, одну заглавную букву, одну цифру и один специальный символ.'
	}

	return null
}
