import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={classes.input + ' ' + classes.contentInput}>
      <label className={classes.labelStyle} htmlFor={props.input.id}>{props.placeholder}</label>
      <div className={classes.responseErrorText}>
      <input className={classes.inputStyle} onChange={props.changeValue}  {...props.input} onBlur={props.onBlur} />
      {props.hasError && <p className={classes.errorText}>{props.placeholder} must not be empty</p>}
      </div>
    </div>
  );
}

export default Input;