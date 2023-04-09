const express = require("express");
const router = express.Router();
const TransactionQuery = require("../utilites/databaseQuerys");
const transactionQuery = new TransactionQuery();

router.get("/transactions", async function (req, res) {
   
    try{
        const transactions = await transactionQuery.getTransactions() 
        res.status(200).send(transactions);
    }
    catch(err){
        res.status(400).send(err);
      }
  })

  router.get("/balance", async function (req, res) {
   
    try{
        const balance = await transactionQuery.getBalance() 
        res.status(200).send(balance);
    }
    catch(err){
        res.status(400).send(err);
      }
  })


  router.post("/transaction", async function (req, res) {
   const transaction = req.body
    try{
        await transactionQuery.addTransaction(transaction) 
        res.status(200).send(`the Transaction is Added `);
    }
    catch(err){
        res.status(400).send(err);
      }
  })


  router.delete("/transaction/:id", async function (req, res) {
    const transactionID = req.params.id;
    try{
        await transactionQuery.deleteTransaction(transactionID) 
        res.status(200).send(`The Transaction with ${transactionID} Deleted !`);
    }
    catch(err){
        res.status(400).send(err);
      }
  })  


  router.get("/breakdowns", async function (req, res) {
   
    try{
        const breakdowns = await transactionQuery.getBreakdowns() 
        res.status(200).send(breakdowns);
    }
    catch(err){
        res.status(400).send(err);
      }
  })

module.exports = router;