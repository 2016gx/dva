import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <Link className={styles.link} to='/subjects'>智课网科目分类</Link>
      <Link className={styles.link} to='/examinations'>智课网考试分类</Link>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
