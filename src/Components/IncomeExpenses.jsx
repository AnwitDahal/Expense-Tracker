import React from 'react'

const IncomeExpenses = () => {
  return (
    <div className='flex flex-row my-7 bg-slate-200 py-4 px-14' >
        <div className='flex flex-col justify-center items-center mr-14'>
            <h1>Income</h1>
            <p>+$0.00</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <h1>Expense</h1>
            <p>-$0.00</p>
        </div>
    </div>
  )
}

export default IncomeExpenses