import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.placeholder}</label>
      <input onChange={props.changeValue}  {...props.input} onBlur={props.onBlur} />
      {props.hasError && <p className={classes.errorText}>{props.placeholder} must not be empty</p>}
    </div>
  );
}

export default Input;