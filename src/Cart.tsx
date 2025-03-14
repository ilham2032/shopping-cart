import useCartStore from './store/store'

function Cart()  {

    const cart = useCartStore((state) => state.cart)
    const totalPrice = useCartStore((state) => state.totalPrice())

  return (
    <body className='bg-gray-200 h-screen'>
    <div>

        <h1 className='text-center font-bold text-4xl'>Your Cart</h1>
        {cart.length === 0 ? (
            <p className='text-center font-semibold text-2xl'>Your Cart is Empty</p>
        ) : (
            
            cart.map((item) => (
                <div className='ml-[550px] pt-[50px] pb-1.5'>
                    <div className=' rounded-2xl bg-blue-900 w-[400px] h-[100px] ml-[115px]' key={item.id}>
                        <h2 className='text-[34px] font-medium text-white'>{item.name}</h2>
                        <p className='text-[28px] font-medium text-white'>Price: ${item.price}</p>
                    </div>
                </div>
            ))
           
        )}
        <h2 className='text-center font-extrabold text-6xl'>Total price: ${totalPrice}</h2>
    </div>
    </body>
  )
}

export default Cart