'use client';
import Image from "next/image";

interface ActionButtonProps {
  iconPath: string; 
  label: string;
  color: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ iconPath, label, color }) => {
  return (
    // todo adicionar comportamento onClick
    <div className="flex flex-col items-center mx-2 cursor-pointer" onClick={() => console.log("clicked")}>  
      <div className={`p-2 rounded ${color} mb-1 flex items-center justify-center`}>
        <Image src={iconPath} alt={label} width={16} height={16} />
      </div>
      <span className="text-xs text-gray-600">{label}</span>
    </div>
  );
};

export default ActionButton;
