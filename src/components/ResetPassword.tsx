"use client";
import { Lock } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useResetPasswordMutation } from "@/redux/features/auth/authApi";
import { useSelector } from 'react-redux';
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import LoadingSpinner from "./LoadingSpinner";

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [resetPassword, { isLoading }] = useResetPasswordMutation();
    const router = useRouter();
    const email = useSelector((state: any) => state.forgotPassword.email);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        if (!email) {
            toast.error("Email not found. Please try the process again.");
            router.push("/forgetpass");
            return;
        }

        try {
            // Adjust payload based on backend expectation. Assuming token + newPassword
            await resetPassword({ email, password: newPassword }).unwrap();
            toast.success("Password reset successfully! Please login.");
            localStorage.removeItem("resetPasswordToken"); // Clean up if it was set
            router.push("/login"); // Assuming /login exists, check existing dirs
        } catch (error: any) {
            console.error("Reset password error:", error);
            const errorMessage = error?.data?.message || "Failed to reset password. Please try again.";
            toast.error(errorMessage);
        }
    };

    return (
        <div className=''>
            <div className='mb-8'>
                <h2 className='text-[#E6E6E6] font-["inter"] lg:text-5xl/normal font-semibold text-center'>Reset Password</h2>
                <p className='text-[#C8CACC] lg:text-lg/normal font-["inter"] text-center'>Enter a new password for your account</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4">
                    {/* New Password */}
                    <div className="flex flex-col gap-2">
                        <label className="block text-sm mb-1 text-[#E6E6E6] font-['inter'] lg:text-[18px] font-medium">
                            New Password
                        </label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 text-white" size={18} />
                            <input
                                type="password"
                                required
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full pl-10 pr-3 py-2 border-[1px] border-[#0082F2] text-[#D2D2D2] font-['inter'] lg:text-[1rem] rounded-lg outline-none bg-transparent"
                                placeholder="Enter new password"
                                minLength={6}
                            />
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="flex flex-col gap-2">
                        <label className="block text-sm mb-1 text-[#E6E6E6] font-['inter'] lg:text-[18px] font-medium">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 text-white" size={18} />
                            <input
                                type="password"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full pl-10 pr-3 py-2 border-[1px] border-[#0082F2] text-[#D2D2D2] font-['inter'] lg:text-[1rem] rounded-lg outline-none bg-transparent"
                                placeholder="Confirm new password"
                                minLength={6}
                            />
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full my-8 font-['inter'] text-sm font-semibold lg:text-[18px] bg-gradient-to-r from-[#2199FF] to-[#A7D6FF] text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                    {isLoading ? <LoadingSpinner size={20} /> : "Reset Password"}
                </button>
            </form>
        </div>
    );
};

export default ResetPassword;
