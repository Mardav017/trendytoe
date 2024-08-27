import { useState } from 'react'
import HomeProdCard from '../components/HomeProdCard'
import Shoeslider from '../components/Shoeslider'

const Home = () => {
  const slider_settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  }
  const slider_images = [
    'images/home/F1.jpg',
    'images/home/F2.jpg',
    'images/home/F3.jpg',
    'images/home/F4.jpg',
    'images/home/F5.jpg'
  ]

  const [new_arr, setNew_arr] = useState({
    'Jordan Stadium 90': { brand: 'Nike' },
    'INDIA 2023 WORLD CUP LIMITED EDITION SHOE MEN': { brand: 'ADIDAS' },
    'Nike Air Max Solo': { brand: 'Nike' },
    'WALKWAGON SHOES': { brand: 'ADIDAS' }
  })
  const [reccom, setReccom] = useState({
    'Paris Saint-Germain Jumpman MVP': { brand: 'Nike' },
    'Forum 84 Low Shoes': { brand: 'ADIDAS' },
    'Nike Dunk Low': { brand: 'Nike' },
    'FLAZE MODE M': { brand: 'ADIDAS' }
  })

  return (
    <div>
      {/* Slider */}
      <Shoeslider settings={slider_settings} images={slider_images} />

      <h1 className='text-4xl font-bold my-10 mx-32'>
        Elevate your fashion game with our exceptional footwear.
      </h1>

      {/* New Arrivals */}
      <div align='center' className='p-2'>
        <h1 className='text-2xl'>
          <u>New Arrivals</u>
        </h1>
        <HomeProdCard shoes_arr={new_arr} />
      </div>

      {/* Recommended */}
      <div align='center' className='p-2'>
        <h1 className='text-2xl'>
          <u>Recommended</u>
        </h1>
        <HomeProdCard shoes_arr={reccom} />
      </div>
    </div>
  )
}

export default Home
