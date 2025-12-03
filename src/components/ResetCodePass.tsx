'use client';

import { ShieldCheck } from 'lucide-react';
import React, { useState, ChangeEvent, KeyboardEvent } from 'react';

const ResetCodePass: React.FC = () => {
    const [code, setCode] = useState<string[]>(Array(6).fill(''));

    const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;
        if (/^[0-9]?$/.test(value)) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

            // Move to next input if not last and value entered
            if (value && index < 5) {
                const nextInput = document.getElementById(`code-${index + 1}`) as HTMLInputElement | null;
                nextInput?.focus();
            }
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            const prevInput = document.getElementById(`code-${index - 1}`) as HTMLInputElement | null;
            prevInput?.focus();
        }
    };

    return (
        <div className="text-center">




            <button className='text-white bg-gradient-to-b from-[#0685F1] to-[#AAD8FF] mb-5 p-4 rounded-full'>
                <ShieldCheck size={30} />
            </button>


            <h2 className="text-[#E6E6E6] font-['inter'] text-5xl/normal font-semibold mb-2">Enter Verification Code</h2>
            <p className="text-[#C8CACC] font-['inter'] text-sm mb-6">
                We’ve sent a 6-digit code to ****@gmail.com
            </p>

            <div className="flex justify-center gap-3">
                {code.map((digit, index) => (
                    <input
                        key={index}
                        id={`code-${index}`}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        className="w-12 h-12 text-center text-lg font-semibold text-white bg-transparent border-[1px] border-[#0082F2] rounded-lg focus:outline-none focus:border-[#33A3FF] transition"
                    />
                ))}
            </div>
            {/* verify button */}
            <button
                type="submit"
                className="w-full my-5 font-['inter'] text-sm font-semibold lg:text-[18px] bg-gradient-to-r from-[#2199FF] to-[#A7D6FF] text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center justify-center gap-2"
            >
                Verify
            </button>
            <p className='text-[#E6E6E6] font-["inter"] text-sm'>Don&apos;t recieve the code? <span className='text-[#0082F2]'>Resend</span> </p>
        </div>
    );
};

export default ResetCodePass;
