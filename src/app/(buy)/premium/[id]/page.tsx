"use client";
import PremiumBuy from '@/components/PremiumBuy';
import React from 'react';
import { useParams } from 'next/navigation';
import { useGetSubscriptionByIdQuery } from '@/redux/features/suscriptions/suscriptionsApi';

const BuyPremium = () => {
    const params = useParams();
    const id = params.id as string;

    const { data, isLoading, error } = useGetSubscriptionByIdQuery(id);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-white text-xl">Loading coin details...</p>
            </div>
        );
    }

    if (error || !data?.data) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-red-500 text-xl">Failed to load coin details. Please try again.</p>
            </div>
        );
    }

    const coinData = data.data;

    return (
        <div>
            <PremiumBuy
                coinId={id}
                coinType={coinData.type}
                coinAmount={coinData.coin}
                coinTime={coinData.time}
                coinPrice={coinData.price}
            />
        </div>
    );
};

export default BuyPremium;