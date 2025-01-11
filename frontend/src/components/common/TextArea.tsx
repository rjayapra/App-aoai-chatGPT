import React, { useState , useEffect} from 'react';
import styles from './TextArea.module.css';
interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  cols?: number;
}

const TextArea: React.FC<TextAreaProps> = ({ value, onChange, placeholder, rows = 2, cols = 30 }) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    //onChange(event.target.value);
    const newValue = event.target.value;
    onChange(newValue);
    localStorage.setItem('systemMessage', newValue);
  };

  useEffect(() => {
    const savedMessage = localStorage.getItem('systemMessage');
    if (savedMessage) {
      onChange(savedMessage);
    }
  }, [onChange]);

  return (
    <div className={styles.textAreaContainer}>
    <textarea
      className={styles.textArea}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      rows={rows}
      cols={cols}
    />
    </div>
  );
};

export default TextArea;