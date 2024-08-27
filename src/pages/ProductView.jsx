import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductView = ({ handleAddToCart, alert, setAlert }) => {
  const { msg, status } = alert
  const shoeSizes = [6, 7, 8, 9, 10]
  const { id } = useParams()

  const [productData, setProductData] = useState(null)
  const [qty, setQty] = useState(1)
  const [selectedSize, setSelectedSize] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData () {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/data.json`)
        const data = await response.json()
        const filteredData = data.filter(product => product.id == id)
        setProductData(filteredData[0])
      } catch (error) {
        console.error('Error fetching product data:', error)
      }
    }
    fetchData()
  }, [ProductView, id])

  useEffect(() => {
    const timerId = setTimeout(() => {
      setAlert({ msg: '', status: 'hidden' })
    }, 3000)
  }, [alert])

  const handleATC = () => {
    if (selectedSize) {
      handleAddToCart({
        ...productData,
        qty: qty,
        size: Number(selectedSize)
      })
    } else {
      window.alert('Select size first!!')
    }
  }
  return (
    <div className='view'>
      <div
        className={`absolute right-14 top-24 bg-green-500 px-5 py-3 ${status}`}
      >
        {msg}
      </div>
      <div>
        {productData && (
          <div className='p-5'>
            <section className='flex'>
              <img
                className='h-[400px] mx-16 border-2'
                src={productData.image}
                alt={productData.name}
              />
              <div className='text-left'>
                <h1 className='font-semibold text-3xl'>{productData.brand}</h1>
                <h1 className=' text-3xl'>{productData.name}</h1>
                <p className='my-4'>
                  #{productData.category} #{productData.gender}
                </p>
                <h3 className='my-4 text-xl font-semibold'>
                  &#8377;{productData.price}
                </h3>

                <label>Size: </label>
                <select
                  name='size'
                  className='p-px'
                  onChange={e => {
                    setSelectedSize(e.target.value)
                  }}
                >
                  <option value={null}>select size</option>
                  {shoeSizes.map(size => (
                    <option value={size} key={size}>
                      {size}
                    </option>
                  ))}
                </select>

                <div className='qty my-5'>
                  <label>Qty: </label>
                  <input
                    type='number'
                    name='qty'
                    className='ml-3 mr-2 p-[2.5px] bg-gray-200 border-gray-400 border w-16'
                    defaultValue={qty}
                    min='1'
                    onChange={e => {
                      setQty(Number(e.target.value))
                    }}
                  />
                </div>
                <div className='my-2'>
                  <button
                    type='button'
                    className='border-black border-2 px-8 py-2 mr-8 hover:bg-green-400 hover:text-white'
                    onClick={handleATC}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </section>
            <section className='mt-5'>
              <h3 className='font-semibold text-lg'>Description</h3>
              <p className='text-justify p-2'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                voluptas voluptates, commodi sed sunt maiores ullam ea animi
                veritatis assumenda repellendus iste officiis, adipisci quas
                soluta voluptatibus aliquam, obcaecati ut. Culpa id voluptatum
                quasi at debitis voluptate ipsam in sapiente ut porro rerum sint
                praesentium provident ab ipsa accusamus et a vel velit,
                perspiciatis harum architecto. Repellendus consequatur
                voluptatum eaque ad laborum rerum maiores error? Quam
                reiciendis, quae vel non facere quasi rerum enim laudantium quos
                cumque quas, saepe consequatur. Cum sapiente, dolorem est
                recusandae eveniet alias voluptates soluta perspiciatis dolore
                magni molestias! Voluptates dolorum voluptate inventore sunt,
                earum pariatur.
              </p>
              <p className='text-justify p-2'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                voluptas voluptates, commodi sed sunt maiores ullam ea animi
                veritatis assumenda repellendus iste officiis, adipisci quas
                soluta voluptatibus aliquam, obcaecati ut. Culpa id voluptatum
                quasi at debitis voluptate ipsam in sapiente ut porro rerum sint
                praesentium provident ab ipsa accusamus et a vel velit,
                perspiciatis harum architecto. Repellendus consequatur
                voluptatum eaque ad laborum rerum maiores error? Quam
                reiciendis, quae vel non facere quasi rerum enim laudantium quos
                cumque quas, saepe consequatur. Cum sapiente, dolorem est
                recusandae eveniet alias voluptates soluta perspiciatis dolore
                magni molestias! Voluptates dolorum voluptate inventore sunt,
                earum pariatur.
              </p>
            </section>
          </div>
        )}

        {error && <div className='text-2xl font-semibold p-10'>{error}</div>}
      </div>
    </div>
  )
}

export default ProductView
