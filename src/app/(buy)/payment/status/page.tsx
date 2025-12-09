"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useGetFuyhBillStatusQuery } from "@/redux/features/payment/paymentApi";
import Link from "next/link";

const PaymentStatus = () => {
  const searchParams = useSearchParams();
  const billId = searchParams.get("billId");
  const { data, error, isLoading } = useGetFuyhBillStatusQuery(billId, {
    skip: !billId,
  });

  useEffect(() => {
    if (data) {
      console.log("Payment status:", data);
    }
  }, [data]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        <h2 className="text-white font-inter text-3xl sm:text-4xl tracking-[8px] mb-6">
          Payment Status
        </h2>
        {isLoading && <p className="text-white">Loading...</p>}
        {error && (
          <p className="text-red-500">Error fetching payment status.</p>
        )}
        {data && (
          <div>
            {data?.data?.status === "paid" ? (
              <p className="text-white">Payment Successful!</p>
            ) : (
              <p className="text-white">Payment Failed. Please try again.</p>
            )}
            <Link href="/buy/pricing">
              <button className="mt-4 border-[1px] border-blue-500 text-white px-8 py-2 rounded-lg font-medium transition cursor-pointer font-['inter'] lg:text-lg">
                Go back to Pricing
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentStatus;
