import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);


  return (
    <div>
      <nav className='flex justify-between items-center w-full py-3 lg:py-6 navbar'>
        <div>
          <img src={logo} alt="" className='w-1/3' />
        </div>
        <div>
          <ul className='hidden sm:flex items-center space-x-5'>
            {
              navLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))
            }
          </ul>
          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img src={toggle ? close : menu}
              className='w-[40px] h-[40px] object-contain'
              onClick={() => setToggle((prev) => !prev)} />

            <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-12 right-0 mx-4 my-2 min-w-[200px] rounded-xl sidebar`}>

              <ul className='items-center space-y-5'>
                {
                  navLinks.map((item, index) => (
                    <li key={index}>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))
                }
              </ul>

            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar