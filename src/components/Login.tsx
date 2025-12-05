"use client";
import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setLogin } from "@/redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const Login = () => {
    const [checked, setChecked] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const { data } = await login({ email, password }).unwrap();

            // Store token in localStorage for baseApi to pick up
            localStorage.setItem("accessToken", data.accessToken);
            if (data.refreshToken) {
                localStorage.setItem("refreshToken", data.refreshToken);
            }

            // Dispatch to Redux (redux-persist handles this state)
            dispatch(
                setLogin({
                    user: data.user,
                    token: data.accessToken,
                    refreshToken: data.refreshToken,
                })
            );

            alert("Login successful!");
            router.push("/");
        } catch (error: any) {
            console.error("Login failed:", error);
            alert(
                error?.data?.message || "Login failed. Please check your credentials."
            );
        }
    };

    return (
        <div className="flex flex-col items-center justify-center text-white min-h-screen">
            <div className="mb-14">
                <h1 className="font-semibold text-5xl">Welcome Back</h1>
                <p className="text-center font-medium text-2xl mt-3">
                    Login to your account
                </p>
            </div>

            <form className="flex flex-col gap-5 w-full px-4" onSubmit={handleLogin}>
                {/* Email Input */}
                <div className="flex flex-col gap-2">
                    <label className="block text-sm mb-1 text-[#E6E6E6] font-['inter'] lg:text-[18px] font-medium">
                        Enter your E-mail or Number
                    </label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-3.5 text-white" size={18} />
                        <input
                            className="w-full pl-10 pr-3 py-2.5 border-[1px] border-[#0082F2] text-[#D2D2D2] font-['inter'] lg:text-[1rem] rounded-lg outline-none bg-transparent"
                            type="email"
                            placeholder="E-mail address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>

                {/* Password Input */}
                <div className="flex flex-col gap-2">
                    <label className="block text-sm mb-1 text-[#E6E6E6] font-['inter'] lg:text-[18px] font-medium">
                        Password
                    </label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-3.5 text-white" size={18} />
                        <input
                            className="w-full pl-10 pr-10 py-2.5 border-[1px] border-[#0082F2] text-[#D2D2D2] font-['inter'] lg:text-[1rem] rounded-lg outline-none bg-transparent"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3.5 text-white cursor-pointer"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                {/* Remember / Forgot Password */}
                <div className="flex justify-between w-full">
                    <div
                        className="cursor-pointer"
                        onClick={() => setChecked(!checked)}
                    >
                        <label className="flex items-center space-x-2 cursor-pointer select-none text-[#C8CACC] hover:text-white transition">
                            <span
                                className={`w-4 h-4 rounded-full border-2 border-white transition-all duration-200 flex items-center justify-center ${checked ? " bg-white" : "border-gray-400 bg-transparent"
                                    }`}
                            >
                                {checked && (
                                    <span className="w-2 h-2 bg-white rounded-full"></span>
                                )}
                            </span>
                            <span className="text-sm font-['inter']">Remember me</span>
                        </label>
                    </div>
                    <div>
                        <Link
                            href="/forgetpass"
                            className="text-[#FF7070E5] text-xs font-medium cursor-pointer"
                        >
                            Forgot password
                        </Link>
                    </div>
                </div>

                {/* Login Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-gradient-to-r from-[#2199FF] to-[#A7D6FF] w-full py-2.5 rounded-lg disabled:opacity-50 text-white font-semibold font-['inter']"
                >
                    {isLoading ? "Logging in..." : "Login"}
                </button>

                {/* Divider */}
                <div className="flex items-center justify-center w-full text-[#AEAEAE] text-sm font-['inter']">
                    <div className="flex-grow border-t border-gray-600"></div>
                    <span className="px-3">Or Continue With</span>
                    <div className="flex-grow border-t border-gray-600"></div>
                </div>

                {/* Google Button */}
                <div className="bg-white p-2 rounded-full mx-auto w-fit cursor-pointer hover:bg-gray-100 transition">
                    <FcGoogle size={30} />
                </div>

                {/* Sign Up Link */}
                <p className="text-center text-sm text-gray-400 mt-2 font-['inter']">
                    Don&apos;t have an account?{" "}
                    <Link
                        href="/sign-up"
                        className="text-[#0082F2] font-medium hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;