import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';


const Transaction = () => {
    const {transactions} = useContext(GlobalContext);
  return (
        <li className='bg-slate-200 border border-r-[3px] border-e-red-800 py-1 flex flex-row px-2'>
       <p className='mr-48'>
        {transactions.text}
        </p> 
         <span className=''>-400</span> 
    </li>
  )
}

export default Transaction