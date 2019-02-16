import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <Link to='/subjects'>智课网科目</Link>
      <Link to='/examinations'>智课网考试</Link>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
