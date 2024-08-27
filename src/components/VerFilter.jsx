import React from 'react'
import { useNavigate } from 'react-router-dom'

const VerFilter = props => {
  const navigate = useNavigate()
  return (
    <react-fragment>
      {/* Vertical */}
      <section className='border' style={{ height: 1000, width: 230 }}>
        <div className='mx-5 p-2 text-left'>
          <input
            type='radio'
            name='gender'
            value='Men'
            checked={props.gen === 'Men'}
            onChange={() => {
              navigate('/Men')
            }}
          />
          <label className='ml-2' htmlFor='Men'>
            Mens
          </label>
          <br />
          <input
            type='radio'
            name='gender'
            value='Women'
            checked={props.gen === 'Women'}
            onChange={() => {
              navigate('/Women')
            }}
          />
          <label className='ml-2' htmlFor='Men'>
            Womens
          </label>
          <br />
          <input
            type='radio'
            name='gender'
            value='Kid'
            checked={props.gen === 'Kid'}
            onChange={() => {
              navigate('/Kid')
            }}
          />
          <label className='ml-2' htmlFor='Men'>
            Kids
          </label>
        </div>
        <hr />
        <div className='mx-5 p-2 gap-2 text-left'>
          <h5>
            <b>Categories</b>
          </h5>
          <div className='py-2 text-left'>
            <input
              type='radio'
              name='category'
              value='sport'
              onChange={props.handleCategoryFilterChange}
            />
            <label className='ml-2' htmlFor='Men'>
              Sports Shoes
            </label>
            <br />
            <input
              type='radio'
              name='category'
              value='casual'
              onChange={props.handleCategoryFilterChange}
            />
            <label className='ml-2' htmlFor='Men'>
              Casual Shoes
            </label>
            <br />
            <input className='hidden' type='radio' name='category' id='reset' />
            <label
              className=' cursor-pointer bg-gray-300 px-1 rounded-md mt-2 '
              onClick={() => {
                document.getElementById('reset').checked = true
                props.setCategoryFilter('')
              }}
            >
              reset
            </label>
          </div>
        </div>
        <hr />
      </section>
    </react-fragment>
  )
}

export default VerFilter
