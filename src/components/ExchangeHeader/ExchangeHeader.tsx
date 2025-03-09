import { FC, useState } from 'react';
import Image from 'next/image';

const ExchangeHeader: FC = () => {
  const [walletOpen, setWalletOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);

  return (
    <div className="flex items-center justify-between w-full relative">
      <Image src="/assets/bell.svg" alt="Notificações" width={18} height={18} />

      <div className="relative">
        <button
          onClick={() => setWalletOpen(!walletOpen)}
          className="flex items-center space-x-2 focus:outline-none"
        >
          <div className="relative w-6 h-6 rounded-full overflow-hidden">
            <Image src="/assets/avatar.svg" alt="Avatar" width={24} height={24} className="object-cover" />
          </div>
          <span className="font-medium text-xs">Add carteira</span>
          <Image
            src="/assets/chevron-down.svg"
            alt="Seta para baixo"
            width={12}
            height={12}
            className={`transition-transform ${walletOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {walletOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg p-2">
            <p className="text-sm text-gray-700 cursor-pointer hover:bg-gray-100 p-2 rounded">
              Carteira 1
            </p>
            <p className="text-sm text-gray-700 cursor-pointer hover:bg-gray-100 p-2 rounded">
              Carteira 2
            </p>
            <p className="text-sm text-gray-700 cursor-pointer hover:bg-gray-100 p-2 rounded">
              teste
            </p>
          </div>
        )}
      </div>

      <div className="relative">
        <button
          onClick={() => setCountryOpen(!countryOpen)}
          className="flex items-center rounded-md px-2 py-1 focus:outline-none"
        >
          <div className="w-5 h-5 rounded-full overflow-hidden mr-1">
            <Image src="/assets/brazilFlag.svg" alt="Brasil" width={20} height={20} className="object-cover" />
          </div>
          <span className="text-sm">Brasil</span>
          <Image
            src="/assets/chevron-down.svg"
            alt="Seta para baixo"
            width={12}
            height={12}
            className={`ml-1 transition-transform ${countryOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {countryOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg p-2">
            <p className="text-sm text-gray-700 cursor-pointer hover:bg-gray-100 p-2 rounded">
              Brasil
            </p>
            <p className="text-sm text-gray-700 cursor-pointer hover:bg-gray-100 p-2 rounded">
              Estados Unidos
            </p>
            <p className="text-sm text-gray-700 cursor-pointer hover:bg-gray-100 p-2 rounded">
              Espanha
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExchangeHeader;
