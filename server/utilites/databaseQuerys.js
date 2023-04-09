const Transaction = require("../model/transactionSchema");



class TransactionQuery {
    constructor() {}
  
    getTransactions() {
        return Transaction.find({}).sort({date : -1});
    }

    deleteTransaction(id){
        return Transaction.findByIdAndDelete({_id : id})
    }

    async addTransaction(transaction){
        const newTransaction = new Transaction(transaction);
        newTransaction.date = new Date()
        try {
            const savedTransaction = await newTransaction.save();
            console.log('Transaction saved:', savedTransaction);
        } catch (err) {
            console.error('Error saving transaction:', err);
        }
    }

    getBalance() {
        return Transaction.aggregate([
            {
               $group: {
                  _id: "total",
                  totalAmount: { $sum: "$amount" }
               }
            }
         ])
    }


    getBreakdowns() {
        return Transaction.aggregate([
            {
              $group: {
                _id: "$category",
                total: { $sum: "$amount" }
              }
            }
          ])
          
    }
  
  }
  
  module.exports = TransactionQuery;
  