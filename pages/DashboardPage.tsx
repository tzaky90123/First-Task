import React from 'react';

// Icons as React Components
const IconMRR = () => (
  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
);
const IconChurn = () => (
  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path></svg>
);
const IconCAC = () => (
  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1h4v1m-4 0h-4v-1h4m-4 0H6m6 12v-1h4v1m-4 0h-4v-1h4m-4 0H6m12 0h2a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2h2"></path></svg>
);
const IconNewCustomers = () => (
  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
);
const IconActiveUsers = () => (
  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
);
const IconLTV = () => (
  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
);

const ArrowUp = () => <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>;
const ArrowDown = () => <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>;

// MRR Chart Component
const MRRChartCard = () => {
  const mrrData = [
    { month: 'Jan', value: 12000, color: 'bg-purple-300' },
    { month: 'Feb', value: 15000, color: 'bg-purple-400' },
    { month: 'Mar', value: 18000, color: 'bg-purple-500' },
    { month: 'Apr', value: 22000, color: 'bg-purple-600' },
    { month: 'May', value: 25000, color: 'bg-purple-700' },
    { month: 'Jun', value: 30000, color: 'bg-purple-800' },
  ];
  const maxValue = Math.max(...mrrData.map(d => d.value));

  return (
    <div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2 lg:col-span-2">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">MRR Growth</h3>
        <IconMRR />
      </div>
      <div className="h-64 flex items-end justify-around space-x-2 pt-4 border-t">
        {mrrData.map(data => (
          <div key={data.month} className="flex flex-col items-center flex-grow">
            <div className="text-sm font-bold text-purple-800">${(data.value / 1000).toFixed(0)}k</div>
            <div
              className={`w-full ${data.color} rounded-t-md mt-1 transition-all duration-500`}
              style={{ height: `${(data.value / maxValue) * 100}%` }}
              title={`$${data.value.toLocaleString()}`}
            ></div>
            <div className="text-xs text-gray-500 mt-2">{data.month}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// KPI Card for Churn, CAC
interface MetricCardProps {
    title: string;
    value: string;
    icon: React.ReactNode;
    arrow?: 'up' | 'down';
}
const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon, arrow }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-2">
            <h3 className="text-md font-semibold text-gray-500">{title}</h3>
            {icon}
        </div>
        <div className="flex items-center space-x-2">
            <p className="text-3xl font-bold text-gray-800">{value}</p>
            {arrow === 'up' && <ArrowUp />}
            {arrow === 'down' && <ArrowDown />}
        </div>
    </div>
);

// Small KPI Card
interface KpiCardProps {
    title: string;
    value: string;
    icon: React.ReactNode;
}
const KpiCard: React.FC<KpiCardProps> = ({ title, value, icon }) => (
     <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-gray-500">{title}</h3>
            {icon}
        </div>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
);

// Main Dashboard Page Component
const DashboardPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans pt-16">
      <main className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Performance Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MRRChartCard />
          <MetricCard title="Churn Rate" value="2.1%" icon={<IconChurn />} arrow="down" />
          <MetricCard title="Customer Acquisition Cost" value="$350" icon={<IconCAC />} arrow="up" />
          <KpiCard title="New Customers" value="2,450" icon={<IconNewCustomers />} />
          <KpiCard title="Active Users" value="15.2k" icon={<IconActiveUsers />} />
          <KpiCard title="Lifetime Value (LTV)" value="$1,230" icon={<IconLTV />} />
          <div className="bg-deep-purple p-6 rounded-lg shadow-md text-white">
            <h3 className="text-sm font-semibold text-gray-300">Custom Metric</h3>
            <p className="text-2xl font-bold">42</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;