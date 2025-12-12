import LoadingSpinner from "@/components/LoadingSpinner";
import React from "react";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">
                <LoadingSpinner size={60} />
            </div>
        </div>
    );
}
