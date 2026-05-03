import { Separator } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiStar } from 'react-icons/ci'
import ViewDetails from './viewDetails'

const ProductCard = ({product}) => {
 
  return (
   <div className="card bg-base-100 shadow-sm border border-orange-500 hover:bg-gray-200 flex flex-col hover:shadow-xl transition animate__fadeIn animate__zoomIn">
  
  <figure className='relative'>
    <Image
      src={product.image}
      alt='product'
      height={200}
      width={300}
      className='h-[200px] w-full object-cover rounded-sm'
    />
    <div className="absolute badge text-xs bg-orange-200 text-black top-2 right-2">
      {product.category}
    </div>
  </figure>

  <div className="card-body flex flex-col flex-1 justify-between">
    
    {/* Top Content */}
    <div className="space-y-2">
      <h2 className="card-title font-bold text-xl">
        {product.name}
      </h2>

      <div className='flex items-center gap-5'>
        <span className='flex items-center'>
          <CiStar className="text-orange-500"/> {product.rating}
        </span>

        <Separator orientation='vertical' />

        <span>${product.price}</span>
      </div>
    </div>

    {/* Bottom Button */}
  
      <ViewDetails product={product}></ViewDetails>
   

  </div>
</div>
  )
}

export default ProductCard
