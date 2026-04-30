import Image from 'next/image'
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
     className='object-cover h-[200px] w-full'
     ></Image>    
  <div className="absolute  badge badge-outline">{product.category}</div>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {product.name}
      <div className="badge badge-secondary">{product.brand}</div>
    </h2>
    <div>
        <p><CiStar className="text-orange-500"/> {product.rating}</p>
        <p>${product.price}</p>
    </div>
    <div className="card-action">
      <button className='btn'>View Details</button>
    </div>
  </div>
</div>
  )
}

export default ProductCard
