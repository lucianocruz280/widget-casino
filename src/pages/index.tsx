import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Widget from "@/components/Widget";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-white">
       <Toaster />
      <Widget />
    </div>
  );
}
