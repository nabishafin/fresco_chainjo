"use client";

import React, { useState } from "react";
import Image from "next/image";
import amountPic from "@/assets/amountIcon.png";
import { usePayCoinMutation } from "@/redux/features/suscriptions/suscriptionsApi";
import { useRouter } from "next/navigation";
import { io } from "socket.io-client";
import { toast } from "react-toastify";
import LoadingSpinner from "./LoadingSpinner";

interface PremiumBuyProps {
  coinId: string;
  coinType: string;
  coinAmount: number;
  coinTime: number;
  coinPrice: number;
}

const PremiumBuy = ({ coinId, coinType, coinAmount, coinTime, coinPrice }: PremiumBuyProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [payCoin, { isLoading }] = usePayCoinMutation();
  const router = useRouter();

  const handlePayClick = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  const handleConfirm = async () => {
    try {
      const result = await payCoin({
        coin: coinAmount,
        time: coinTime,
      }).unwrap();

      // Only proceed if payment was successful
      if (result.success === true) {
        // Payment successful - emit socket event and redirect
        const token = localStorage.getItem("accessToken");
        const socket = io(
          `${process.env.NEXT_PUBLIC_SOCKET_BASE_URL}?token=${token}`
        );

        socket.on("connect", () => {
          socket.emit("session-started", { sessionToLive: coinTime });
          socket.disconnect();

          // Redirect to message page only on success
          router.push("/message");
        });
      } else {
        // Payment failed - show error message
        const errorMessage = result.message || "Payment failed. Please try again.";
        toast.error(errorMessage);
        setIsModalOpen(false);
      }
    } catch (error: any) {
      // Handle API errors (403, 401, etc.)
      const errorMessage = error?.data?.message || error?.message || "Payment failed. Please try again.";
      toast.error(errorMessage);
      setIsModalOpen(false);
    }
  };

  const handleCancel = () => {
    if (!isLoading) {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-7/12">
        {" "}
        {/* max width container */}
        <h2 className="text-white font-inter text-3xl sm:text-4xl tracking-[8px] mb-6 text-center">
          {coinType.toUpperCase()}
        </h2>
        <form onSubmit={handlePayClick}>
          <div className="flex flex-col gap-6">
            {/* Inputs container */}
            <div className="flex flex-col sm:flex-row gap-8">
              {/* Coin Input */}
              <div className="flex-1">
                <label className="block text-[#E6E6E6] font-['inter'] text-2xl/relaxed font-medium mb-2">
                  Coin
                </label>
                <div className="relative">
                  <Image
                    src={amountPic}
                    alt="coin icon"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6"
                  />
                  <input
                    type="text"
                    value={coinAmount}
                    readOnly
                    className="w-full border border-[#37404E] font-['inter'] lg:text-xl bg-gradient-to-b from-[#0685F1] to-[#AAD8FF] bg-clip-text rounded-lg pl-10 pr-3 py-4 text-transparent font-medium bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Time Input */}
              <div className="flex-1">
                <label className="block text-[#E6E6E6] font-['inter'] text-2xl/relaxed font-medium mb-2">
                  Time
                </label>
                <input
                  type="text"
                  value={`${coinTime} min`}
                  readOnly
                  className="w-full border border-[#37404E] rounded-lg px-3 py-4 text-[#E6E6E6] font-['inter'] text-xl font-medium bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full sm:w-full max-w-full   text-[#E6E6E6] border-[1px] border-blue-500/50 py-3 rounded-lg font-['inter'] text-xl font-medium transition"
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>

      {/* Modal Section */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Background Blur */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={handleCancel}
          ></div>

          {/* Modal Content */}
          <div className="p-[1px] bg-gradient-to-b from-[#0685F1] to-[#AAD8FF] border">
            <div className="relative bg-[#1A1A1A]/100 rounded-xl p-8  max-w-md text-center z-10">
              <div className="flex flex-row gap-2 justify-center items-center">
                <Image
                  src={amountPic}
                  width={30}
                  height={30}
                  alt=""
                  className=""
                ></Image>
                <p className="text-[#E6E6E6] font-['inter'] text-2xl font-medium">
                  {coinAmount}
                </p>
              </div>
              <h3 className="text-[#D8D8D8] font-['inter'] font-medium lg:text-2xl/normal mb-4">
                Are you sure you want to spend{" "}
                <span className="text-blue-400">{coinAmount}</span> coins to purchase
                this plan?
              </h3>

              <div className="flex flex-row-reverse justify-center gap-4 mt-6">
                import LoadingSpinner from "./LoadingSpinner";

                // ... existing code

                <button
                  onClick={handleConfirm}
                  className="border-[1px] border-blue-500 text-white px-8 py-2 rounded-lg font-medium transition cursor-pointer font-['inter'] lg:text-lg flex items-center justify-center gap-2"
                >
                  {isLoading ? <LoadingSpinner size={20} /> : "Yes"}
                </button>
                <button
                  onClick={handleCancel}
                  className="cursor-pointer text-[#E96567] font-['inter'] lg:text-lg px-5 py-2 rounded-lg font-medium transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PremiumBuy;
