import React from 'react';


const Input = ({register, errors, id, type, labelText, rules, readOnly, placeholder, min, max}) => {

    return (
		<>
			<label 
				htmlFor={id} 
				className='form-label'
			>
				{rules?.required ? <span className=''>*</span> : ""}
				{labelText}
			</label>
			<input
				id={id}
				type={type}
				className={`form-control ${errors[id] ? "is-invalid" : ""}`}
				autoComplete='on'
				placeholder={placeholder}
				readOnly={readOnly || false}
				min={min}
				max={max}
				// disabled={disabled}
				{...register(id, rules)}
			/>
			{errors[id] && <small className='invalid-feedback'>{errors[id]?.message}</small>}
		</>
	);
}

export default Input;