"use client"

import React from "react";
import amountIcon from "@/assets/amountIcon.png";
import Image from "next/image";
import { IoIosArrowDropright } from "react-icons/io";
import fire from "@/assets/fireball.png";
import { useRouter } from "next/navigation";
import { useGetAllSubscriptionsQuery } from "@/redux/features/suscriptions/suscriptionsApi";

interface CoinPlan {
  _id: string;
  type: string;
  coin: number;
  price: number;
  time: number;
  title: string;
  subTitle: string[];
  status: string | null;
}

const PricingCards = () => {
  const router = useRouter();
  const { data: coinsData, isLoading } = useGetAllSubscriptionsQuery({});

  // Map API data to UI structure
  const plans = (coinsData?.data || []).map((plan: CoinPlan) => ({
    id: plan._id,
    category: plan.type,
    amountFirst: `${plan.coin}/`,
    amountLast: `${plan.time}Min`,
    text: plan.title,
    btn: `Choose plan with ${plan.type?.toLowerCase()}`,
    tag: plan.status || undefined,
    features: plan.subTitle || []
  }));


  const displayData = plans.length > 0 ? plans : (isLoading ? [] : []);

  if (isLoading) return <div className="text-white text-center mt-10">Loading plans...</div>;

  const handleClick = (category: string) => {
    console.log(category)
    router.push(`/premium/${category}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-20">
      {displayData.map((card: any) => (
        <div
          key={card.id}
          className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-transparent via-transparent to-transparent hover:from-[#0685F1]/50 hover:to-[#AAD8FF]/50 transition-all duration-300"
        >
          <div className="text-white p-6 sm:p-8 md:p-10 border bg-[#000000] border-[#323232] rounded-2xl flex flex-col gap-5 sm:gap-6 h-full min-h-[520px] md:min-h-[580px] lg:min-h-[600px]">
            {/* Category + Tag */}
            <div className="relative">
              <h2 className='font-["inter"] text-xl sm:text-2xl tracking-[5px] sm:tracking-[8px] uppercase'>
                {card.category}
              </h2>

              {card.tag && (
                <div className="absolute flex flex-row items-center gap-2 bg-[#0F1D2A] rounded-lg p-2 sm:p-3 md:p-4 -mt-10 sm:-mt-12 right-0 ">
                  <Image src={fire} width={20} height={20} alt="fire" />
                  <p className='font-["inter"] text-sm sm:text-base font-medium'>
                    {card.tag}
                  </p>
                </div>
              )}
            </div>

            {/* Amount Section */}
            <div className="flex gap-2 sm:gap-3 items-end sm:items-center">
              <Image
                src={amountIcon}
                width={35}
                height={35}
                alt="amount icon"
                className="sm:w-[40px]"
              />
              <div className="flex flex-row items-end sm:items-center">
                <p className='text-2xl sm:text-3xl font-["inter"]'>
                  {card.amountFirst}
                </p>
                <p className="text-sm sm:text-base">{card.amountLast}</p>
              </div>
            </div>

            {/* Text */}
            <p className='font-["inter"] text-sm sm:text-base'>{card.text}</p>

            {/* Button */}
            <div className="group my-4 sm:my-6 relative rounded-2xl hover:shadow-[0_0_12px_#0082F2] bg-gradient-to-br from-transparent via-transparent to-transparent hover:from-[#0685F1] hover:to-[#AAD8FF] transition-all">
              <button onClick={() => handleClick(card.id)} className='border hover:border-[#217ECE] border-[#323232] w-full p-2 sm:p-3 rounded-xl font-["inter"] bg-[#0F1D2A] text-sm sm:text-base'>
                {card.btn}
              </button>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-3 sm:gap-4">
              {card.features?.map((feature: string, index: number) => (
                <p
                  key={index}
                  className='flex gap-2 sm:gap-3 items-center font-["inter"] text-sm sm:text-base'
                >
                  <IoIosArrowDropright size={22} className="sm:size-[26px]" />
                  {feature}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingCards;
