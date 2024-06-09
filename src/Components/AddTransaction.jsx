import React, { useState } from 'react'

const AddTransaction = () => {
    const [text,setText]=useState('')
    const [amount,setAmount]=useState(0)
  return (
    <>
    <h3 className='mt-8 font-semibold'>Add new transaction</h3>
    <form id="form" className='flex flex-col mt-2'>
      <div className="form-control flex flex-col">
        <label htmlFor="text" className='font-semibold'>Text</label>
        <input type="text" className='border border-black px-4 outline-none py-1' value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
      </div>
      <div className="form-control flex flex-col mt-3">
        <label htmlFor="amount" className='font-semibold'>Amount <br />
          (negative - expense, positive - income)</label>
        <input type="number" value={amount} className='border border-black px-4 outline-none py-1' onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
      </div>
      <button className="btn bg-purple-400 text-white my-3 p-2 border border-red-200">Add transaction</button>
    </form>
          </>
  )
}

export default AddTransaction