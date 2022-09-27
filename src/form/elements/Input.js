import React, { useContext } from 'react';

import { FormContext } from '../../FormContext';

import classes from './AllElements.module.css';

const Input = ({ id, placeholder, required }) => {
  const { handleChange } = useContext(FormContext)

  let inputType = 'text';
  let pattern = '';

  if (id === 'phone') {
    inputType = 'tel';
    pattern = "[0-9]{3}-[0-9]{2}-[0-9]{3}";
  }

  if (id.toLowerCase() === 'email') {
    inputType = 'email';
    pattern = "^[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  }

  return (
    <div className={classes.input + ' ' + classes.contentInput}>
      <label className={classes.labelStyle} htmlFor={id}>{placeholder}</label>
      <div className={classes.responseErrorText}>
        <input
          placeholder={placeholder}
          type={inputType}

          {...(pattern ? { pattern: `${pattern}` } : {})}

          name={id}
          className={classes.inputStyle}
          onChange={event => handleChange(id, event)}
          required={required}
        />
        <p className={classes.invalid + ' ' + classes.errorText}><span className={classes.fakeIcon}>i</span> {placeholder} is required.
          {pattern && <span> Format not match - {pattern} </span>}
        </p>


      </div>
    </div>
  );
}

export default Input;