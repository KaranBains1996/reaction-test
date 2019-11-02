import React from 'react';
import styles from './Result.module.scss';
import Button from '@material-ui/core/Button';

const result = (props) => {
  const { accuracy, counter, totalTime } = props.score;
  const avgTime = parseFloat(totalTime / counter).toFixed(2);
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Result</h2>
      <div className={styles.content}>
        <div className={styles['content-text']}>
          <div className={styles['content-field']}>Accuracy</div>
          <div className={styles['content-value']}>{accuracy}/{counter}</div>
        </div>
        <div className={styles['content-text']}>
          <div className={styles['content-field']}>Average reaction time</div>
          <div className={styles['content-value']}>{avgTime} ms</div>
        </div>
        <Button variant="contained" color="primary" className={styles.btn} onClick={() => props.start()}>
          Retake Test
        </Button>
      </div>
    </div>
  );
}

export default result;
