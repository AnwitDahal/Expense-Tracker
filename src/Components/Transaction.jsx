import React from "react";

const Transaction = ({ transaction }) => {
  return (
    <li className="bg-slate-200 border w-[18rem] border-r-[3px] border-e-red-800 py-1 flex flex-row px-2">
      <div className="flex ">
        <p className="">{transaction.text}</p>
        <span className="">{transaction.amount}</span>
      </div>
    </li>
  );
};
Hello world
export default Transaction;
