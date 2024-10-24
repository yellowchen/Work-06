import React from 'react';

const Radio = ({register, name, id, labelText, value, defaultChecked}) => {
    return (
        <div className='form-check'>
            <input 
                type="radio"
                className="form-check-input"
                id={id}
                value={value}
                defaultChecked={defaultChecked}
                {...register(name)}
            />
            <label htmlFor={id} className="form-check-label">
                {labelText}
            </label>
        </div>
    )
}

export default Radio