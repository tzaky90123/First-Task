import React from 'react';

// --- Icons ---
const IconParcels = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
    </svg>
);

const IconEmployees = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.663M12 3.375c-1.621 0-3.09.621-4.22 1.625a6.375 6.375 0 00-4.22 9.499M12 3.375c1.621 0 3.09.621 4.22 1.625a6.375 6.375 0 004.22 9.499" />
    </svg>
);

const IconRoads = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.5-11.25l-3.93-3.93a.75.75 0 00-1.06 0L9.25 5.5m6.5 6.5l3.93 3.93a.75.75 0 001.06 0l2.22-2.22a.75.75 0 000-1.06l-3.93-3.93z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 8.25l3.93-3.93a.75.75 0 011.06 0l2.22 2.22a.75.75 0 010 1.06l-3.93 3.93zM3.75 15.75l3.93-3.93a.75.75 0 011.06 0l2.22 2.22a.75.75 0 010 1.06l-3.93 3.93z" />
    </svg>
);

const IconSubsidiaries = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18M18.75 3v18M9 6.75h6.375M9 12.75h6.375M9 18.75h6.375" />
    </svg>
);

// --- Stat Card Component ---
interface StatCardProps {
    icon: React.ReactNode;
    title: string;
    value: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value }) => (
    <div className="bg-white rounded-xl shadow-soft p-5 flex items-center space-x-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
            {icon}
        </div>
        <div>
            <p className="text-sm text-brand-text-gray">{title}</p>
            <p className="text-2xl font-bold text-brand-navy">{value}</p>
        </div>
    </div>
);

// --- Bar Chart Component ---
const RevenueChart: React.FC = () => {
    const chartData = [
        { label: 'Q1', value: 45, color: 'from-blue-400 to-blue-600' },
        { label: 'Q2', value: 62, color: 'from-blue-500 to-blue-700' },
        { label: 'Q3', value: 75, color: 'from-brand-primary to-blue-800' },
        { label: 'Q4', value: 90, color: 'from-brand-navy to-blue-900' },
    ];
    const maxValue = 100;

    return (
        <div className="bg-white p-6 rounded-xl shadow-soft h-full">
            <h3 className="text-xl font-semibold text-brand-dark mb-1">Chiffre d'Affaires Trimestriel</h3>
            <p className="text-sm text-brand-text-gray mb-6">(en millions de FCFA)</p>
            <div className="h-80 flex items-end justify-around space-x-4 pt-4">
                {chartData.map(data => (
                    <div key={data.label} className="group relative flex flex-col items-center flex-grow h-full justify-end">
                        <div className="absolute top-0 -mt-6 w-max px-2 py-1 text-xs text-white bg-brand-dark rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            {data.value} M FCFA
                        </div>
                        <p className="text-sm font-bold text-brand-navy mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{data.value}</p>
                        <div
                            className={`w-full bg-gradient-to-t ${data.color} rounded-t-lg transition-all duration-500 ease-out transform-gpu group-hover:opacity-100 opacity-80`}
                            style={{ height: `${(data.value / maxValue) * 100}%` }}
                        ></div>
                        <div className="text-xs font-semibold text-brand-text-gray mt-2 w-full text-center border-t pt-2">{data.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};


// --- Main Dashboard Page Component ---
const DashboardPage: React.FC = () => {
    const stats = [
        { icon: <IconParcels />, title: "Parcelles Viabilisées", value: "+ 2,000" },
        { icon: <IconEmployees />, title: "Collaborateurs", value: "+ 150" },
        { icon: <IconRoads />, title: "Voiries Réalisées", value: "+ 200 km" },
        { icon: <IconSubsidiaries />, title: "Filiales Stratégiques", value: "02" },
    ];

    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-12 font-sans">
            <main className="container mx-auto px-6">
                <h1 className="text-3xl font-bold text-brand-navy mb-2">Tableau de Bord</h1>
                <p className="text-brand-text-gray mb-8">Aperçu des performances clés de l'entreprise.</p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Left Column */}
                    <div className="lg:col-span-1 space-y-6">
                        {stats.map(stat => (
                            <StatCard key={stat.title} icon={stat.icon} title={stat.title} value={stat.value} />
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-2">
                        <RevenueChart />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DashboardPage;
