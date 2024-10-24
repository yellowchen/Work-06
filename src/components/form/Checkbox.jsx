import React from 'react'

const Checkbox = ({register, errors, id, labelText, rules, disabled}) => {
    return (
        <div className='form-check'>
            <input 
                type="checkbox"
                className={`form-check-input ${errors[id] && 'is-invalid'}`} 
                id={id}
                disabled={disabled || false}
                {...register(id, rules)}
            />
            <label htmlFor={id} className='form-check-label'>
                {labelText}
            </label>
            {errors[id] && (
                <small className='invalid-feedback'>
                    {errors[id].message}
                </small>
            )}
        </div>
    )
}

export default Checkbox