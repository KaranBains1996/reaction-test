import React from 'react';
import styles from './Home.module.scss';
import metric from './metrics.svg';
import Button from '@material-ui/core/Button';

const home = (props) => {
        const {start} = props;
        return (
            <div className={styles.wrapper}>
                <h1 className={styles.heading}>Test your reflexes</h1>
                <div className={styles.content}>
                    <p className={styles.p}>
                        Measure how fast your reflexes are by putting them through a small test. This test measures how fast you can react to changes.
                    </p>
                    <img src={metric} alt="metrics" className={styles.illus} />
                    <div className={styles['btn-ctn']}>
                        <Button variant="contained" color="primary" className={styles.btn} onClick={() => start()}>
                            Start Test
                        </Button>
                    </div>
                </div>
            </div>
        );
}

export default home;
