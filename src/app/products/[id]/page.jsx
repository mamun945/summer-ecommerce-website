import { getProducts } from "@/lib/function";
import { Card, Separator } from "@heroui/react";
import Image from "next/image";


const ProductsDetailsPage= async({params}) => {
    const {id} = await params;
    const products = await getProducts();
    const existProduct = products.find(p=> p.id == id);
    
  return (
    <div className="">
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
        <h1 className="text-3xl font-bold ">{existProduct.name}</h1>
        <p><span className="font-bold">Description:</span>{existProduct.description}</p>
        <h2><span className="font-bold">Brand:</span> {existProduct.brand}</h2>
         <h2><span className="font-bold">Category:</span> {existProduct.category}</h2>
        <p><span className="font-bold">Price:</span> ${existProduct.price}</p>
        <p><span className="font-bold">Rating:</span> {existProduct.rating}</p>
      </div>
       </div>
    </Card>
    </div>
  )
}

export default ProductsDetailsPage