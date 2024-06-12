import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const positive = transactions
  .filter(transaction=> transaction.amount > 0)
  .map(transactions=> transactions.amount)
  const income = positive.reduce((a,b) => {
  return a+b;
  },0);
  const negative = transactions
  .filter(transaction=> transaction.amount < 0)
  .map(transactions=> transactions.amount)
  const expense = negative.reduce((a,b)=>{
    return a+b;
  },0);
  console.log(expense)
  return (
    <div className="flex flex-row my-7 bg-slate-200 py-4 px-14">
      <div className="flex flex-col justify-center items-center mr-14">
        <h1>Income</h1>
        <p className="text-green-400">${income}</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1>Expense</h1>
        <p className="text-red-800">${Math.abs(expense)}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
