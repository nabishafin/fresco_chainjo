import { JSX } from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { images } from "./images";

// this is for session info
export const data: any = {
  phone_number: "+1 (555) 123-4567",
  plan_type: "Random line",
  session_started: "11:45pm",
};
// this is for another person message
// Define the type for each message
export interface OtherMessage {
  time: string;
  message: string;
}
export const other_person_message: OtherMessage[] = [
  {
    time: "12:46 PM",
    message: "Hello! Your verification code is 123456.",
  },
  {
    time: "12:46 PM",
    message: "Hello! Your verification code is 123456.",
  },
  {
    time: "12:56 PM",
    message:
      "Your order #12345 has been shipped. Track your package at example.com/track.",
  },
  {
    time: "1:46 PM",
    message: "Reminder: Your appointment is scheduled for tomorrow at 2:00 PM.",
  },
  {
    time: "1:46 PM",
    message: "Special offer: Get 20% off your next purchase with code SAVE20.",
  },
];
export const user_message: OtherMessage[] = [
  {
    time: "1:46 PM",
    message: "All messages will auto-delete in 15 minutes for your privacy.",
  },
];

// this is for card data
export interface cardDataType {
  icon: any;
  name: string;
}

export const CardData: cardDataType[] = [
  {
    icon: images.card,
    name: "Card",
  },
  {
    icon: images.deal,
    name: "iDEAL",
  },
  {
    icon: images.bancontact,
    name: "bancontact",
  },
];
