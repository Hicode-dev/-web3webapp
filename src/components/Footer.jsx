/* eslint-disable no-unused-vars */
import React from 'react'
import phone1 from '../assets/iPhones (1).png'



const Footer = () => {
    return (
<div>
<div className='text-white md:flex justify-between px-10 lg:mt-24  pb-10 items-center  '>
                    <h2 className='text-[1.7rem] font-bold pb-3 uppercase'>Download Our App</h2>
                    <button className=' w-fit rounded-full text-white md:px-10 py-3 md:text-[0.9rem] text-[0.8rem]  f'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Sit non neque orci amet, amet .
                    </button>

                </div>

        <div className='grid md:grid-cols-2  lg:px-20 place-content-center place-items-center'>
            <div className="box rounded-xl bg-[#0328EE] mb-10 md:mb-0 md:h-[630px] h-[620px]  text-white w-[350px]">
                <div className="box relative    m-auto flex-col  px-5 flex pt-7 text-center    rounded-lg h-[295px] w-[320px]" >
                    <h4 className='text-[18px] font-bold pb-3 uppercase'>Download for iOS </h4>
                    <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer in pellentesque tortor semper elementum. Felis.</p>
                    <div>
                        <button className='bg-gray-500 rounded-full  text-white px-10 py-3 my-3 font-bold'>
                            Download
                        </button>
                    </div>
                    <div className='' >
                        <div className='absolute overflow-hidden  top-[15rem] flex justify-center items-center ' >

                            <img src={phone1} alt="" />
                        </div>
                    </div>

                </div>

            </div>
            <div className="box rounded-xl bg-[#0328EE] md:h-[610px] h-[620px] text-white w-[350px]">
                <div className="box relative    m-auto flex-col  px-5 flex pt-7 text-center    rounded-lg h-[295px] w-[300px]" >
                    <h4 className='text-[18px] font-bold pb-3 uppercase'>Download for Android</h4>
                    <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer in pellentesque tortor semper elementum. Felis.</p>
                    <div>
                        <button className='bg-gray-500 rounded-full  text-white px-10 py-3 my-3 font-bold'>
                            Download
                        </button>
                    </div>
                    <div className='' >
                        <div className='absolute overflow-hidden  top-[15rem] flex justify-center items-center ' >

                            <img src={phone1} alt="" />
                        </div>
                    </div>

                </div>

            </div>

        </div>
</div>
    )
}

export default Footer