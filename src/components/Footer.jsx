import React from 'react'

const Footer = () => {
  return (
    <react-fragment>
      <div className='absolute flex justify-around bg-gray-700 w-full h-44 text-white font-semibold text-sm p-10'>
        <div className='grid '>
          <a href='/'>Find a Store</a>
          <a href='/'>Send us a Feedback</a>
        </div>
        <div className='grid'>
          <a href='/'>Get Help</a>
          <a href='/'>Order Status</a>
          <a href='/'>Delivery</a>
        </div>

        <div className='grid'>
          <a href='/'>About Trendy Toes</a>
          <a href='/'>Contact Us</a>
        </div>

        <div className='flex gap-2'>
          <i
            className='fa-brands fa-square-x-twitter text-3xl'
            style={{ color: '#ffffff' }}
          ></i>
          <i
            className='fa-brands fa-square-facebook text-3xl'
            style={{ color: '#ffffff' }}
          ></i>
          <i
            className='fa-brands fa-youtube text-3xl'
            style={{ color: '#ffffff' }}
          ></i>
          <i
            className='fa-brands fa-square-instagram text-3xl'
            style={{ color: '#ffffff' }}
          ></i>
        </div>
      </div>
    </react-fragment>
  )
}

export default Footer
