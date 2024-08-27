import React from 'react'

const Cart = ({ cart, setCart }) => {
  let total = 0

  const handleDelete = id => {
    let cartValue = cart.filter(items => items.id != id)
    setCart(cartValue)
  }
  // const handleIncrement = id => {
  //   const tempCart = cart.map((items)=>{
      
  //   });
  //   console.log(existingProductIndex)
  // }

  // const handleDecrement = id => {
  //   const existingProductIndex = cart.findIndex(item => item.id == id)
  //   console.log(existingProductIndex)
    
  // }

  return (
    <div>
      <div className='w-full h-32 p-10 mb-3 bg-amber-100'>
        <h3 className='text-4xl'>Your Cart</h3>
      </div>

      {cart.map((product, index) => (
        <div className='border h-72 mx-10 flex' key={index}>
          <div
            className='bg-gray-500 m-5 h-52 border-2'
            style={{
              backgroundImage: `url(${product.image})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              width: '20%',
              height: '80%'
            }}
          ></div>
          <div className='m-10 text-left flex justify-between w-full'>
            <section>
              <h1 className='px-1 font-semibold text-2xl'>{product.brand}</h1>
              <h2 className='px-1 text-xl'>{product.name}</h2>
              <h2 className='px-1 text-lg mt-10'>
                Rs. {product.price * product.qty}
              </h2>
              <div hidden>{(total = total + product.price * product.qty)}</div>
              <h2 className='px-1 text-lg mt-10 flex'>
                Qty :
                <section className='flex'>
                  <input
                    type='text'
                    className='bg-gray-200 p-px w-6'
                    value={product.qty}
                    disabled
                  />
                  <button type='button'>
                    <span className='material-symbols-outlined'>
                      arrow_upward
                    </span>
                  </button>
                  <button type='button'>
                    <span className='material-symbols-outlined'>
                      arrow_downward
                    </span>
                  </button>
                </section>
              </h2>
            </section>
            <button
              type='button'
              onClick={() => {
                handleDelete(product.id)
              }}
            >
              <span className='material-symbols-outlined'>delete</span>
            </button>
          </div>
        </div>
      ))}

      <div className='border mt-10 w-full h-14 flex justify-end'>
        <h1 className='text-lg mx-16'>Total: Rs. {total}</h1>
        <button
          className='bg-slate-500 p-2 mt-2 mr-14'
          onClick={() => {
            alert('Order Placed')
            window.location.reload()
          }}
        >
          Place Order
        </button>
      </div>
    </div>
  )
}

export default Cart
