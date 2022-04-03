import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import styles from '../style/index.module.css';

const calander = () => {
  return (<div>
    <Header />
    <div className={styles.Margin}>
      <h1>📅 Calendar</h1>
      <br />
      <Footer />
    </div>
  </div>)
};
export default calander;
