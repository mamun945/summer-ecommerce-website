import { getProducts } from "@/lib/function";
import ProductCard from "./ProductCard";


const HotProduct = async() => {
    const products = await getProducts();
  return (
    <div className="my-4">
       <h1 className="text-xl font-bold text-center my-2">Hot Products 🔥</h1>
       <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {
            products.slice(0,3).map(product => <ProductCard key={product.id} product={product}></ProductCard>)
          }
       </div>
    </div>
  )
}

export default HotProduct
