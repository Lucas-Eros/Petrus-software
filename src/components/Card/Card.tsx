import React from 'react';
import Image from 'next/image';
import CurrencyFormatter from '../../utils/CurrencyFormatter';


type IconType = 'currency' | 'clock' | 'chart';

interface CardProps {
    title: string;
    value: number;
    change: number;
    period: string;
    icon: IconType;
    isCurrency?: boolean;
}

const Card = ({ title, value, change, period, icon, isCurrency }: CardProps) => {
    const icons = {
        currency: (
            <div className="w-6 h-6 flex items-center justify-center">
                <Image src="/assets/dollar.svg" alt="Dollar Icon" width={10} height={10} />
            </div>
        ),
        clock: (
            <div className="w-6 h-6 flex items-center justify-center">
                <Image src="/assets/clock.svg" alt="Clock Icon" width={16} height={16} />
            </div>
        ),
        chart: (
            <div className="w-6 h-6 flex items-center justify-center">
                <Image src="/assets/chart.svg" alt="Chart Icon" width={16} height={16} />
            </div>
        ),
    };

    return (
        <div className="bg-white rounded shadow p-6 flex-1 max-w-xs h-auto">
            <div className="flex justify-between items-center">
                <h3 className="text-sm text-gray-500">{title}</h3>
                <div className="w-8 h-8 bg-customYellow-200 rounded flex items-center justify-center">
                    {icons[icon]}
                </div>
            </div>

            <div className="mt-2">
                <span className="text-2xl font-bold">{isCurrency ? CurrencyFormatter.format(value) : value}</span>
            </div>

            <div className="mt-2">
                <span
                    className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium border ${(change > 0) ? 'border-green-600 text-green-600' : (change < 0) ? 'border-red-600 text-red-600' : 'border-gray-600 text-gray-600'}`}
                >
                    {change > 0 ? '+' + change + '%' : change + '%'} {period === 'semana' ? `essa ${period}` : period === 'mes' ? 'esse mês' : period === 'hoje' ? 'hoje' : ''} {change > 0 ?
                        <div className='ml-1'>
                            <Image src="/assets/up.svg" alt="up Icon" width={8} height={8} />
                        </div>
                        :
                        change == 0 ? '' :
                            '↓'}
                    {/* <div className='ml-1'> 
                        <Image src="/assets/down.svg" alt="down Icon" width={8} height={8} /> 
                        </div>} */}
                </span>
            </div>
        </div>
    );
};

export default Card;
