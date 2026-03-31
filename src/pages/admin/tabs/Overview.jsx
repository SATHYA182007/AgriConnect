import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Activity, Settings, Database, Briefcase, TrendingUp, AlertCircle, Eye } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const userStats = [
  { name: 'Farmers', value: 12400, color: '#1B5E20' },
  { name: 'Merchants', value: 850, color: '#6D4C41' },
  { name: 'Admins', value: 12, color: '#00E676' }
];

const healthData = [
  { time: '00:00', load: 12 },
  { time: '04:00', load: 8 },
  { time: '08:00', load: 45 },
  { time: '12:00', load: 82 },
  { time: '16:00', load: 68 },
  { time: '20:00', load: 52 },
  { time: '23:59', load: 24 }
];

const Overview = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '40px' }}>
         {[
           { icon: Users, label: 'Total Users', val: '13.2k', trend: '+124 Today', color: '#1B5E20' },
           { icon: Database, label: 'Transactions', val: '$2.4M', trend: 'Monthly Goal: 84%', color: '#00E676' },
           { icon: Activity, label: 'System Load', val: '42%', trend: 'Status: Healthy', color: '#00B0FF' },
           { icon: Shield, label: 'Threats', val: '0', trend: 'Last Scan: 2m ago', color: '#ff4444' }
         ].map((stat, i) => (
           <div key={i} className="card" style={{ padding: '24px' }}>
              <div style={{ color: stat.color, background: `${stat.color}15`, width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                 <stat.icon size={20} />
              </div>
              <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '4px' }}>{stat.label}</div>
              <div style={{ fontSize: '24px', fontWeight: 700 }}>{stat.val}</div>
              <div style={{ fontSize: '11px', fontWeight: 600, color: stat.color, marginTop: '8px' }}>{stat.trend}</div>
           </div>
         ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px', marginBottom: '40px' }}>
         <div className="card" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '32px' }}>Server Load Analytics (24h)</h3>
            <div style={{ height: '350px' }}>
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={healthData}>
                     <defs>
                        <linearGradient id="colorLoad" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#00E676" stopOpacity={0.2}/>
                           <stop offset="95%" stopColor="#00E676" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
                     <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                     <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                     <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                     <Area type="monotone" dataKey="load" stroke="#00E676" strokeWidth={3} fill="url(#colorLoad)" />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
         </div>

         <div className="card" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '32px' }}>User Distribution</h3>
            <div style={{ height: '300px' }}>
               <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                     <Pie
                        data={userStats}
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                     >
                        {userStats.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                     </Pie>
                     <Tooltip />
                  </PieChart>
               </ResponsiveContainer>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '24px' }}>
               {userStats.map((u, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: u.color }}></div>
                        {u.name}
                     </div>
                     <div style={{ fontWeight: 700 }}>{u.value}</div>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </motion.div>
  );
};

export default Overview;
