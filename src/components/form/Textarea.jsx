import React from 'react'

const Textarea = ({register, errors, id, rows, labelText, rules, readOnly}) => {
    return (
        <>
            <label htmlFor={id} className='form-label'>
                {rules?.requried ? <span className=''>*</span> : ""}
                {labelText}
            </label>
            <textarea  
                id={id}
                type="text"
                className={`form-control ${errors[id] ? "is-invalid" : ""}`}
                autoComplete='off'
                rows={rows}
                readOnly={readOnly || false}
                {...register(id, rules)}
            >

            </textarea>
            {errors[id] && (
                <small className='invalid-feedback'>{errors[id].message}</small>
            )}
        </>
    )
}

export default Textarea