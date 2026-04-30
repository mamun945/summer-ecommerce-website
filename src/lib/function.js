
export const getProducts = async()=>{
    const res = await fetch('https://summer-ecommerce-website.vercel.app/data.json',{cache:'no-store'})
    const products = await res.json();
    return products;
}