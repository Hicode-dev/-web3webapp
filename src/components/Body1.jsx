// eslint-disable-next-line no-unused-vars
import React from 'react';
import coin1 from '../assets/coin-1.png'
import coin2 from '../assets/coin-2.png'
const Body = () => {
    return (
        <main className=' py-16 px-4'>

            <div className='max-w-[1240px] px-5 py-7 '>

                <div className='block md:flex justify-around items-center'>

                    <div>
                     <div className='' data-aos="fade-right">
                     <p className='text-[1.6rem] lg:text-[3rem] md:text-3xl font-bold pb-3 uppercase mx-auto text-white'>Buy, trade, and hold </p>
                        <p className='text-[1.6rem] lg:text-[3rem]  md:text-3xl font-bold pb-3 uppercase mx-auto text-white'>350+ cryptocurrencies</p>
                        <p className='text-white mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat <br /> nulla suspendisse tortor aenean dis placerat.</p>
                     </div>
                        <button className='py-3 px-10 mt-8 mx-16 md:mx-0 bg-blue-600 text-white rounded-md  '>Get started</button>
                    </div>

                    <div className='relative'> 
                   <div className='flex justify-center md:mt-0 mt-14'>
                   <img src={coin1} alt="" className='md:w-[30rem] w-[18rem]  absolute top-0 left-0 coin1' />
                   <img src={coin2} alt="" className='md:w-[18rem] w-[18rem] coin2'/>
                   </div>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default Body;
