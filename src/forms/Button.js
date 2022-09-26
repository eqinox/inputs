import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  return (
    <div className={classes.buttonContainerStyle}>
    <button
      className={classes.button}
      type={props.type || 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
    </div>
  );
};

export default Button;