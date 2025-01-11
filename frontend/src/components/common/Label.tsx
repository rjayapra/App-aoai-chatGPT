import React, { useState } from 'react';
import styles from './Label.module.css';
interface LabelProps {
  text: string;
  htmlFor: string;
}

const Label: React.FC<LabelProps> = ({ text, htmlFor }) => {
  return (
    
    <div className={styles.labelContainer}>
    <label
      className={styles.label}
      htmlFor={htmlFor}>
      {text}
    </label>
    </div>
  );
};

export default Label;