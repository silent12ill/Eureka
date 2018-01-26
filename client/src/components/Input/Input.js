import React from 'react';
import classes from './Input.css';


const Input = (props) => {
  let inputElement = null;
    switch ( props.inputtype ) {
      case( 'input' ):
          inputElement = <input className={classes.InputElement} {...props.elementConfig} value={props.value} onChange={props.changed}/>;
          break;
      default:
          inputElement = <input className={classes.InputElement} {...props.elementConfig} value={props.value} onChange={props.changed}/>;
    }
    return (
      <div className={classes.Input}>
        <label className={classes.Label}>{props.label}</label>
        {inputElement}
      </div>
    );
};


export default Input;