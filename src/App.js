import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import styles from './style/index.module.css';
import DashImage from './SteadyLife_Dash.png';

function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.Margin}>
        <h1>🏠 Dash Board</h1>
        <br />
        <img src={DashImage} alt="dashImage" width="800px" />
        <div className={styles.MainDiv}>
          <div>das</div>
          <div>das</div>
          <div>das</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
