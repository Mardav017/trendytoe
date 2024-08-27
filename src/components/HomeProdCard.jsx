const HomeProdCard = ({ shoes_arr }) => {
  return (
    <div className='grid grid-cols-4 ml-20 my-5'>
      {Object.keys(shoes_arr).map(shoe => (
        <a href="/#/Men" className='border h-80 w-52 rounded-lg shadow-lg' key={shoe}>
          <div
            className='bg-gray-500 h-52 rounded-lg'
            style={{
              backgroundImage: `url('${process.env.PUBLIC_URL}/images/home/${shoe}.jpg')`,
              backgroundSize: 'contain',
              width: '100%',
              height: '80%'
              // backgroundSize:"contain"
            }}
          ></div>
          <h1 className='px-1 font-semibold text-sm'>
            {shoes_arr[shoe].brand}
          </h1>
          <h2 className='px-1 text-sm'>{shoe}</h2>
        </a>
      ))}
    </div>
  )
}

export default HomeProdCard
