// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import {AiOutlineMenuFold,AiOutlineClose} from 'react-icons/ai'
const Navbar = () => {
    
        const [nav ,setNav] = useState(false)
    
        const  handleClick = ()=>{
          setNav(!nav)
        }
      return (
        <main >
        <div className='text-white flex items-center  justify-between  py-3  container capitalize h-25 mx-auto px-5 sticky top-0'>
            

          <ul className="hidden sm:flex items-center ">
          <h3>logo</h3>
                <div className="li sm:flex ml-14">
                    
            <li className='p-3 ' >home</li>
            <li className='p-3 '>company</li>
            <li className='p-3 '> resources</li>
            <li className='p-3 '> about</li>
    
            <li className='p-3 '> contact</li>
                </div>
          </ul>

          <div className="download">
            <button className='bg-blue-600 rounded-lg px-6 py-3'>Download</button>
          </div>
    
          <div onClick={handleClick} className="block sm:hidden">
            {!nav?  <AiOutlineMenuFold className='fixed right-0 mr-5 ease-in-out duration-700 bg-black'  size={30}  /> :   <AiOutlineClose className='fixed right-0 mr-5 ease-in-out duration-700 bg-black' size={30} />}
          
         
          </div>
          <div className={nav? 'fixed top-0 px-4 left-0 w-[60%] bg-[#010725] border-r h-full  border-r-gray-600 ease-out duration-700' :'fixed left-[-100%]   duration-1000' }>
          <h1 className=' text-3xl p-3 font-bold pt-3 text-[#3e873e] uppercase '> react</h1>
    
            <ul>
              <li className='p-3 border-gray-600 border-b' >home</li>
              .<li className='p-3 border-gray-600 border-b'>company</li>
              <li className='p-3 border-gray-600 border-b'> resources</li>
              <li className='p-3 border-gray-600 border-b'> about</li>
    
              <li className='p-3 '> contact</li>
            </ul>
          </div>
    
        </div>
    
      </main>
      );
    }

export default Navbar;
