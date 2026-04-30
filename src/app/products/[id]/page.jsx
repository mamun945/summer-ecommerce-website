import { getProducts } from "@/lib/function";
import { Card, Separator } from "@heroui/react";
import Image from "next/image";


const ProductsDetailsPage= async({params}) => {
    const {id} = await params;
    const products = await getProducts();
    const existProduct = products.find(p=> p.id == id);
    
  return (
    <Card className="my-7 border mx-4">
       <div className="flex flex-col gap-4 sm:flex-row">
        <div>
        <Image
         src={existProduct.image}
         alt={existProduct.name}
         className="rounded-md"
         height={300}
         width={350}
        ></Image>
      </div>
      <Separator orientation="vertical"></Separator>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{existProduct.name}</h1>
        <p>{existProduct.description}</p>
        <h2>Brand: {existProduct.brand}</h2>
         <h2>Category: {existProduct.category}</h2>
        <p>Price: ${existProduct.price}</p>
        <p>Rating: {existProduct.rating}</p>
      </div>
       </div>
    </Card>
  )
}

export default ProductsDetailsPage