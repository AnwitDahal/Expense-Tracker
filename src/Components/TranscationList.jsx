import React from 'react'

const TranscationList = () => {
  return (
  <>
  <h1>History</h1>
  <hr/>
  <ul>
    <li className='bg-slate-200 border border-r-[3px] border-e-red-800 py-1 flex flex-row px-2'>
       <p className='mr-48'>
        Cash
        </p> 
         <span className=''>-$400</span> 
    </li>
  </ul>
  </>
  )
}

export default TranscationList