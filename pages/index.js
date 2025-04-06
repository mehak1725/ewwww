import React, { useState } from "react";
import { Sun, Moon, Camera, MapPin, Bot } from "lucide-react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [aiOutput, setAiOutput] = useState("");

  const handleScanClick = () => {
    setAiOutput("♻️ This looks like plastic waste. Recycle it at your nearest center.");
  };

  return (
    <div className={darkMode ? "bg-gray-900 text-white min-h-screen" : "bg-white text-gray-900 min-h-screen"}>
      <div className="max-w-xl mx-auto py-10 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">EWWWW 🌍</h1>
          <button className="p-2 rounded-full border" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle theme">
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </div>

        <div className="grid gap-4 mb-6">
          <button onClick={handleScanClick} className="w-full bg-green-600 text-white p-3 rounded-xl flex items-center justify-center gap-2 hover:bg-green-700 transition">
            <Camera /> Scan Waste
          </button>

          <button className="w-full bg-blue-600 text-white p-3 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition">
            <MapPin /> Find Recycling Center
          </button>

          <button className="w-full bg-purple-600 text-white p-3 rounded-xl flex items-center justify-center gap-2 hover:bg-purple-700 transition">
            <Bot /> Ask AI for Help
          </button>
        </div>

        {aiOutput && (
          <div className="p-4 bg-green-100 text-green-800 rounded-xl border border-green-300">
            {aiOutput}
          </div>
        )}

        <div className="mt-10 text-center text-sm text-gray-500">
          Made for the Planet 🌱 | Hackathon Project
        </div>
      </div>
    </div>
  );
}