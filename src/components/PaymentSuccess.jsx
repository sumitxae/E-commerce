import React from 'react'
import { useParams } from 'react-router'

const PaymentSuccess = () => {
    const payment_id = useParams().payment_id;
    const clickHandler = () => {
        window.location.href = '/products'
    }

  return (
    <div className='h-screen w-screen bg-zinc-900 flex flex-col items-center justify-center text-white' >
        <h1 className='text-5xl mb-3 font-semibold' >Payment Successful</h1>
        <p className='text-xl mb-5'>Refrence No. {payment_id}</p>
        <button className=' bg-teal-700 py-2 px-4 rounded-xl' onClick={clickHandler} >Back to Products</button>
    </div>
  )
}

export default PaymentSuccess