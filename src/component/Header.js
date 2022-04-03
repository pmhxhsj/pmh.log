import React, { Component } from 'react';
import styles from '../style/index.module.css';
import MainImage from '../SteadyLife.png';
import { Link } from 'react-router-dom';

const myHeader = () => {
  return (
    <header className={styles.Header}>
      <table className={styles.Table}>
        <thead>
          <tr>
            <th>
              <img src={MainImage} alt="SteadyLife Logo" width="150px" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to={"/"}>
                <button type="button">🏠 Dashboard</button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
            <Link to={"/Calendar"}>
              <button type="button">📅 Calendar</button>
            </Link>
            </td>
          </tr>
          <tr>
            <td>
            <Link to={"/Category"}>
              <button type="button">📑 Category</button>
            </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <table className={styles.Table}>
        <tbody>
          <tr>
            <td>
            <Link to={"/MyPage"}>
              <button type="button">💁🏻 MyPage</button>
            </Link>
            </td>
          </tr>
          <tr>
            <td>
            <Link to={"/Logout"}>
              <button type="button">🫂 Logout</button>
            </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </header>
  );
};

export default myHeader;
