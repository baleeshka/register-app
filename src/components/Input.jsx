import React from 'react'
import styles from './Form.module.css'

const Input = ({ name, type, id, placeholder, register }) => {
	return (
		<div className={styles.formGroup}>
			<label htmlFor={id}>{placeholder}:</label>
			<input
				name={name}
				type={type}
				id={id}
				placeholder={placeholder}
				{...register}
			/>
		</div>
	)
}

export default Input
