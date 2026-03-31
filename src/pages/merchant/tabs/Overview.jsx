import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Truck, DollarSign, Activity, TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight, Package } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const procurementData = [
  { region: 'North', volume: 12400, color: '#1B5E20' },
  { region: 'East', volume: 8200, color: '#6D4C41' },
  { region: 'West', volume: 15600, color: '#00E676' },
  { region: 'South', volume: 9800, color: '#2E7D32' }
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
           { icon: ShoppingBag, label: 'Active Bids', val: '24', trend: '+4', color: '#1B5E20' },
           { icon: Truck, label: 'In Transit', val: '128 Tons', trend: '+12%', color: '#00E676' },
           { icon: DollarSign, label: 'Total Spend', val: '$420,500', trend: '-2.4%', color: '#6D4C41' },
           { icon: Package, label: 'Open Requests', val: '18', trend: 'High Demand', color: '#00B0FF' }
         ].map((stat, i) => (
           <div key={i} className="card" style={{ padding: '24px' }}>
              <div style={{ color: stat.color, background: `${stat.color}15`, width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                 <stat.icon size={20} />
              </div>
              <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '4px' }}>{stat.label}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                 <div style={{ fontSize: '24px', fontWeight: 700 }}>{stat.val}</div>
                 <div style={{ fontSize: '12px', fontWeight: 600, color: stat.trend.startsWith('+') ? '#00E676' : stat.trend.startsWith('-') ? '#ff4444' : '#00B0FF' }}>{stat.trend}</div>
              </div>
           </div>
         ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 400px', gap: '32px', marginBottom: '40px' }}>
         <div className="card" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '32px' }}>Procurement Volume by Region (Tons)</h3>
            <div style={{ height: '350px' }}>
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={procurementData}>
                     <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
                     <XAxis dataKey="region" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} dy={10} />
                     <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                     <Tooltip cursor={{fill: 'rgba(27, 94, 32, 0.05)'}} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                     <Bar dataKey="volume" radius={[6, 6, 0, 0]}>
                        {procurementData.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                     </Bar>
                  </BarChart>
               </ResponsiveContainer>
            </div>
         </div>

         <div className="glass" style={{ padding: '32px', borderRadius: '24px' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '24px' }}>Supply Chain Status</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
               {[
                 { title: 'Global Grain Corp', id: '#TRK-902', status: 'In Transit', progress: 75, eta: '2h' },
                 { title: 'AgriHarvest Ltd', id: '#TRK-441', status: 'Delayed', progress: 30, eta: '6h', color: '#ff4444' },
                 { title: 'Satyam Agri', id: '#TRK-112', status: 'Loading', progress: 10, eta: 'Tomorrow' }
               ].map((shipment, i) => (
                 <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                       <div>
                          <div style={{ fontWeight: 600, fontSize: '15px' }}>{shipment.title}</div>
                          <div style={{ fontSize: '12px', color: '#64748b' }}>{shipment.id} &bull; {shipment.status}</div>
                       </div>
                       <div style={{ fontSize: '12px', fontWeight: 600 }}>{shipment.eta}</div>
                    </div>
                    <div style={{ height: '4px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                       <div style={{ width: `${shipment.progress}%`, height: '100%', background: shipment.color || 'var(--primary)' }}></div>
                    </div>
                 </div>
               ))}
            </div>
            <button className="btn-primary" style={{ width: '100%', marginTop: '32px' }}>Track All Fleet</button>
         </div>
      </div>
    </motion.div>
  );
};

export default Overview;
