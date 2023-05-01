// eslint-disable-next-line no-unused-vars
import React from 'react';
import phone3 from '../assets/div (1).png'
import phone4 from '../assets/60e4a1e7380756935be7fc46_image-blog-6-crypto-template-p-800.jpeg.png'


const Card = () => {
  
    return (

     <div className='pt-20 px-9'>
           <div className='text-white py-10 block justify-between items-center md:flex '>
                    <h2 className='md:text-[1.7rem] text-[1.5rem] font-bold pb-3 uppercase'>Browse our latest news</h2>
                    <button className=' w-fit rounded-full text-white md:px-10 py-3 text-[0.9rem] md:text-[0.9rem] f'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing <br />  elit. Sit non neque orci amet, amet .
                    </button>

                </div>
           <div className='grid md:grid-cols-2  lg:grid-cols-3' >
            <div className="max-w-sm bg-[#010D50] my-6  rounded-lg shadow"  data-aos="zoom-in-left">
                <a href="#">
                    <img className="rounded-t-lg" src={phone4} alt="" />
                </a>
                <div className="pt-6 px-3">
                    <a href="#">
                        <h6 className="mb-2 text-[1.3rem] py-3 font-bold tracking-tight text-white dark:text-white">The Basics about Cryptocurrency</h6>
                    </a>
                    <p className="mb-6 text-[0.8rem] font-normal text-white">Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.</p>
                    <div className='flex gap-7 items-center text-white font-bold'>
                        <img src={phone3} alt="" />
                        <div className='text-[0.8rem]'>
                            <h3>John carter</h3>
                            <p>Role, Company</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-sm bg-[#010D50]  my-6  rounded-lg shadow" data-aos="zoom-out-left"> 
                <a href="#">
                    <img className="rounded-t-lg" src={phone4} alt="" />
                </a>
                <div className="pt-6 px-3">
                    <a href="#">
                        <h6 className="mb-2 text-[1.3rem] py-3 font-bold tracking-tight text-white dark:text-white">The Basics about Cryptocurrency</h6>
                    </a>
                    <p className="mb-6 text-[0.8rem] font-normal text-white">Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.</p>
                    <div className='flex gap-7 items-center text-white font-bold'>
                        <img src={phone3} alt="" />
                        <div className='text-[0.8rem]'>
                            <h3>John carter</h3>
                            <p>Role, Company</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-sm bg-[#010D50]  my-6 rounded-lg shadow" data-aos="zoom-in-left">
                <a href="#">
                    <img className="rounded-t-lg" src={phone4} alt="" />
                </a>
                <div className="pt-6 px-3">
                    <a href="#">
                        <h6 className="mb-2 text-[1.3rem] py-3 font-bold tracking-tight text-white dark:text-white">The Basics about Cryptocurrency</h6>
                    </a>
                    <p className="mb-6 text-[0.8rem] font-normal text-white">Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.</p>
                    <div className='flex gap-7 items-center text-white font-bold'>
                        <img src={phone3} alt="" />
                        <div className='text-[0.8rem]'>
                            <h3>John carter</h3>
                            <p>Role, Company</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <div className='flex justify-center items-center'>
    <button className='bg-gray-500 rounded-full  text-white px-10 py-3 my-3 font-bold'>
    Download
</button>
    </div>
     </div>

    );
}

export default Card;
