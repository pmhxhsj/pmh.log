import React, { Component } from 'react';
import styles from '../style/index.module.css';
import MainImage from '../SteadyLife.png';
// eslint-disable-next-line react/react-in-jsx-scope
// eslint-disable-next-line arrow-body-style
const myHeader = () => {
  return (
    <header className={styles.Header}>
      <table className={styles.Table}>
        <thead>
          <th>
            <img src={MainImage} alt="SteadyLife Logo" width="150px" />
          </th>
        </thead>
        <tbody>
          <tr>
            <td>
              <button type="button">🏠 Dashboard</button>
            </td>
          </tr>
          <tr>
            <td>
              <button type="button">📅 Calendar</button>
            </td>
          </tr>
          <tr>
            <td>
              <button type="button">📑 Category</button>
            </td>
          </tr>
        </tbody>
      </table>
      <table className={styles.Table}>
        <tbody>
          <tr>
            <td>
              <button type="button">💁🏻 MyPage</button>
            </td>
          </tr>
          <tr>
            <td>
              <button type="button">🫂 Logout</button>
            </td>
          </tr>
        </tbody>
      </table>
    </header>
  );
};

export default myHeader;
