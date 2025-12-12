"use client";
import React from "react";

interface LoadingSpinnerProps {
    size?: number;
    className?: string;
}

const LoadingSpinner = ({ size = 24, className = "" }: LoadingSpinnerProps) => {
    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            <svg
                className="animate-spin"
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="spinner-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2199FF" />
                        <stop offset="100%" stopColor="#A7D6FF" />
                    </linearGradient>
                </defs>
                <circle
                    className="opacity-20"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="3"
                />
                <path
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    fill="url(#spinner-gradient)"
                />
            </svg>
        </div>
    );
};

export default LoadingSpinner;
