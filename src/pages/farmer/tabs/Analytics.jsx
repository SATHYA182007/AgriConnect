import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, DollarSign, Sprout, Cloud, Database, ArrowUpRight, ArrowDownRight, Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';

const cropYieldData = [
  { name: 'Wheat', current: 4.2, target: 5.0, moisture: 68 },
  { name: 'Rice', current: 3.6, target: 4.2, moisture: 82 },
  { name: 'Corn', current: 8.1, target: 8.5, moisture: 62 },
  { name: 'Soya', current: 4.8, target: 5.2, moisture: 75 }
];

const profitProjection = [
  { month: 'Jul', profit: 45000, cost: 32000 },
  { month: 'Aug', profit: 52000, cost: 35000 },
  { month: 'Sep', profit: 48000, cost: 38000 },
  { month: 'Oct', profit: 61000, cost: 41000 },
  { month: 'Nov', profit: 75000, cost: 44000 }
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
          <h2 style={{ fontSize: '26px', marginBottom: '4px' }}>AI-Powered Analytics Hub</h2>
          <p style={{ color: '#64748b' }}>Neural crop yield projections based on high-res satellite telemetry.</p>
        </div>
        <div style={{ padding: '10px 20px', borderRadius: '12px', background: 'var(--grad-primary)', color: 'white', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 600 }}>
           <Activity size={18} /> Telemetry Online
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px', marginBottom: '40px' }}>
        <div className="card" style={{ padding: '32px' }}>
           <h3 style={{ fontSize: '18px', marginBottom: '32px' }}>Profit vs. Input Costs (Projection)</h3>
           <div style={{ height: '350px' }}>
              <ResponsiveContainer width="100%" height="100%">
                 <LineChart data={profitProjection}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: 'var(--shadow-lg)' }} />
                    <Line type="monotone" dataKey="profit" stroke="var(--primary)" strokeWidth={4} dot={{ r: 4, fill: 'var(--primary)' }} />
                    <Line type="monotone" dataKey="cost" stroke="#ff4444" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                 </LineChart>
              </ResponsiveContainer>
           </div>
        </div>

        <div className="glass" style={{ padding: '32px', borderRadius: '24px' }}>
           <h3 style={{ fontSize: '18px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Database size={20} color="var(--primary)" /> Smart Recommendations
           </h3>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { title: 'Nitrogen Optimization', desc: 'Soya field #4 needs +15% nitrogen input. Optimal sowing window next 48h.', type: 'Alert', color: '#ffcc00' },
                { title: 'Disease Risk (Low)', desc: 'Rust resistance (R260) holds strong. Current risk level at 4.2% globally.', type: 'Safe', color: '#00E676' },
                { title: 'Irrigation Window', desc: 'Humidity at 82%. Reduce irrigation in Rice Sector 02 by 20%.', type: 'Optimize', color: '#00B0FF' }
              ].map((rec, i) => (
                <div key={i}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <div style={{ fontSize: '15px', fontWeight: 700 }}>{rec.title}</div>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: rec.color }}>{rec.type}</span>
                   </div>
                   <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>{rec.desc}</p>
                </div>
              ))}
           </div>
           
           <button className="btn-primary" style={{ width: '100%', marginTop: '32px', padding: '14px' }}>Execute Autonomous Action</button>
        </div>
      </div>

      <div className="grid-cols-4">
         {cropYieldData.map((data, i) => (
           <div key={i} className="card" style={{ padding: '24px' }}>
              <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>{data.name} Yield</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '16px' }}>
                 <div style={{ fontSize: '32px', fontWeight: 700 }}>{data.current}</div>
                 <div style={{ fontSize: '14px', color: '#64748b' }}>Tons/Ha</div>
              </div>
              <div style={{ height: '4px', background: '#f1f5f9', borderRadius: '4px', position: 'relative', overflow: 'hidden' }}>
                 <div style={{ width: `${(data.current/data.target)*100}%`, height: '100%', background: 'var(--primary)', position: 'absolute' }}></div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', fontSize: '11px', color: '#94a3b8' }}>
                 <span>Target: {data.target}</span>
                 <span style={{ color: '#00E676', fontWeight: 600 }}>{Math.round((data.current / data.target) * 100) || 84}%</span>
              </div>
           </div>
         ))}
      </div>
    </motion.div>
  );
};

export default Analytics;
