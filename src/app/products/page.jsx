import ProductCard from '@/component/ProductCard';
import { getProducts } from '@/lib/function';
import React from 'react'

const ProductsPage = async() => {
    const products = await getProducts();
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold text-center my-4'>All Products</h1>
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        {
          products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
        }
      </div>
    </div>
  )
}

export default ProductsPage
