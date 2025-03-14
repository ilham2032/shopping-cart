import React from 'react'
import useCartStore from "./store/store"

type Product = {
    id:number;
    name:string;
    price:number;
};

const products: Product[] = [
    {id:1, name: 'iPhone 16 Pro Max', price:4000},
    {id:2, name: 'iPhone 16 Pro ', price:3500},
    {id:3, name: 'iPhone 15 Pro Max', price:3000},
    {id:4, name: 'iPhone 15 Pro ', price:2500},
    {id:5, name: 'iPhone 14 Pro Max', price:2000},
    {id:6, name: 'iPhone 14 Pro ', price:2100},
]

export const Menu: React.FC = () => { 

    const addToCart = useCartStore((state) => state.addToCart)

  return (
    <body className='bg-gray-200 h-screen'>
    <div >
        <h1 className='text-center text-[67px] font-semibold'>Products</h1>
        <div className='flex flex-wrap gap-4 '>
             {products.map((product) => (
                <div className='rounded-2xl bg-blue-900 w-[400px] h-[200px] ml-[115px]' key={product.id} >
                    <h2 className='text-[34px] font-medium text-white'>{product.name}</h2>
                    <p className='text-[28px] font-medium text-white'>Price: {product.price}</p>

                    <button className='bg-blue-600 p-2 rounded-2xl text-white' onClick={()=> { alert('The product has been added to the cart!'); addToCart(product)}}>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>

    </div>
   </body> 
  )
}

