import React from "react";
import Image from "next/image";

interface IndicatorProps {
  label: string;
  value: number;
}

const Indicator: React.FC<IndicatorProps> = ({ label, value }) => {
  const renderIcon = () => {
    if (value > 0) {
      return <Image src="/assets/up.svg" alt="up Icon" width={12} height={12} />;
    } else if (value < 0) {
      return "↓"; 
    }
    return null; 
  };

  return (
    <div className="flex flex-col items-start border-r px-4 py-2">
      <span className="text-xs text-gray-500">{label}</span>
      <div className="flex items-center mt-1">
        <span className="font-medium mr-1">
          {value > 0 ? `+${value}` : value}%
        </span>
        {renderIcon()}
      </div>
    </div>
  );
};

export default Indicator;
