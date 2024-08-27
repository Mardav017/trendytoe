import React from 'react'

const HorFilter = ({handleSortChange}) => {
  return (
    <div>
      {/* Horizontal */}
      <section className='border p-2 h-40 w-full text-left'>
        <label className='text-sm'>Home/Shoes</label>

        <div className='flex justify-between mx-6 mt-16'>
          <h1 className='text-md mt-8'>
            <b>FILTERS</b>
          </h1>
          <div className='border p-2 text-sm mt-3 mb-2'>
            <b>Sort by:</b>
            <select
              name='Sort'
              id=''
              className='mx-1 p-1 bg-white text-sm font-medium'
              onChange={handleSortChange}
            >
              <option value='' selected>
                Recommended
              </option>
              <option value='Price-Low'>Price: Low to High </option>
              <option value='Price-High'>Price: High to Low</option>
            </select>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HorFilter
