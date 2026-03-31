import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sprout, ShoppingBag, TrendingUp, Cloud, 
  Plus, Edit2, Trash2 
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const priceData = [
  { name: 'Jan', price: 5800 },
  { name: 'Feb', price: 6100 },
  { name: 'Mar', price: 6000 }, // $6.00 benchmark
  { name: 'Apr', price: 6300 },
  { name: 'May', price: 6500 },
  { name: 'Jun', price: 6800 }
];

const Overview = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(400px, 1fr) 2fr', gap: '24px', marginBottom: '32px' }}>
        {/* Earnings Card */}
        <div className="glass" style={{ padding: '32px', borderRadius: '24px', background: 'var(--grad-primary)', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ opacity: 0.8, fontSize: '14px', marginBottom: '8px' }}>Estimated Farm Valuation</div>
            <div style={{ fontSize: '42px', fontWeight: 700 }}>$48,920.00</div>
            <div style={{ color: '#00E676', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', fontSize: '14px', marginTop: '12px' }}>
              <TrendingUp size={16} /> +8.4% Market Growth
            </div>
          </div>
          <button style={{ width: 'fit-content', background: 'white', color: 'var(--primary)', padding: '12px 28px', borderRadius: '14px', border: 'none', fontWeight: 600, cursor: 'pointer' }}>Generate Financial Report</button>
        </div>

        {/* Quick Metrics */}
        <div className="grid-cols-2" style={{ gap: '24px' }}>
          {[
            { icon: Sprout, label: 'Active Crops', val: '14 Varieties', color: 'var(--primary)' },
            { icon: ShoppingBag, label: 'Pending Sales', val: '6 Orders', color: '#6D4C41' },
            { icon: TrendingUp, label: 'Price Index', val: 'Wheat +$0.12', color: '#00E676' },
            { icon: Cloud, label: 'Next Rain', val: '2 Days Left', color: '#00B0FF' }
          ].map((stat, i) => (
            <div key={i} className="card" style={{ padding: '24px' }}>
               <div style={{ color: stat.color, background: `${stat.color}15`, width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                 <stat.icon size={20} />
               </div>
               <div style={{ color: '#64748b', fontSize: '14px' }}>{stat.label}</div>
               <div style={{ fontSize: '24px', fontWeight: 700 }}>{stat.val}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '32px' }}>
        <div className="card" style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '32px' }}>Wheat Price Trend (Global 2026)</h3>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={priceData}>
                <defs>
                  <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1B5E20" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#1B5E20" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
                <Area type="monotone" dataKey="price" stroke="#1B5E20" strokeWidth={3} fill="url(#colorPrice)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass" style={{ padding: '32px', borderRadius: '24px' }}>
           <h3 style={{ fontSize: '20px', marginBottom: '24px' }}>AI Yield Prediction</h3>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
             {[
               { crop: 'Organic Wheat', yield: '4.2 Tons/Ha', trend: 'Optimal', color: '#00E676' },
               { crop: 'Yellow Corn', yield: '8.1 Tons/Ha', trend: 'Fair', color: '#ffcc00' },
               { crop: 'Basmati Rice', yield: '3.6 Tons/Ha', trend: 'High Risk', color: '#ff4444' }
             ].map((item, i) => (
               <div key={i} style={{ padding: '16px', background: 'white', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                 <div>
                   <div style={{ fontWeight: 600 }}>{item.crop}</div>
                   <div style={{ fontSize: '12px', color: '#64748b' }}>Expected: {item.yield}</div>
                 </div>
                 <span style={{ fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px', background: `${item.color}15`, color: item.itemColor || item.color }}>{item.trend}</span>
               </div>
             ))}
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Overview;
