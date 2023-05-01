// eslint-disable-next-line no-unused-vars
import React from 'react'
// import ok from '../../public/okay.png'
import phone3 from '../assets/iPhones.png'


const Newsletter = () => {
  return (
    <div>
 <div className="bg-[#0328EE]  mt-32    text-white py-10 md:px-12  grid md:grid-cols-2 place-items-center place-content-center ">
 <div className=' px-8' data-aos="fade-up-right">
<h2 className='text-[2rem] font-bold pb-3 uppercase'>Explore endless possibilities with FinanceFlow</h2>
<p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.</p>
<button className='bg-white rounded-full w-full md:w-fit text-black px-10 py-3 my-3 font-bold'>
    Download
</button>

        </div>
<div className='flex md:-mt-28' data-aos="fade-left">
    <img src={phone3} alt="" />
</div>
 </div>
    </div>
  )
}

export default Newsletter