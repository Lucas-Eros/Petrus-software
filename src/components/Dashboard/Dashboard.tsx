import Card from '../Card/Card';

const Dashboard: React.FC = () => {
  return (
    <div className="flex-1 p-5">
      <div className="flex space-x-4">
        <Card 
          title={'Saldo Total'} 
          value={'12.4M'} 
          change={''} 
          period={''} 
          icon={'dollar'} 
          isPositive={false}
        />
        <Card 
          title={'Saldo Total'} 
          value={'12.400,00'} 
          change={''} 
          period={''} 
          icon={'dollar'} 
          isPositive={false}
        />
        <Card 
          title={'Saldo Total'} 
          value={'12.400,00'} 
          change={''} 
          period={''} 
          icon={'dollar'} 
          isPositive={false}
        />
      </div>
    </div>
  );
};

export default Dashboard;
