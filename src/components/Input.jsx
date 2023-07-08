import React from 'react'
import styles from './Form.module.css'

const Input = ({ name, type, id, placeholder, value, onChange }) => {
	return (
		<div className={styles.formGroup}>
			<label htmlFor={id}>{placeholder}:</label>
			<input
				name={name}
				type={type}
				id={id}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
			></input>
		</div>
	)
}

export default Input
