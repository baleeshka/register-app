export const validateConfirmPassword = (
	password,
	confirmPassword,
	isBlur = false
) => {
	if (!confirmPassword) {
		return isBlur ? 'Поле не должно быть пустым' : null
	}

	if (password !== confirmPassword) {
		return 'Пароли не совпадают'
	}

	return null
}
