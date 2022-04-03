import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import styles from '../style/index.module.css';

const edit = () => {
  return (<div>
    <Header />
    <div className={styles.Margin}>
      <h1>🏠 Edit</h1>
      <br />
      <Footer />
    </div>
  </div>)
};

export default edit;
