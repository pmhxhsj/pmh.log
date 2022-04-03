import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calander from './pages/Calendar';
import DashBoard from './pages/DashBoard';
import Edit from './pages/Edit';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>das</h2>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/Calendar" element={<Calander />} />
          <Route path="/Edit" element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
