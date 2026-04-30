import { Separator } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiStar } from 'react-icons/ci'

const ProductCard = ({product}) => {
  return (
   <div className="card bg-base-100 shadow-sm border">
  <figure className='relative'>
     <Image
     src={product.image}
     alt='product'
     height={200}
     width={300}
     className=' h-[200px] w-full object-cover rounded-sm'
     ></Image>    
  <div className="absolute  badge text-xs bg-orange-200 text-black top-2 right-2">{product.category}</div>
  </figure>
  <div className="card-body space-y-2">
    <h2 className="card-title text-semibold">
      {product.name}
    </h2>
    <div className='flex items-center gap-5'>
        <span className='flex items-center'><CiStar className="text-orange-500"/> {product.rating}</span>
        <Separator orientation='vertical'></Separator>
        <span>${product.price}</span>
    </div>
    <div className="card-action">
      <Link href={`/products/${product.id}`}>
      <button className='btn w-full rounded-full bg-orange-500 text-white'>View Details</button>
      </Link>
    </div>
  </div>
</div>
  )
}

export default ProductCard
