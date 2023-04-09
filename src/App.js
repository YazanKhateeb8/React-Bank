import './App.css';
import React, { useState , useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Breakdowns from './Components/Breakdown/Breakdowns';
import Operations from './Components/Operations/Operations';
import Transactions from './Components/Transactions/Transactions';
import axios from "axios";

function App() {

  const [balance, setBalance] = useState([])

  useEffect(() => {
      const getBalance = async () => {
          let balance = await axios.get('http://localhost:4000/balance')
          setBalance(balance.data[0].totalAmount) 
      }
      getBalance()
  }, [])
  
  return (
    <Router>
      <div className="App">
        <Navbar  balance={balance} />
      </div>

      <Routes>
        <Route path="/" element={<Transactions setBalance={setBalance} />} />
        <Route path="/Operations" element={<Operations setBalance={setBalance} />}  />
        <Route path="/Breakdown" element={<Breakdowns  />} />
      </Routes>
    </Router>
  );
}

export default App;
