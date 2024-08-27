import { useState } from 'react'

const CategoryProdCard = props => {
  const [hoveredProduct, setHoveredProduct] = useState(null)

  const handleProductHover = index => {
    setHoveredProduct(index)
  }

  const handleProductLeave = () => {
    setHoveredProduct(null)
  }
  return (
    <div className='flex flex-wrap gap-10 p-6 ml-0 mr-5 justify-start'>
      {props.prod.map((product, index) => (
        <div
          className={`border h-80 w-52 product-card ${
            index === hoveredProduct ? 'hovered' : ''
          }`}
          key={index}
          onMouseEnter={() => handleProductHover(index)}
          onMouseLeave={handleProductLeave}
        >
          <div
            className='bg-gray-500 h-52'
            style={{
              backgroundImage: `url(${product.image})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '80%'
            }}
          ></div>
          <h1 className='px-1 font-semibold text-sm'>{product.brand}</h1>
          <h2 className='px-1 text-xs'>{product.name}</h2>
          <h2 className='px-1 text-xs'>Rs. {product.price}</h2>
          {index === hoveredProduct && (
            <button
              className='cart'
              onClick={() => props.handleAddToCart(product)}
            >
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  )
}

export default CategoryProdCard
