// eslint-disable-next-line no-unused-vars
import React from 'react'
import Sllider from "react-slick";
import phone3 from '../assets/div (1).png'

const Slider = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (

        <div>
            <div className='py-20 px-10 gap-3  '>
                <div className='text-white flex justify-between items-center  '>
                    <h2 className='text-[1.7rem] font-bold pb-3 uppercase'>What our users say?</h2>
                    <button className='bg-blue-500 md:flex hidden  w-fit rounded-full text-white px-10 py-3  font-bold'>
                        Download
                    </button>

                </div>
                <Sllider  {...settings}>
                    <div className='w-[200px]'>
                        <div className=' flex  justify-center gap-y-7 flex-col h-[343px] text-white px-3   shadow-2xl rounded-lg'>
                            <h3>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”</h3>

                            <div className='flex gap-7 items-center'>
                                <img src={phone3} alt="" />
                                <div>
                                    <h3>John carter</h3>
                                    <p>Role, Company</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[200px]'>
                        <div className=' flex  justify-center gap-y-7 flex-col h-[343px] text-white px-3   shadow-2xl rounded-lg'>
                            <h3>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”</h3>

                            <div className='flex gap-7 items-center'>
                                <img src={phone3} alt="" />
                                <div>
                                    <h3>John carter</h3>
                                    <p>Role, Company</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[200px]'>
                        <div className=' flex  justify-center gap-y-7 flex-col h-[343px] text-white px-3   shadow-2xl rounded-lg'>
                            <h3>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”</h3>

                            <div className='flex gap-7 items-center'>
                                <img src={phone3} alt="" />
                                <div>
                                    <h3>John carter</h3>
                                    <p>Role, Company</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[200px]'>
                        <div className=' flex  justify-center gap-y-7 flex-col h-[343px] text-white px-3   shadow-2xl rounded-lg'>
                            <h3>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”</h3>

                            <div className='flex gap-7 items-center'>
                                <img src={phone3} alt="" />
                                <div>
                                    <h3>John carter</h3>
                                    <p>Role, Company</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[200px]'>
                        <div className=' flex  justify-center gap-y-7 flex-col h-[343px] text-white px-3   shadow-2xl rounded-lg'>
                            <h3>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”</h3>

                            <div className='flex gap-7 items-center'>
                                <img src={phone3} alt="" />
                                <div>
                                    <h3>John carter</h3>
                                    <p>Role, Company</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[200px]'>
                        <div className=' flex  justify-center gap-y-7 flex-col h-[343px] text-white px-3   shadow-2xl rounded-lg'>
                            <h3>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”</h3>

                            <div className='flex gap-7 items-center'>
                                <img src={phone3} alt="" />
                                <div>
                                    <h3>John carter</h3>
                                    <p>Role, Company</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[200px]'>
                        <div className=' flex  justify-center gap-y-7 flex-col h-[343px] text-white px-3   shadow-2xl rounded-lg'>
                            <h3>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”</h3>

                            <div className='flex gap-7 items-center'>
                                <img src={phone3} alt="" />
                                <div>
                                    <h3>John carter</h3>
                                    <p>Role, Company</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[200px]'>
                        <div className=' flex  justify-center gap-y-7 flex-col h-[343px] text-white px-3   shadow-2xl rounded-lg'>
                            <h3>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”</h3>

                            <div className='flex gap-7 items-center'>
                                <img src={phone3} alt="" />
                                <div>
                                    <h3>John carter</h3>
                                    <p>Role, Company</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </Sllider>
            </div>
        </div>
    )
}

export default Slider
