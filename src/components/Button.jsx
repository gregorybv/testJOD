import React from 'react';
import classNames from 'clsx';
import styles from '../styles/Button.module.css';

const Button = ({ children, color = 'default', variant = 'button', size = 'standard', href, onClick }) => {
  const classes = classNames(styles.button, styles[color], styles[variant], styles[size]);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} type='button'>
      {children}
    </button>
  );
};

export default Button;
