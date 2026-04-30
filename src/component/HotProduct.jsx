import ProductCard from "./ProductCard";


const HotProduct = async() => {
    const res = await fetch('https://summer-ecommerce-website.vercel.app/data.json',{cache:'no-store'})
    const products = await res.json();
    console.log(products, 'products');
  return (
    <div className="my-4">
       <h1 className="text-xl font-bold text-center">Hot Products 🔥</h1>
       <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {
            products.slice(0,3).map(product => <ProductCard key={product.id} product={product}></ProductCard>)
          }
       </div>
    </div>
  )
}

export default HotProduct
