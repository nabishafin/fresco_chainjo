
import React from 'react';
import PricingCards from './PricingCards';

const Pricing = () => {
    return (
        <div className='lg:my-40'>

            <div className='max-w-10/12 mx-auto'>
                {/* pricing with border */}
                <div className='flex flex-row items-center justify-center gap-8 mx-auto'>
                    <div className='w-[80px] lg:w-sm h-0.5 bg-gradient-to-r from-[#55555] to-[#1A6CE5]'></div>
                    <div className='text-xs lg:text-2xl text-[#F6F6F6] font-medium tracking-widest font-["inter"]'>PRICING</div>
                    <div className='w-[80px] lg:w-sm h-0.5 bg-gradient-to-r from-[#1A6CE5] to-[#55555]'></div>
                </div>

                {/* title header  */}
                <div className='my-5'>
                    <h2 className='text-[#ffffff] font-bold lg:text-5xl/relaxed text-center font-["roboto_slab"]'>Choose The Plan That Fits Your <span className='bg-gradient-to-b from-[#0685F1] to-[#AAD8FF] text-transparent bg-clip-text '>Needs</span> </h2>

                </div>

                {/* cards section */}
                <PricingCards></PricingCards>

            </div>

        </div>
    );
};

export default Pricing;