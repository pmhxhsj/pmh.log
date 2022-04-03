import React, { Component } from 'react';
import styles from '../style/index.module.css';

const myFooter = () => {
  return (
    <footer className={styles.Footer}>
      <p>
        <a href="https://parkparkpark.tistory.com">Blog</a>
        &nbsp;|&nbsp;
        <a href="https://github.com/pmhxhsj">Github</a>
        <br />
        <span>Copyright 2022. Wony. All Rights Reserved.</span>
      </p>
    </footer>
  );
};

export default myFooter;
