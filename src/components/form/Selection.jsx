import React from 'react'

const Selection = ({register, errors, id, labelText, children, rules}) => {
    return (
        <>
            <label htmlFor={id} className='form-label'>
                {rules?.required ? <span>*</span> : ""}
                {labelText}
            </label>
            <select  
                id={id}
                className={`form-select ${errors[id] ? "is-invalid" : ""}`}
                {...register(id, rules)}
            >
                {children}
            </select>
            {errors[id] && (
                <small className='invalid-feedback'>
                    {errors[id].message}
                </small>
            )}
        </>
    )
}

export default Selection