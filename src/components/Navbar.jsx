import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex p-4 border shadow-md sticky top-0 bg-white w-full justify-between'>
      <img
        className='w-24'
        src={`${process.env.PUBLIC_URL}/logo3.png`}
        alt=''
      />
      <section className='flex gap-6 font-semibold text-sm font-sans text-gray-700'>
        <NavLink to='/'>HOME</NavLink>
        <NavLink to='/Men'>MEN</NavLink>
        <NavLink to='/Women'>WOMEN</NavLink>
        <NavLink to='/Kid'>KIDS</NavLink>

        <span className='material-symbols-outlined'>person</span>
        <NavLink to='/Cart'>
          <span className='material-symbols-outlined'>shopping_bag</span>
        </NavLink>
      </section>
    </div>
  )
}

export default Navbar
