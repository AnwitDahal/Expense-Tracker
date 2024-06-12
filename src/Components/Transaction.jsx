import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const Transaction = ({ transaction }) => {
  const {deleteTransaction}=useContext(GlobalContext)
  const sign = 0 > transaction.amount ? "-" : "+";
  const border = sign == "-" ? "border-e-red-800" : "border-e-green-400";
  return (
    <div className="flex group">
      <li
        className={`bg-slate-200 border w-[18rem] border-r-[3px] ${border} py-1 flex px-2 justify-between my-2 `}
      >
        <p className="">{transaction.text}</p>
        <span className="">
          {sign} ${Math.abs(transaction.amount)}
        </span>
      </li>
        <button className="px-2 my-2 text-white bg-red-600 hidden group-hover:block"
        onClick={()=>deleteTransaction(transaction.id)}>
          X
        </button>
    </div>
  );
};
export default Transaction;
