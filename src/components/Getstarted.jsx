// eslint-disable-next-line no-unused-vars
import React from 'react';
import { TbChartBar } from 'react-icons/tb'

const Getstarted = () => {
    return (

        <div className="grid md:grid-cols-2 grid-cols-1 md:mt-12 pt-14 md:px-20 place-items-center">



            <div className=' px-7'>
                <h4 className='text-[2rem] font-bold pb-3 uppercase   text-white'>Get started today</h4>
                <p className='text-[16px] text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.</p>
                <div>
                    <div className='flex items-center gap-6 text-white font-bold'>
                        <button className='bg-blue-700 px-4 py-3 my-5 shadow-lg rounded-lg '>
                            <TbChartBar />
                        </button>
                        <h3>Lowest fees in market</h3>
                    </div>
                    <div className='flex items-center gap-6 text-white font-bold'>
                        <button className='bg-blue-700 px-4 py-3 my-5 shadow-lg rounded-lg '>
                            <TbChartBar />
                        </button>
                        <h3>Lowest fees in market</h3>
                    </div>
                    <div className='flex items-center gap-6 text-white font-bold'>
                        <button className='bg-blue-700 px-4 py-3 my-5 shadow-lg rounded-lg '>
                            <TbChartBar />
                        </button>
                        <h3>Lowest fees in market</h3>
                    </div>
                </div>
            </div>

            <div className=' '>
                {/* <img src={phone4} className='md:flex ' width='400ppx'  alt="" /> */}
            </div>
        </div>
    );
}

export default Getstarted;
