import React from 'react';

import classes from './Input.module.css';

const TextArea = (props) => {
  return (
    <div className={classes.input  + ' ' + classes.contentInput}>
      <label className={classes.labelStyle} htmlFor={props.input.id}>{props.placeholder}</label>
      <textarea onChange={props.changeValue} {...props.input} onBlur={props.onBlur} />
      {props.hasError && <p className={classes.errorText}>{props.placeholder} must not be empty</p>}
    </div>
  );
}

export default TextArea;