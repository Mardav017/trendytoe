import { useEffect, useState } from 'react'
import HorFilter from '../components/HorFilter'
import VerFilter from '../components/VerFilter'
import CategoryProdCard from '../components/CategoryProdCard'

const Men = props => {
  const [prod, setProd] = useState([])
  const [ogProd, setOgProd] = useState([])
  const { msg, status } = props.alert
  const [categoryFilter, setCategoryFilter] = useState('')
  const [sort, setSort] = useState('')

  const handleCategoryFilterChange = e => {
    setCategoryFilter(e.target.value)
  }
  const handleSortChange = e => {
    setSort(e.target.value)
  }
  useEffect(() => {
    let sortedData
    if (sort == '') {
      sortedData = prod.sort((a, b) => b.id - a.id)
    } else if (sort == 'Price-Low') {
      sortedData = prod.sort((a, b) => a.price - b.price)
    } else {
      sortedData = prod.sort((a, b) => b.price - a.price)
    }
    setProd(sortedData)
  }, [sort])

  useEffect(() => {
    async function fetchData () {
      try {
        props.setGender('Men')
        const response = await fetch(`${process.env.PUBLIC_URL}/data.json`)
        const data = await response.json()
        const filteredData = data.filter(product => product.gender === 'men')
        setOgProd(filteredData)
        setProd(filteredData)
      } catch (error) {
        console.error('Error fetching product data:', error)
      }
    }
    fetchData()
  }, [Men])

  useEffect(() => {
    let filteredData
    if (categoryFilter === '') {
      filteredData = ogProd.sort((a, b) => b.id - a.id)
    } else {
      filteredData = ogProd.filter(
        product => product.category == categoryFilter
      )
    }
    setProd(filteredData)
  }, [categoryFilter])

  useEffect(() => {
    const timerId = setTimeout(() => {
      props.setAlert({ msg: '', status: 'hidden' })
    }, 3000)
  }, [props.alert])

  return (
    <div>
      <div
        className={`absolute right-14 top-24 bg-green-500 px-5 py-3 ${status}`}
      >
        {msg}
      </div>
      <HorFilter handleSortChange={handleSortChange} />
      <section className='flex'>
        <VerFilter
          gen={props.selectedGender}
          handleGenderChange={props.handleGenderChange}
          handleCategoryFilterChange={handleCategoryFilterChange}
          setCategoryFilter={setCategoryFilter}
        />

        {/* Display Products */}
        <CategoryProdCard prod={prod} />
      </section>
    </div>
  )
}

export default Men
