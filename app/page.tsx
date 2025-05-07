"use client";

import { useState } from "react";

export default function Home() {
  // State for cube counts
  const [cubeCounts, setCubeCounts] = useState(Array(13).fill(0));
  
  // State for dropdown selections
  const [equipmentType, setEquipmentType] = useState("武器");
  const [potentialType, setPotentialType] = useState("傳說");
  const [additionalPotentialType, setAdditionalPotentialType] = useState("傳說");
  
  // State for toggle
  const [isToggleOn, setIsToggleOn] = useState(false);
  
  // Cube colors and styles
  const cubeStyles = [
    { bg: "#3498db", border: "#2980b9" }, // Blue
    { bg: "#e84393", border: "#c2185b" }, // Pink
    { bg: "#27ae60", border: "#219653" }, // Green
    { bg: "#9b59b6", border: "#8e44ad" }, // Purple
    { bg: "#2980b9", border: "#2471a3" }, // Dark Blue
    { bg: "#3498db", border: "#2980b9" }, // Blue
    { bg: "#f39c12", border: "#d35400" }, // Orange
    { bg: "#f1c40f", border: "#f39c12" }, // Yellow
    { bg: "#9b59b6", border: "#8e44ad" }, // Purple
    { bg: "#e84393", border: "#c2185b" }, // Pink
    { bg: "#e67e22", border: "#d35400" }, // Orange
    { bg: "#00cec9", border: "#00b5d1" }, // Cyan
    { bg: "#2ecc71", border: "#27ae60" }, // Light Green
  ];

  return (
    <div className="min-h-screen bg-[#ffeee8] p-4 md:p-8">
      {/* Cube Icons Row */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {cubeCounts.map((count, index) => (
          <div key={index} className="flex flex-col items-center">
            <div 
              className="w-10 h-10 md:w-12 md:h-12 rounded-md flex items-center justify-center mb-1"
              style={{ 
                backgroundColor: cubeStyles[index].bg,
                border: `2px solid ${cubeStyles[index].border}`
              }}
            >
              {/* This would be an image in the real implementation */}
              <span className="text-white font-bold text-xs">
                {index + 1}
              </span>
            </div>
            <span className="text-black">{count}</span>
          </div>
        ))}
      </div>

      {/* Control Panel */}
      <div className="max-w-md mx-auto bg-gray-200/70 rounded-lg p-4 md:p-6">
        {/* Equipment Selection */}
        <div className="mb-4 flex items-center justify-between">
          <div className="text-lg font-medium">選擇裝備</div>
          <div className="flex items-center gap-4">
            {/* Toggle Switch */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-black">加倍</span>
              <button 
                className={`w-12 h-6 rounded-full p-1 transition-colors ${isToggleOn ? 'bg-blue-500' : 'bg-gray-300'}`}
                onClick={() => setIsToggleOn(!isToggleOn)}
              >
                <div 
                  className={`w-4 h-4 rounded-full bg-white transition-transform ${isToggleOn ? 'translate-x-6' : ''}`}
                ></div>
              </button>
            </div>
            
            {/* Dropdown */}
            <select 
              className="bg-[#f05f40] text-white px-3 py-1 rounded-md"
              value={equipmentType}
              onChange={(e) => setEquipmentType(e.target.value)}
            >
              <option value="武器">武器</option>
              <option value="防具">防具</option>
              <option value="飾品">飾品</option>
            </select>
          </div>
        </div>

        {/* Potential Attributes */}
        <div className="mb-4 flex items-center justify-between">
          <div className="text-lg font-medium">潛在屬性</div>
          <select 
            className="bg-[#f05f40] text-white px-3 py-1 rounded-md"
            value={potentialType}
            onChange={(e) => setPotentialType(e.target.value)}
          >
            <option value="傳說">傳說</option>
            <option value="罕見">罕見</option>
            <option value="稀有">稀有</option>
            <option value="特殊">特殊</option>
          </select>
        </div>

        {/* Additional Potential Attributes */}
        <div className="mb-6 flex items-center justify-between">
          <div className="text-lg font-medium">附加潛在屬性</div>
          <select 
            className="bg-[#f05f40] text-white px-3 py-1 rounded-md"
            value={additionalPotentialType}
            onChange={(e) => setAdditionalPotentialType(e.target.value)}
          >
            <option value="傳說">傳說</option>
            <option value="罕見">罕見</option>
            <option value="稀有">稀有</option>
            <option value="特殊">特殊</option>
          </select>
        </div>

        {/* Initialize Button */}
        <button className="w-full bg-[#f05f40] text-white py-3 rounded-md text-xl font-medium mb-4">
          初始化
        </button>

        {/* Cost Display */}
        <div className="flex justify-between items-center">
          <div className="bg-gray-700 text-white px-3 py-1 rounded-md">
            <span className="font-bold">10</span> % off
          </div>
          <div className="text-right">
            <span className="font-medium">總花費：</span>
            <span className="font-bold">0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
