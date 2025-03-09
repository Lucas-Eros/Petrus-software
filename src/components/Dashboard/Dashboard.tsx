import React, { useState } from 'react';
import Card from '../Card/Card';
import Indicator from '../Indicator/Indicator';
import ActionButton from '../ActionButton/ActionButton';

const Dashboard: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string>('24h'); // iniciar com o periodo de hoje, validar como será integrado com a API

  const handlePeriodClick = (period: string) => {
    setSelectedPeriod(period); 
  };

  return (
    <>
      <div className="flex-1 p-6">
        <div className="font-medium">
          Dashboard
        </div>
        <div className="flex justify-between space-x-4 pt-4">
          <Card
            title={'Saldo Total'}
            value={12400000}
            change={1.2}
            period={'semana'}
            icon={'currency'}
            isCurrency={true}
          />
          <Card
            title={'Compradores Ativos'}
            value={284}
            change={12.5}
            period={'semana'}
            icon={'clock'}
          />
          <Card
            title={'Venda Diária'}
            value={842500000}
            change={12.5}
            period={'semana'}
            icon={'chart'}
            isCurrency={true}
          />
        </div>

        <div className="flex pt-6">
          <Indicator label="Hoje" value={0} />
          <Indicator label="7 Dias" value={4.3} />
          <Indicator label="30 Dias" value={-11.8} />

          <div className="flex ml-auto items-center">
            <ActionButton iconPath="/assets/AddContent.svg" label="Adicionar" color="bg-yellow-200" />
            <ActionButton iconPath="/assets/download.svg" label="Sacar" color="bg-yellow-200" />
            <ActionButton iconPath="/assets/transfer.svg" label="Trocar" color="bg-yellow-200" />
          </div>
        </div>
      </div>

      <div className="flex mt-6 border-t border-gray-200"></div>

      <div className="flex flex-1 p-6 justify-between items-center pt-6">
        <div className="font-medium">Visão de Mercado</div>

        <div className="flex justify-between items-center gap-4">
          <div
            className={`font-medium text-sm rounded p-2 cursor-pointer ${selectedPeriod === '24h' ? 'bg-yellow-300' : 'hover:bg-gray-200'}`}
            onClick={() => handlePeriodClick('24h')}
          >
            24h
          </div>
          <div
            className={`font-medium text-sm rounded p-2 cursor-pointer ${selectedPeriod === '7d' ? 'bg-yellow-300' : 'hover:bg-gray-200'}`}
            onClick={() => handlePeriodClick('7d')}
          >
            7d
          </div>
          <div
            className={`font-medium text-sm rounded p-2 cursor-pointer ${selectedPeriod === '30d' ? 'bg-yellow-300' : 'hover:bg-gray-200'}`}
            onClick={() => handlePeriodClick('30d')}
          >
            30d
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
