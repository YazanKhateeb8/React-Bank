import axios from "axios";
import React, { useState , useEffect } from 'react';
import './Transactions.css';
import Transaction from '../Transactions/Transaction'

export default function Transactions({setBalance}) {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
      const getTransactions = async () => {
          let transactions = await axios.get('http://localhost:4000/transactions')
          setTransactions(transactions.data)
      }
      getTransactions()
  }, [])

  const updateBalance = async () => {
    let response = await axios.get("http://localhost:4000/balance");
    setBalance(response.data[0].totalAmount);
  };
  
    const removeTransaction = async (id) => {
      await axios.delete(`http://localhost:4000/transaction/${id}`)
      const newTransactions = transactions.filter(transaction => transaction._id !== id)
      setTransactions(newTransactions)
      updateBalance()
        
    }
   

   


  return (
      <div className="transactions">
        <h1>Transactions :</h1>
          {transactions.map((transaction) => (<Transaction transaction={transaction} removeTransaction={removeTransaction} /> ))}
      </div>
  );
}
