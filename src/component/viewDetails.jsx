"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const ViewDetails = ({product}) => {

     const router =useRouter()
  const  handleNavigate =(id)=>{
    router.push(`/products/${id}`)
    localStorage.setItem('r', id)
  }
  return (
    <div>
      <button onClick={()=> handleNavigate(product.id)} className='btn w-full rounded-full bg-orange-500 text-white mt-4 hover:bg-black transition duration-300 animate__fadeIn'>
        View Details
      </button>
    </div>
  )
}

export default ViewDetails
