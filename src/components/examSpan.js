import React from 'react';
import styles from './style.css';

function ExamSpan (props) {
  return (
    <span className={styles.span}>
      <span className={styles.id}>
        { props.data.id }
      </span>
      :
      <span className={styles.name}>
        { props.data.name }
      </span>
    </span>
  )
}

export default ExamSpan