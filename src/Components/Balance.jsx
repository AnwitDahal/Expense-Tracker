import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

export const Balance = () => {
  const {transactions}=useContext(GlobalContext);
  
  const total=transactions.map(transactions=>transactions.amount)
  const balance=total.reduce((a,b)=>{
    return a+b;
  },0)
  return (
      <>
      <div className='mt-9'>

      <h1 className='uppercase'>Your balance</h1>
      <h2 className='font-semibold text-3xl'>${balance}</h2>
      </div>


    </>
  )
}
