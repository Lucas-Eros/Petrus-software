import React from 'react';
import Image from 'next/image';

type IconType = 'dollar' | 'clock' | 'chart';

interface CardProps {
    title: string;
    value: string;
    change: string;
    period: string;
    icon: IconType;
    isPositive: boolean;
}

const Card = ({ title, value, change, period, icon, isPositive }: CardProps) => {
    const icons = {
        dollar: (
            <div className="w-6 h-6 flex items-center justify-center">
                <Image src="/assets/dollar.svg" alt="Dollar Icon" width={12} height={12} />
            </div>
        ),
        clock: (
            <div className="w-6 h-6 flex items-center justify-center">
                <Image src="/assets/clock.svg" alt="Clock Icon" width={12} height={12} />
            </div>
        ),
        chart: (
            <div className="w-6 h-6 flex items-center justify-center">
                <Image src="/assets/chart.svg" alt="Chart Icon" width={12} height={12} />
            </div>
        ),
    };

    return (
        <div className="bg-white rounded shadow p-6 flex-1 max-w-xs h-auto">
            <div className="flex justify-between items-center">
                <h3 className="text-sm text-gray-500">{title}</h3>
                <div className="w-8 h-8 bg-customYellow rounded flex items-center justify-center">
                    {icons[icon]}
                </div>
            </div>

            <div className="mt-2">
                <span className="text-2xl font-bold">{value}</span>
            </div>

            <div className="mt-2">
                <span
                    className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${isPositive ? 'bg-lime-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                >
                    {change} {period}
                </span>
            </div>
        </div>
    );
};

export default Card;
