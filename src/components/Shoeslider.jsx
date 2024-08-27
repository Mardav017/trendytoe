import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Shoeslider = ({ settings, images }) => {
  return (
    <div className='m-px'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={`${process.env.PUBLIC_URL}/${image}`}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Shoeslider
