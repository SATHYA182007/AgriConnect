import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, Plus, Filter, TrendingUp, DollarSign, Globe, CloudRain, Droplets, Sprout } from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const demandData = [
  { name: 'Wheat (Durum)', value: 4500, color: '#1B5E20' },
  { name: 'Corn (Yellow)', value: 2400, color: '#6D4C41' },
  { name: 'Soya (Non-GMO)', value: 3100, color: '#00E676' },
  { name: 'Rice (Basmati)', value: 1800, color: '#2E7D32' }
];

const Demand = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h2 style={{ fontSize: '26px', marginBottom: '4px' }}>Regional Demand Heatmap</h2>
          <p style={{ color: '#64748b' }}>Aggregate demand analytics and seasonal procurement trends.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
           <div className="glass" style={{ padding: '10px 16px', borderRadius: '12px', fontSize: '13px', fontWeight: 600 }}>Active Regions: 4</div>
           <button className="btn-primary"><Plus size={18} /> Post Demand RFP</button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 400px', gap: '32px', marginBottom: '40px' }}>
         <div className="card" style={{ padding: '32px', background: 'white' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '32px' }}>Aggregate Commodity Demand (Tons)</h3>
            <div style={{ height: '350px' }}>
               <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                     <Pie
                        data={demandData}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                     >
                        {demandData.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                     </Pie>
                     <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                     <Legend verticalAlign="bottom" />
                  </PieChart>
               </ResponsiveContainer>
            </div>
         </div>

         <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="glass" style={{ padding: '32px', borderRadius: '24px', background: 'rgba(27, 94, 32, 0.05)' }}>
               <h3 style={{ fontSize: '18px', marginBottom: '24px' }}>Emerging Demands</h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { item: 'Nitrogen-Rich Fertilizers', diff: '+24%', color: '#00E676', icon: Sprout },
                    { item: 'Organic Soya Flour', diff: '+12%', color: '#1B5E20', icon: Sprout },
                    { item: 'Rust-Resistant Wheat', diff: '+35%', color: '#00E676', icon: Sprout }
                  ].map((d, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                       <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 600 }}>
                          <d.icon size={18} color={d.color} /> {d.item}
                       </div>
                       <div style={{ fontSize: '12px', color: d.diff.startsWith('+') ? '#00E676' : '#ff4444', fontWeight: 700 }}>{d.diff}</div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="card" style={{ padding: '32px', background: 'var(--grad-primary)', color: 'white' }}>
               <h3 style={{ fontSize: '18px', color: 'white', marginBottom: '24px' }}>Strategic Forecast</h3>
               <p style={{ fontSize: '13px', opacity: 0.8, margin: 0, lineHeight: 1.6 }}>Wheat prices are projected to rise in Q2 2026. Strategizing early procurement for Durum wheat varieties expected to yield higher margins.</p>
               <button className="btn-primary" style={{ background: 'white', color: 'var(--primary)', width: '100%', marginTop: '24px', padding: '12px' }}>Download Forecast</button>
            </div>
         </div>
      </div>
    </motion.div>
  );
};

export default Demand;
