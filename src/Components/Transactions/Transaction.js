import "./Transactions.css";

export default function Transaction({ transaction , removeTransaction }) {

  
  return (
    <div>
      <div className="transaction">
        <div className="transaction-category">
          <h3>{transaction.vendor}</h3>
          <h4>{transaction.category}</h4>
        </div>
        <div className="transaction-button">
          <label className={transaction.amount > 0 ? "deposit" : "withdraw"}>
            {transaction.amount}
          </label>
          <button className="delete-button" onClick={() => removeTransaction(transaction._id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}
