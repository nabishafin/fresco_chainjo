"use client";
import React, { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";
import { useLazyGetAllPhoneNumbersQuery, useConfirmPhoneNumberMutation } from "@/redux/features/phoneNumbersApi";
import { toast } from "react-toastify";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const GeneratePage = () => {
    const [selectedPhoneData, setSelectedPhoneData] = useState<any>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const [triggerGetAllPhoneNumbers, { isLoading: isFetching }] = useLazyGetAllPhoneNumbersQuery();
    const [confirmPhoneNumber, { isLoading: isConfirming }] = useConfirmPhoneNumberMutation();

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Initialize search query from URL if present
    useEffect(() => {
        const query = searchParams.get("search");
        if (query) {
            setSearchQuery(query);
        }
    }, [searchParams]);

    const handleGenerate = async () => {
        try {
            // No search param for "Generate"
            const result = await triggerGetAllPhoneNumbers(undefined).unwrap();
            if (result.success && result.data && result.data.length > 0) {
                // Filter for unused numbers
                const availableNumbers = result.data.filter((item: any) => !item.isUsed);

                if (availableNumbers.length > 0) {
                    // Pick a random number
                    const randomIndex = Math.floor(Math.random() * availableNumbers.length);
                    const randomData = availableNumbers[randomIndex];
                    setSelectedPhoneData(randomData);
                    toast.success("Phone number generated successfully!");
                } else {
                    toast.info("No available phone numbers at the moment.");
                }
            } else {
                toast.error("Failed to fetch phone numbers.");
            }
        } catch (error) {
            console.error("Error generating number:", error);
            toast.error("An error occurred while generating number.");
        }
    };

    const handleSearchConfirm = async () => {
        if (!searchQuery) {
            toast.info("Please enter a search term.");
            return;
        }

        try {
            // Call API with search query
            const result = await triggerGetAllPhoneNumbers(searchQuery).unwrap();

            if (result.success && result.data && result.data.length > 0) {
                const availableNumbers = result.data.filter((item: any) => !item.isUsed);
                if (availableNumbers.length > 0) {
                    // Just showing the first match for search
                    const randomData = availableNumbers[0];
                    setSelectedPhoneData(randomData);
                    toast.success(`Found ${availableNumbers.length} matching numbers. Displaying one.`);
                } else {
                    toast.info("No unused numbers found matching your search.");
                }
            } else {
                toast.info("No numbers found matching your search.");
            }
        } catch (error) {
            console.error("Error searching numbers:", error);
            toast.error("Search failed.");
        }
    };

    const handleConfirmSelection = async () => {
        if (!selectedPhoneData) {
            toast.warn("Please generate or search for a number first.");
            return;
        }

        try {
            // "device" comes from "filterName" as per assumption/inference or user context
            // If filterName is null, we might need a fallback or validation
            const payload = {
                purchasedPhoneNumber: selectedPhoneData.phoneNumber,
                device: selectedPhoneData.filterName || "Unknown Device",
            };

            const result = await confirmPhoneNumber(payload).unwrap();
            console.log("Confirm result:", result);

            if (result.success) {
                toast.success("Phone number confirmed successfully!");
                setSelectedPhoneData(null); // Clear selection or keep it? Clearing for now.
            } else {
                toast.error(result.message || "Failed to confirm number.");
            }
        } catch (error: any) {
            console.error("Error confirming number:", error);
            toast.error(error?.data?.message || "An error occurred during confirmation.");
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <div className="mb-[80px]">
                <NavBar />
            </div>

            <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-10 gap-16 lg:gap-32">
                <div className="flex flex-col lg:flex-row w-full max-w-6xl justify-center items-start lg:items-center gap-16 lg:gap-32">

                    {/* Left Section: Generate Flow */}
                    <div className="flex flex-col gap-8 w-full max-w-md mx-auto">
                        {/* Generate Button */}
                        <button
                            onClick={handleGenerate}
                            disabled={isFetching}
                            className="w-full py-4 rounded-lg border border-[#0082F2] text-[#0082F2] font-['inter'] text-lg font-medium hover:bg-[#0082F2]/10 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            {isFetching ? <LoadingSpinner size={24} /> : "Generate"}
                        </button>

                        {/* Phone Input */}
                        <input
                            type="text"
                            placeholder="+880....."
                            value={selectedPhoneData?.phoneNumber || ""}
                            readOnly
                            className="w-full bg-transparent border border-[#0082F2] rounded-lg px-6 py-4 text-[#E6E6E6] font-['inter'] placeholder:text-[#6E6E6E] focus:outline-none focus:ring-2 focus:ring-[#0082F2]/50"
                        />

                        {/* Confirm Button */}
                        <button
                            onClick={handleConfirmSelection}
                            disabled={isConfirming || !selectedPhoneData}
                            className="w-full py-4 rounded-lg bg-[#0A0A0A] border border-[#262626] text-[#E6E6E6] font-['inter'] text-lg font-medium hover:bg-[#1A1A1A] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            {isConfirming ? <LoadingSpinner size={24} /> : "Confirm"}
                        </button>
                    </div>

                    {/* Right Section: Search Flow */}
                    <div className="flex flex-row gap-4 w-full max-w-xl mx-auto items-center">
                        {/* Search Input */}
                        <div className="relative flex-grow">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#E6E6E6]" size={20} />
                            <input
                                type="text"
                                placeholder="Type here..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-transparent border border-[#3E3E3E] rounded-lg pl-12 pr-6 py-4 text-[#E6E6E6] font-['inter'] placeholder:text-[#6E6E6E] focus:outline-none focus:ring-2 focus:ring-[#0082F2]/50"
                            />
                        </div>

                        {/* Confirm Button (Small) */}
                        <button
                            onClick={handleSearchConfirm}
                            className="px-8 py-4 rounded-lg bg-[#0A0A0A] border border-[#262626] text-[#E6E6E6] font-['inter'] text-lg font-medium hover:bg-[#1A1A1A] transition-colors whitespace-nowrap"
                        >
                            Confirm
                        </button>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default GeneratePage;
