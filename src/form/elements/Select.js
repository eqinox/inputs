import React, { useContext } from 'react';

import { FormContext } from '../../FormContext';

import classes from './AllElements.module.css';

const Select = ({ id, placeholder, required, options }) => {
    const { handleChange } = useContext(FormContext)

    return (
        <div className={classes.input + ' ' + classes.contentInput}>
            <label className={classes.labelStyle} htmlFor={id}>{placeholder}</label>
            <div className={classes.responseErrorText}>
                <select
                    className={classes.inputStyle}
                    placeholder={placeholder}
                    onChange={event => handleChange(id, event)}
                    name={id}
                    required={required}
                >
                    {options.map((option, i) => (<option key={i} value={option}>
                        {option}
                    </option>))}
                </select>

                <p className={classes.invalid + ' ' + classes.errorText}><span className={classes.fakeIcon}>i</span> {placeholder} is required</p>

            </div>
        </div>
    );
}

export default Select;