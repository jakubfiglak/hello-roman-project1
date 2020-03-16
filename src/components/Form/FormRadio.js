import React from "react";
import styles from "./FormRadio.module.scss";

const Radio = ({ id, checked, changeFn, children }) => (
  <label htmlFor={id} className={styles.radio}>
    <input
      type="radio"
      name={id}
      id={id}
      checked={checked}
      onChange={changeFn}
    />
    <div className={styles.radioButton}></div>
    {children}
  </label>
);

export default Radio;
