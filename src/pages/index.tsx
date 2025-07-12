import Widget from "@/components/Widget";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-white">
      <Toaster />
      <Widget />
      <iframe src="https://dota.click" className="h-full w-full" />
      
    </div>
  );
}
