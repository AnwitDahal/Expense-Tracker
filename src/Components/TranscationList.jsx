import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Transaction from "./Transaction";

const TranscationList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h1>History</h1>
      <hr />
      <ul>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TranscationList;
