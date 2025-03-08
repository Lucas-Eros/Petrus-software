import { FC } from 'react';
import Image from 'next/image';

const ExchangeHeader: FC = () => {
  return (
    <div className="flex items-center justify-between w-full p-3 border-b border-gray-200">
      <Image src="/assets/bell.svg" alt="Notificações" width={18} height={18} />

      <div className="flex items-center space-x-2">
        <div className="relative w-6 h-6 rounded-full overflow-hidden">
          <Image src="/assets/avatar.svg" alt="Avatar" width={24} height={24} className="object-cover" />
        </div>
        <span className="font-medium text-xs">Add carteira</span>
        <Image src="/assets/chevron-down.svg" alt="Seta para baixo" width={12} height={12} />
      </div>

      <div className="flex items-center border rounded-md px-2 py-1">
        <div className="w-5 h-5 rounded-full overflow-hidden mr-1">
          <Image src="/assets/brazilFlag.svg" alt="Brasil" width={20} height={20} className="object-cover" />
        </div>
        <span className="text-sm">Brasil</span>
        <Image src="/assets/chevron-down.svg" alt="Seta para baixo" width={12} height={12} className="ml-1" />
      </div>
    </div>
  );
};

export default ExchangeHeader;
