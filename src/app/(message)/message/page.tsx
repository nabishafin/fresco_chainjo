import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";
import "../../../app/globals.css";
import {
  data,
  OtherMessage,
  other_person_message,
  user_message,
} from "../../../../constans";

const Message = () => {
  return (
    <div className="z-10 text-white flex flex-col gap-[80px]">
      {/* this is for nav bar */}
      <NavBar />
      {/* this is main part of the Message page  */}
      <main className="z-20 flex justify-center items-center lg:mx-[160px] flex-col gap-[48px]">
        {/* this is for realtime sms heading part */}
        <div className="flex flex-col gap-4">
          <h1 className="sms_dashboard_heading">Real-Time SMS Dashboard</h1>
          <p className="text-[18px] font-medium text-[#BEBEBE]">
            View your messages securely in our intuitive dashboard interface.
          </p>
        </div>
        {/* this is for realtime sms body part */}
        <div className="w-full z-10">
          {/* this is for number and timing part of the message and how sent this message */}
          <div className="flex justify-between items-center sms_head">
            <p className="flex items-center gap-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    d="M12.028 13.8067C12.2001 13.8858 12.394 13.9038 12.5777 13.8579C12.7615 13.8121 12.9241 13.7049 13.0388 13.5542L13.3346 13.1667C13.4899 12.9598 13.6912 12.7917 13.9226 12.676C14.154 12.5603 14.4092 12.5001 14.668 12.5001H17.168C17.61 12.5001 18.0339 12.6757 18.3465 12.9882C18.659 13.3008 18.8346 13.7247 18.8346 14.1667V16.6667C18.8346 17.1088 18.659 17.5327 18.3465 17.8453C18.0339 18.1578 17.61 18.3334 17.168 18.3334C13.1897 18.3334 9.37441 16.7531 6.56137 13.94C3.74832 11.127 2.16797 7.31166 2.16797 3.33341C2.16797 2.89139 2.34356 2.46746 2.65612 2.1549C2.96868 1.84234 3.39261 1.66675 3.83464 1.66675H6.33464C6.77666 1.66675 7.20059 1.84234 7.51315 2.1549C7.82571 2.46746 8.0013 2.89139 8.0013 3.33341V5.83341C8.0013 6.09216 7.94106 6.34734 7.82535 6.57877C7.70963 6.8102 7.54163 7.0115 7.33464 7.16675L6.94464 7.45925C6.79165 7.57606 6.68382 7.74224 6.63946 7.92954C6.5951 8.11684 6.61695 8.31373 6.7013 8.48675C7.8402 10.8 9.71332 12.6707 12.028 13.8067Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span> +1 (555) 123-4567</span>
            </p>
            <p className="flex items-center gap-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    d="M10.5013 18.3334C15.1037 18.3334 18.8346 14.6025 18.8346 10.0001C18.8346 5.39771 15.1037 1.66675 10.5013 1.66675C5.89893 1.66675 2.16797 5.39771 2.16797 10.0001C2.16797 14.6025 5.89893 18.3334 10.5013 18.3334Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.5 5V10L13.8333 11.6667"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>12:34 remaining</span>
            </p>
          </div>
          {/* this is for Session Info part in the message part */}
          <div className="flex gap-[14px] ">
            {/* session info part */}
            <div className="session_info flex-1 flex justify-start items-start flex-col max-w-[174px]">
              <h1 className="text-[#E6E6E6] text-center text-[18px]">
                Session Info
              </h1>
              {/* this is for session info desc */}
              <div className="flex flex-col gap-6">
                <p className="flex flex-col gap-2">
                  <strong className="text-[14px] text-[#999999]">
                    Phone Number
                  </strong>
                  <span className="text-sm text-[#0082F2]">
                    {data.phone_number}
                  </span>
                </p>
                <p className="flex flex-col gap-2">
                  <strong className="text-[14px] text-[#999999]">
                    Plan type
                  </strong>
                  <span className="text-sm text-[#0082F2]">
                    {data.plan_type}
                  </span>
                </p>
                <p className="flex flex-col gap-2">
                  <strong className="text-[14px] text-[#999999]">
                    Session started
                  </strong>
                  <span className="text-sm text-[#E6E6E6]">
                    {data.session_started}
                  </span>
                </p>
              </div>
            </div>
            {/* message part */}
            <div className="flex-3 flex flex-col gap-6">
              <div className="flex justify-between items-end py-6">
                {/* other person message */}
                <div className="flex flex-col gap-[18px]">
                  {other_person_message.map(
                    (message: OtherMessage, index: number) => {
                      return (
                        <div key={index}>
                          <div className="other_message">
                            <p className="message_time text-[#C8CACC] text-[12px]">
                              {message.time}
                            </p>
                            <p className="message_content text-[#E6E6E6] text-[12px]">
                              {message.message}
                            </p>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
                {/* user message */}
                <div>
                  {user_message.map((message: OtherMessage, index: number) => {
                    return (
                      <div key={index} className="use_message">
                        <p className="text-[#C8CACC] text-[12px]">
                          {message.time}
                        </p>
                        <p className="text-[#E6E6E6] text-[12px]">
                          {message.message}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-full">
                <button className="buy_again_btn w-full text-[#0082F2] text-sm cursor-pointer">
                  Buy Again
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* this is for footer page */}
      <Footer />
    </div>
  );
};

export default Message;
