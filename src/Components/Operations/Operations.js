import React, { useState , useEffect } from 'react';
import './Operations.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Operations( { setBalance }) {

  const [inputAmount, setInputAmount] = useState('');
  const [inputVendor, setInputVendor] = useState('');
  const [inputCategory, setInputCategory] = useState('');
  const navigate = useNavigate()



  const updateBalance = async () => {
    let response = await axios.get("http://localhost:4000/balance");
    setBalance(response.data[0].totalAmount);
  };
  const handleAmountChange = (e) => {
    setInputAmount(e.target.value);
  };
  
  const handleVendorChange = (e) => {
    setInputVendor(e.target.value);
  };
  
  const handleCategoryChange = (e) => {
    setInputCategory(e.target.value);
  };


  const addTransaction = async (operations) => {
    let newInputAmount = inputAmount
    if(operations == "withdraw") {
      newInputAmount = inputAmount * -1
    }
    let response = await axios.post("http://localhost:4000/transaction", { amount : newInputAmount , vendor : inputVendor , category : inputCategory });
    if( response.status === 200 ){
      updateBalance()
      alert("Transaction Is Added")
      setInputAmount('')
      setInputVendor('')
      setInputCategory('')
      navigate(`/`)
    }
  
   
  }

  return (
    <div>
      <div className="insert-transaction">
      <h1>Insert Transactions</h1>
      <input type = "text" placeholder = "Transaction amount" value={inputAmount} onChange = {handleAmountChange}  />
      <input type = "text" placeholder = "Transaction vendor" value={inputVendor} onChange = {handleVendorChange} />
      <input type = "text" placeholder = "Transaction category" value={inputCategory} onChange = {handleCategoryChange}/>
      <button className="deposit-button" onClick={() => addTransaction()}>deposit</button>
      <button className="withdraw-button" onClick={() => addTransaction("withdraw")}>withdraw</button>
      </div>
    </div>
  )
}
