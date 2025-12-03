import Image from 'next/image';
import React from 'react';
import angel from "@/assets/angle-around.png"

const WorkStep = () => {
    return (
        <div className='relative mb-20 lg:my-20'>

            {/* <Image src={circle} width={800} height={400} alt='coming soon' className='absolute
            z-25'></Image> */}

            <div className='max-w-10/12 mx-auto'>
                {/* wrokstep with border*/}

                <div className='flex flex-row items-center justify-center gap-8 mx-auto'>
                    <div className='w-[80px] lg:w-sm h-0.5 bg-gradient-to-r from-[#55555] to-[#1A6CE5]'></div>
                    <div className='text-xs lg:text-2xl text-[#F6F6F6] font-medium tracking-widest'>THE PROCESS</div>
                    <div className='w-[80px] lg:w-sm h-0.5 bg-gradient-to-r from-[#1A6CE5] to-[#55555]'></div>
                </div>

                {/* title text */}

                <div className='my-5'>
                    <h2 className='text-[#ffffff] font-bold lg:text-5xl/relaxed text-center font-["roboto_slab"]'>How It <span className='bg-gradient-to-b from-[#0685F1] to-[#AAD8FF] text-transparent bg-clip-text '>Works</span> </h2>
                    <p className='text-[#AFAFAF] lg:text-2xl text-center font-["inter"]'>Get started with our secure SMS viewing service in just a few simple steps.</p>
                </div>





                {/* procedure */}
                <div>
                    <div className='flex flex-col lg:flex-row gap-5 lg:mt-20'>
                        {/* 1st card */}
                        <div className='border-[1px] border-blue-500/20 shadow-inner  rounded-2xl p-5 flex flex-col gap-6 flex-1'>
                            <h3 className=' text-center font-["inter"] font-bold lg:text-6xl bg-gradient-to-b from-[#9EC4DE] to-[#303E4A] bg-clip-text text-transparent'>01</h3>
                            <p className=' text-center font-["inter"] lg:text-2xl font-medium bg-gradient-to-b from-[#0685F1] to-[#AAD8FF] bg-clip-text text-transparent'>Choose Plan</p>


                            <p className='text-[#E6E6E6] lg:text-[20px] font-medium font-["inter"]'> <span className='text-[#88B8FF]'>1.  Specific Line (Higher Cost):</span> You can choose an exact line according to your preference, but this will require a higher charge.</p>
                            <p className='text-white  lg:text-[20px] font-medium font-["inter"]'> <span className='text-[#88B8FF]'>2. Random Line (Lower Cost):</span> If you don&apos;t have a preference, a random line will be selected for you at a much lower cost.</p>
                        </div>
                        {/* 2nd card */}
                        <div className='border-[1px] border-blue-500/20  rounded-2xl p-5 flex flex-col gap-6 flex-1'>
                            {/* arrow type  */}
                            <h3 className=' text-center font-["inter"] font-bold lg:text-6xl bg-gradient-to-b from-[#9EC4DE] to-[#303E4A] bg-clip-text text-transparent'>02</h3>
                            <p className=' text-center font-["inter"] lg:text-2xl font-medium bg-gradient-to-b from-[#0685F1] to-[#AAD8FF] bg-clip-text text-transparent'>Select Number</p>
                            <p className='text-[#E6E6E6] lg:text-[20px] font-medium font-["inter"]'>1. Stay connected without interruption</p>
                            <p className='text-[#E6E6E6] lg:text-[20px] font-medium font-["inter]'> 2. If you prefer not to decide, you can let the system randomly select a number on your behalf. Either way, you will always end up with a number that suits you best..</p>
                        </div>
                    </div>
                </div>

                <div>
                    <Image src={angel} width={668} height={299} className='mx-auto' alt='coming soon'></Image>
                </div>

                <div>
                    <div className='flex flex-col lg:flex-row gap-5'>
                        {/* 3rd card */}
                        <div className='border-[1px] border-blue-500/20 shadow-inner  rounded-2xl p-5 flex flex-col gap-6 flex-1'>
                            <h3 className=' text-center font-["inter"] font-bold lg:text-6xl bg-gradient-to-b from-[#9EC4DE] to-[#303E4A] bg-clip-text text-transparent'>03</h3>
                            <p className=' text-center font-["inter"] lg:text-2xl font-medium bg-gradient-to-b from-[#0685F1] to-[#AAD8FF] bg-clip-text text-transparent'>View Messages</p>


                            <p className='text-[#E6E6E6] lg:text-[20px] font-medium font-["inter"]'> 1. Instantly and securely access your real-time SMS feed..</p>
                            <p className='text-white  lg:text-[20px] font-medium font-["inter"]'> 2. All messages are stored for 15mins regardless of how much time you&apos;ve purchased.</p>
                        </div>
                        {/* 4th card */}
                        <div className='border-[1px] border-blue-500/20  rounded-2xl p-5 flex flex-col gap-6 flex-1'>
                            {/* arrow type  */}
                            <h3 className=' text-center font-["inter"] font-bold lg:text-6xl bg-gradient-to-b from-[#9EC4DE] to-[#303E4A] bg-clip-text text-transparent'>04</h3>
                            <p className=' text-center font-["inter"] lg:text-2xl font-medium bg-gradient-to-b from-[#0685F1] to-[#AAD8FF] bg-clip-text text-transparent'>Auto Secure</p>
                            <p className='text-[#E6E6E6] lg:text-[20px] font-medium font-["inter"]'>1. Use a secure number to keep your real number safe</p>
                            <p className='text-[#E6E6E6] lg:text-[20px] font-medium font-["inter]'> 2. Messages older than 15mins are deleted automatically </p>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default WorkStep;