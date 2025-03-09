import React from 'react';
import Image from 'next/image';

export type CryptoCardProps = {
    name: string;
    shortname: string;
    balance: number;
    priceChangePercentage: number;
    iconSrc: string;
};

const CryptoCard: React.FC<CryptoCardProps> = ({ name, shortname, balance, priceChangePercentage, iconSrc }) => {

    const renderPriceChange = () => {
        const isPositive = priceChangePercentage > 0;
        const isZero = priceChangePercentage === 0;
        const iconSrc = isPositive ? "/assets/up.svg" : "/assets/down.svg";
        const iconAlt = isPositive ? "up Icon" : "down Icon";
        const displayPercentage = isZero ? '0%' : `${isPositive ? '+' : ''}${priceChangePercentage}%`;
      
        return (
          <>
            {displayPercentage}
            {!isZero && (
              <div className="ml-1">
                <Image src={iconSrc} alt={iconAlt} width={8} height={8} />
              </div>
            )}
          </>
        );
      };
      

    return (
        <div className="bg-gray-50 p-4 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 flex items-center justify-center">
                    {iconSrc ? (
                        <Image src={iconSrc} alt={name} width={24} height={24} />
                    ) : (
                        <span className="text-white font-bold">{shortname.charAt(0)}</span>
                    )}
                </div>

                <div>
                    <h3 className="font-medium text-black">{name}</h3>
                    <p className="text-gray-500 text-sm">{shortname}</p>
                </div>
            </div>

            <div className="mt-3 flex gap-2">
                <p className="font-semibold text-black">{balance}</p>

                <span
                    className={`inline-flex items-center text-sm px-2 py-1 rounded-xl ${priceChangePercentage >= 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}
                >
                    {renderPriceChange()}
                </span>
            </div>
        </div>
    );
};

export default CryptoCard;
