"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="pt-10  sticky top-0 z-50">
      {/* Main Navbar */}
      <div className="max-w-10/12 text-white flex items-center justify-between mx-5 md:mx-40 rounded-xl bg-[#040811] border border-[#1D97FF36] sticky top-[10px] z-50 px-5 py-3 md:py-4">
        {/* Logo */}
        <div>
          <Image
            src={logo}
            width={150}
            height={100}
            alt="logo"
            className="w-36 h-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-16 font-medium">
          <Link href={"/"}>
            <h1 className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">
              Home
            </h1>
          </Link>
          <Link
            href="/#works"
            className="hover:text-blue-400 transition-colors duration-200 cursor-pointer"
          >
            How It Works
          </Link>
          <Link
            href="/#pricing"
            className="hover:text-blue-400 transition-colors duration-200 cursor-pointer"
          >
            Pricing
          </Link>

          <Link href={"/message"}>
            <h1 className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">
              Message
            </h1>
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-5 items-center">
          <Link
            href="/sign-up"
            className="font-semibold text-white hover:text-blue-400 transition-colors duration-200"
          >
            SIGN UP
          </Link>

          {/* Login Button - Desktop */}
          <div className="relative group">
            <div
              className={`
                absolute -inset-[2px] rounded-lg 
                bg-gradient-to-r from-[#0082F2] to-[#181818] 
                opacity-50 group-hover:opacity-100 
                transition-all duration-700 ease-in-out
                group-hover:from-[#0082F2] group-hover:via-[#00C6FF] group-hover:to-[#0082F2]
                group-hover:shadow-[0_0_12px_#0082F2]
                shadow-[0_0_6px_#0082F2]
              `}
            />
            <Link href={"/login"}>
              <button className="relative px-6 py-2 bg-[#040811] text-white font-semibold rounded-lg transition-all duration-300 ease-in-out">
                LOGIN
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div
          onClick={() => setOpenMenu(true)}
          className="lg:hidden text-white cursor-pointer"
        >
          <Menu size={26} />
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed z-50 bg-gradient-to-b from-[#0d0b0b] to-[#023562] h-screen right-0 top-0 w-[250px] transform transition-transform duration-500 ease-in-out ${openMenu ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Close Button */}
        <div
          className="text-white flex justify-end p-5 cursor-pointer"
          onClick={() => setOpenMenu(false)}
        >
          <X size={26} />
        </div>

        {/* Menu Links */}
        <div className="flex flex-col text-white font-medium px-8 gap-6 mt-8">
          <Link href={"/"}>
            <h1 className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">
              Home
            </h1>
          </Link>
          <Link
            href="/#works"
            className="hover:text-blue-400 transition-colors duration-200 cursor-pointer"
          >
            How It Works
          </Link>
          <Link
            href="/#pricing"
            className="hover:text-blue-400 transition-colors duration-200 cursor-pointer"
          >
            Pricing
          </Link>
        </div>

        {/* Mobile Buttons */}
        <div className="flex flex-col gap-5 items-start px-8 mt-10">
          <Link href="/sign-up">
            <button className="font-semibold text-white hover:text-blue-400 transition-colors duration-200">
              SIGN UP
            </button>
          </Link>

          {/* Login Button - Mobile */}
          <div className="relative group">
            <div
              className={`
                absolute -inset-[2px] rounded-lg 
                bg-gradient-to-r from-[#0082F2] to-[#181818] 
                opacity-50 group-hover:opacity-100 
                transition-all duration-700 ease-in-out
                group-hover:from-[#0082F2] group-hover:via-[#00C6FF] group-hover:to-[#0082F2]
                group-hover:shadow-[0_0_12px_#0082F2]
                shadow-[0_0_6px_#0082F2]
              `}
            />
            <Link href="/login">
              <button className="relative px-6 py-2 bg-[#040811] text-white font-semibold rounded-lg transition-all duration-300 ease-in-out">
                LOGIN
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Optional dark overlay */}
      {openMenu && (
        <div
          onClick={() => setOpenMenu(false)}
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-500 lg:hidden"
        ></div>
      )}
    </div>
  );
};

export default NavBar;
