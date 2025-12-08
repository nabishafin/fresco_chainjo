"use client";
import React from "react";

import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useGetAllFaqsQuery } from "@/redux/features/faq/faqApi";

interface FaqItem {
  _id?: string;
  question: string;
  answer: string;
}

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };



  const { data: faqData, isLoading, error } = useGetAllFaqsQuery({});

  // Use API data if available, otherwise fall back to empty array or handle error
  // Assuming API returns { data: [...] } or just [...]
  const faqs = (faqData?.data || []) as FaqItem[];

  if (isLoading) return <div className="text-white text-center">Loading FAQs...</div>;
  if (error) return <div className="text-red-500 text-center">Error loading FAQs</div>;

  return (
    <div className="max-w-10/12 mx-auto flex flex-col md:flex-row my-20">
      {/* left side */}
      <div className="lg:flex-1/3 flex-1 gap-5 mb-5">
        <div className="flex flex-row items-center gap-8 mx-auto">
          <div className='text-xs lg:text-2xl text-[#F6F6F6] font-medium tracking-widest font-["inter"]'>
            FAQ
          </div>
          <div className="w-[80px] lg:w-xs h-0.5 bg-gradient-to-r from-[#1A6CE5] to-[#55555]"></div>
        </div>

        <div>
          <h2 className='text-[#F6F6F6] font-["roboto_slab"] lg:text-5xl/normal font-bold mb-3'>
            Frequently Askes Questions
          </h2>
          <p className="text-[#C8CACC] mb-5">
            Everything You Need To Know About <br />
            Working With Us{" "}
          </p>
        </div>
      </div>
      {/* right side */}
      <div className="lg:flex-2/3 flex-1">
        <div className="flex-1 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-[1px] border-blue-500/50 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-4 py-3 text-left text-[#F6F6F6] hover:bg-[#1A1A1A] transition-all duration-200"
              >
                <span className='font-["inter"] lg:text-lg'>
                  {faq.question}
                </span>
                <span className="text-[#F6F6F6]">
                  {openIndex === index ? <ImCross /> : <FaPlus />}
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-40" : "max-h-0"
                  }`}
              >
                <p className='text-[#C8CACC] px-4 pb-4 font-["inter"] lg:text-sm'>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;

// "use client";
// import React, { useState } from 'react';

// const Faq = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggleAccordion = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const faqs = [
//     {
//       question: "What is this service about?",
//       answer:
//         "This service lets you view real-time SMS messages securely from virtual phone lines without exposing your personal number.",
//     },
//     {
//       question: "How long are messages stored?",
//       answer:
//         "All messages are automatically deleted after 15 minutes to ensure maximum privacy and security.",
//     },
//     {
//       question: "Can I choose a specific number?",
//       answer:
//         "Yes, you can choose a specific line for a higher cost or get a random line at a lower cost — depending on your plan.",
//     },
//   ];

//   return (
//     <div className='max-w-10/12 mx-auto flex flex-col md:flex-row py-16 gap-10'>

//       {/* left side */}
//       <div className='flex-1 space-y-6'>
//         <div className='flex flex-row items-center gap-8 mx-auto'>
//           <div className='text-xs lg:text-2xl text-[#F6F6F6] font-medium tracking-widest font-["inter"]'>FAQ</div>
//           <div className='w-[80px] lg:w-40 h-0.5 bg-gradient-to-r from-[#1A6CE5] to-[#555555]'></div>
//         </div>

//         <div>
//           <h2 className='text-[#F6F6F6] font-["roboto_slab"] lg:text-5xl/normal font-bold'>
//             Frequently <br /> Asked Questions
//           </h2>
//           <p className='text-[#C8CACC]'>
//             Everything You Need To Know About <br />
//             Working With Us
//           </p>
//         </div>
//       </div>

//       {/* right side */}
//       <div className='flex-1 space-y-4'>
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className='border border-[#2A2A2A] rounded-lg overflow-hidden'
//           >
//             <button
//               onClick={() => toggleAccordion(index)}
//               className='w-full flex justify-between items-center px-4 py-3 text-left text-[#F6F6F6] hover:bg-[#1A1A1A] transition-all duration-200'
//             >
//               <span>{faq.question}</span>
//               <span className='text-[#1A6CE5] text-xl font-semibold'>
//                 {openIndex === index ? '−' : '+'}
//               </span>
//             </button>

//             <div
//               className={`transition-all duration-300 ease-in-out overflow-hidden ${
//                 openIndex === index ? 'max-h-40' : 'max-h-0'
//               }`}
//             >
//               <p className='text-[#C8CACC] px-4 pb-4'>{faq.answer}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Faq;
