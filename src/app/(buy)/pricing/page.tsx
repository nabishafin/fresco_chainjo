'use client';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCreateFuyhBillMutation } from '@/redux/features/payment/paymentApi';
import amountPic from '@/assets/amountIcon.png';

const Pricing = () => {
    const [coin, setCoin] = useState("200");
    const [time, setTime] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();

    const [createFuyhBill, { isLoading }] = useCreateFuyhBillMutation();

    const handlePayClick = (e: React.FormEvent) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const handleConfirm = async () => {
        try {
            const result = await createFuyhBill({
                amount: parseInt(time),
            }).unwrap();

            const paymentUrl = result.data?.data?.data?.url;

            if (result.success && paymentUrl) {
                router.push(paymentUrl);
            } else {
                console.error("Failed to get payment URL from create-bill response:", result);
                alert("Could not retrieve payment details. Please try again.");
            }
        } catch (error) {
            console.error("Error during payment process:", error);
            alert("An unexpected error occurred. Please try again later.");
        } finally {
            setIsModalOpen(false);
        }
    };

    const handleCancel = () => {
        if (!isLoading) {
            setIsModalOpen(false);
        }
    };

    return (
        <div className='flex flex-col gap-[80px]'>
            <div className='mb-[80px]'>
                <NavBar />
            </div>
            {/* Main part of pricing */}
            <main>
                <div className='flex justify-center text-center'>
                    <div className="w-full max-w-7/12 flex flex-col gap-[48px]">
                        <h2 className="text-white text-[32px]">
                            Buy Coin
                        </h2>

                        <form onSubmit={handlePayClick}>
                            <div className="flex flex-col gap-[64px]">
                                {/* Inputs container */}
                                <div className="flex flex-col sm:flex-row gap-[60px]">
                                    {/* Coin Input */}
                                    <div className="flex-1">
                                        <label className="block text-[#E6E6E6] font-['inter'] text-2xl/relaxed font-medium mb-2">
                                            Coin
                                        </label>
                                        <div className="relative">
                                            <span className='absolute right-6 top-5'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                                    <path d="M21 10.5001C21 10.5001 15.8446 17.5 14 17.5C12.1553 17.5 7 10.5 7 10.5" stroke="#E6E6E6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            <select
                                                className='coin text-white'
                                                name="coin"
                                                value={coin}
                                                onChange={(e) => setCoin(e.target.value)}
                                            >
                                                <option className='bg-black' value="100">100</option>
                                                <option className='bg-black' value="200">200</option>
                                                <option className='bg-black' value="300">300</option>
                                                <option className='bg-black' value="400">400</option>
                                                <option className='bg-black' value="500">500</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Time Input */}
                                    <div className="flex-1">
                                        <label className="block text-[#E6E6E6] font-['inter'] text-2xl/relaxed font-medium mb-2">
                                            Price
                                        </label>
                                        <input
                                            type="text"
                                            placeholder='$9.99'
                                            value={time}
                                            onChange={(e) => setTime(e.target.value)}
                                            className="w-full price border border-[#37404E] rounded-lg px-3 py-4 text-[#E6E6E6] font-['inter'] text-xl font-medium bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>

                                {/* Button */}
                                <button
                                    type="submit"
                                    className="w-full cursor-pointer flex justify-center items-center text-[#E6E6E6] border-[1px] border-blue-500/50 py-3 rounded-lg font-['inter'] text-xl font-medium transition hover:bg-blue-500/10"
                                >
                                    <div className='flex gap-[10px]'>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                                <g clipPath="url(#clip0_494_4199)">
                                                    <path d="M13.9738 -0.0169171C14.0494 -0.0167403 14.0494 -0.0167403 14.1266 -0.0165599C17.6866 -0.00323739 21.1095 1.35247 23.6774 3.8283C23.7153 3.86464 23.7531 3.90098 23.7921 3.93842C24.3263 4.45439 24.8302 4.97403 25.2634 5.5783C25.2879 5.61223 25.3125 5.64617 25.3378 5.68113C26.5361 7.34802 27.3573 9.19977 27.779 11.2111C27.7905 11.2635 27.802 11.3159 27.8138 11.3699C28.1772 13.0888 28.1575 15.0754 27.779 16.7892C27.767 16.8452 27.755 16.9012 27.7426 16.9588C26.9418 20.6093 24.7262 23.8225 21.5841 25.8494C19.3459 27.2628 16.8018 28.0489 14.1491 28.0287C13.9668 28.0275 13.7846 28.0287 13.6022 28.0301C9.97601 28.0348 6.63013 26.4245 4.04462 23.9533C4.00373 23.9147 3.96284 23.876 3.92071 23.8362C3.62548 23.5503 3.37123 23.2349 3.11493 22.9142C3.08017 22.8729 3.04542 22.8315 3.00961 22.7888C1.19799 20.6096 -0.000125585 17.5881 -0.0133672 14.7446C-0.0136789 14.6911 -0.0139907 14.6376 -0.0143118 14.5825C-0.0148259 14.4695 -0.0151849 14.3565 -0.0153966 14.2435C-0.0159216 14.0749 -0.0176183 13.9063 -0.0193487 13.7377C-0.0233317 12.9919 0.0378801 12.2746 0.161804 11.5392C0.172096 11.4771 0.182388 11.415 0.192993 11.351C0.620278 8.96778 1.72042 6.72032 3.31091 4.90131C3.36629 4.83794 3.42134 4.7743 3.47618 4.71047C4.04782 4.04856 4.66682 3.43245 5.37204 2.91383C5.46899 2.84208 5.56444 2.76862 5.65982 2.69481C7.28837 1.44899 9.25533 0.635176 11.2565 0.229177C11.3091 0.218519 11.3616 0.207861 11.4157 0.19688C12.2693 0.0334826 13.1064 -0.0205805 13.9738 -0.0169171Z" fill="#0089CD" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_494_4199">
                                                        <rect width="28" height="28" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                        <span>Buy Now</span>
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={handleCancel}></div>
                    <div className="p-[1px] bg-gradient-to-b from-[#0685F1] to-[#AAD8FF] border">
                        <div className="relative bg-[#1A1A1A]/100 rounded-xl p-8 max-w-md text-center z-10">
                            <div className="flex flex-row gap-2 justify-center items-center">
                                <Image src={amountPic} width={30} height={30} alt="coin"></Image>
                                <p className="text-[#E6E6E6] font-['inter'] text-2xl font-medium">{coin}</p>
                            </div>
                            <h3 className="text-[#D8D8D8] font-['inter'] font-medium lg:text-2xl/normal mb-4">
                                Are you sure you want to spend <span className="text-blue-400">{coin}</span> coins to purchase this plan?
                            </h3>
                            <div className="flex flex-row-reverse justify-center gap-4 mt-6">
                                <button
                                    onClick={handleConfirm}
                                    disabled={isLoading}
                                    className="border-[1px] border-blue-500 text-white px-8 py-2 rounded-lg font-medium transition cursor-pointer font-['inter'] lg:text-lg disabled:opacity-50"
                                >
                                    {isLoading ? "Processing..." : "Yes"}
                                </button>
                                <button
                                    onClick={handleCancel}
                                    disabled={isLoading}
                                    className="cursor-pointer text-[#E96567] font-['inter'] lg:text-lg px-5 py-2 rounded-lg font-medium transition disabled:opacity-50"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer part */}
            <Footer />
        </div>
    );
}

export default Pricing;
