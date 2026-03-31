import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, DollarSign, Sprout, Cloud, Database, ArrowUpRight, ArrowDownRight, Activity, Globe, Zap, Box } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar, Cell } from 'recharts';

const supplyChainData = [
  { month: 'Jan', supply: 12400, demand: 18500 },
  { month: 'Feb', supply: 18500, demand: 21200 },
  { month: 'Mar', supply: 24700, demand: 24700 }, // Parity
  { month: 'Apr', supply: 21200, demand: 28400 },
  { month: 'May', supply: 31000, demand: 34200 },
  { month: 'Jun', supply: 38400, demand: 31000 } // Surplus
];

const Analytics = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h2 style={{ fontSize: '26px', marginBottom: '4px' }}>Supply Chain AI Optimizer</h2>
          <p style={{ color: '#64748b' }}>Neural forecasting and supply chain efficiency analytics.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
           <div className="glass" style={{ padding: '10px 20px', borderRadius: '12px', background: 'var(--grad-primary)', color: 'white', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 600 }}>
              <Zap size={18} /> Neural Compute: 94%
           </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px', marginBottom: '40px' }}>
         <div className="card" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '32px' }}>Supply vs. Demand Forecast (2026)</h3>
            <div style={{ height: '350px' }}>
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={supplyChainData}>
                     <defs>
                        <linearGradient id="colorSupply" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#1B5E20" stopOpacity={0.2}/>
                           <stop offset="95%" stopColor="#1B5E20" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorDemand" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#6D4C41" stopOpacity={0.2}/>
                           <stop offset="95%" stopColor="#6D4C41" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
                     <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                     <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                     <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                     <Area type="monotone" dataKey="supply" stroke="#1B5E20" strokeWidth={3} fill="url(#colorSupply)" />
                     <Area type="monotone" dataKey="demand" stroke="#6D4C41" strokeWidth={3} fill="url(#colorDemand)" />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
         </div>

         <div className="glass" style={{ padding: '32px', borderRadius: '24px' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '24px' }}>Strategic AI Insights</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
               {[
                 { title: 'Surplus Opportunity', desc: 'Surplus expected in June (Central Region). Negotiate bulk contracts early for max margin.', color: '#00E676', icon: TrendingUp },
                 { title: 'Logistics Risk (High)', desc: 'Heavy monsoon in North likely to disrupt rail freight. Shift to road transport for Soybean shipments.', color: '#ff4444', icon: Activity },
                 { title: 'Export Window', desc: 'High demand for Durum Wheat in Middle East. Q2 export window looks optimal.', color: '#00B0FF', icon: Globe }
               ].map((rec, i) => (
                 <div key={i}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                       <rec.icon size={18} color={rec.color} />
                       <div style={{ fontSize: '15px', fontWeight: 700 }}>{rec.title}</div>
                    </div>
                    <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>{rec.desc}</p>
                 </div>
               ))}
            </div>
            <button className="btn-primary" style={{ width: '100%', marginTop: '32px' }}>Download AI Strategy Report</button>
         </div>
      </div>

      <div className="grid-cols-4">
         {[
           { label: 'Procurement Efficiency', val: '88%', diff: '+4.2%' },
           { label: 'Network Latency', val: '24ms', diff: 'Optimal' },
           { label: 'Forecast Accuracy', val: '92%', diff: '+8.1%' },
           { label: 'Market Position', val: 'High', diff: 'N/A' }
         ].map((stat, i) => (
           <div key={i} className="card" style={{ padding: '24px' }}>
              <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px', textTransform: 'uppercase' }}>{stat.label}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                 <div style={{ fontSize: '28px', fontWeight: 700 }}>{stat.val}</div>
                 <div style={{ fontSize: '12px', fontWeight: 600, color: '#00E676' }}>{stat.diff}</div>
              </div>
           </div>
         ))}
      </div>
    </motion.div>
  );
};

export default Analytics;
