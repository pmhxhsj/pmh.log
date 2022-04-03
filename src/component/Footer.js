/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import styles from '../style/index.module.css';
// eslint-disable-next-line react/react-in-jsx-scope
// eslint-disable-next-line arrow-body-style
const myFooter = () => {
  function openLink() {
    alert('pmhxxhsj@gmail.com');
  }
  return (
    <footer className={styles.Footer}>
      <p>
        <a href="#" onClick={openLink}>
          Email
        </a>
        &nbsp;|&nbsp;
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
