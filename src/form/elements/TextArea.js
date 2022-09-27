import React, { useContext } from 'react';

import { FormContext } from '../../FormContext';

import classes from './AllElements.module.css';

const TextArea = ({ id, placeholder, required }) => {
  const { handleChange } = useContext(FormContext)

  return (
    <div className={classes.input + ' ' + classes.contentInput}>
      <label className={classes.labelStyle} htmlFor={id}>{placeholder}</label>
      <div className={classes.responseErrorText}>
        <textarea
          placeholder={placeholder}
          name={id}
          className={classes.inputStyle}
          onChange={event => handleChange(id, event)}
          required={required}
        />
        <p className={classes.invalid + ' ' + classes.errorText}><span className={classes.fakeIcon}>i</span> {placeholder} is required</p>

      </div>
    </div>
  );
}

export default TextArea;