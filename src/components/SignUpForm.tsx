"use client";
import React, { useState } from "react";

import { Eye, EyeOff, Mail, User, Lock } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

import { useRegisterUserMutation } from "@/redux/features/auth/authApi";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import LoadingSpinner from "./LoadingSpinner";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter(); // Initialize router
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting form with data:", formData); // Debug log
    try {
      console.log("Calling registerUser mutation..."); // Debug log
      const response = await registerUser(formData).unwrap();
      console.log("Registration successful:", response);
      toast.success("Registration successful! Please login.");
      router.push("/login"); // Redirect to login page
    } catch (error) {
      console.error("Registration failed:", JSON.stringify(error, null, 2));
      const errorMessage = (error as any)?.data?.message || (error as any)?.message || "Registration failed. Please try again.";
      toast.error(errorMessage);
    }
  };

  return (
    <div>
      <div className="mb-5">
        <h2 className="text-[#E6E6E6] text-center font-['inter'] lg:text-5xl/relaxed font-semibold">
          Sign Up
        </h2>
        <p className="text-[#C8CACC] font-['inter'] lg:text-2xl/normal font-medium text-center">
          It only takes a minute to create your account
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <div>
            <label className="block text-sm mb-1 text-[#E6E6E6] font-['inter'] lg:text-[18px] font-medium">
              Full Name
            </label>
          </div>
          <div className="relative">
            <User className="absolute left-3 top-3 text-white" size={18} />
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border-[1px] border-[#0082F2] text-[#D2D2D2] font-['inter'] lg:text-[1rem] rounded-lg outline-none"
              placeholder="John Doe"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <div>
            <label className="block text-sm mb-1 text-[#E6E6E6] font-['inter'] lg:text-[18px] font-medium">
              Email
            </label>
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-white" size={18} />
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 text-[#D2D2D2] font-['inter'] lg:text-[1rem] border-[1px] border-[#0082F2] rounded-lg outline-none"
              placeholder="example@email.com"
            />
          </div>
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <div>
            <label className="block text-sm  mb-1 text-[#E6E6E6] font-['inter'] lg:text-[18px] font-medium">
              Password
            </label>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-white" size={18} />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-10 pr-10 py-2 text-[#D2D2D2] font-['inter'] lg:text-[1rem] border-[1px] border-[#0082F2] rounded-lg outline-none "
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-white cursor-pointer"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Sign Up Button */}
        <button
          type="submit"
          onClick={() => console.log("Sign Up")}
          disabled={isLoading}
          className="w-full my-5 font-['inter'] text-sm font-semibold lg:text-[18px] z-50 bg-gradient-to-r from-[#2199FF] to-[#A7D6FF] text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isLoading ? <LoadingSpinner size={20} /> : "Sign Up"}
        </button>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-500"></div>
          <span className="px-3 text-[#AEAEAE] font-['inter'] text-sm lg:text-[1rem]">
            Or Continue With
          </span>
          <div className="flex-grow border-t border-gray-500"></div>
        </div>

        {/* Google Login */}
        <button
          type="button"
          className=" border p-4 rounded-full mx-auto flex items-center justify-center gap-2 bg-gray-50 transition duration-200"
        >
          <FcGoogle size={27} />
        </button>

        {/* Login Redirect */}
        <p className="text-center text-sm text-gray-600 mt-3">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-indigo-600 font-medium hover:underline"
          >
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
