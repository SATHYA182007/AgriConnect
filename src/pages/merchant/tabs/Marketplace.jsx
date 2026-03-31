import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Search, Plus, Filter, TrendingUp, DollarSign, Briefcase, Globe, CheckCircle, Clock, AlertCircle, MapPin } from 'lucide-react';

const globalSupply = [
  { id: '#SUP-101', name: 'Brazilian Soybean', qty: '12,000 Tons', price: '$410/ton', origin: 'Brazil (Mato Grosso)', status: 'High Volume', img: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2670&auto=format&fit=crop' },
  { id: '#SUP-102', name: 'Premium Durum Wheat', qty: '400 Tons', price: '$225/ton', origin: 'Canada (Saskatoon)', status: 'Low Stock', img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2670&auto=format&fit=crop' },
  { id: '#SUP-103', name: 'Yellow Corn (G5)', qty: '2,500 Tons', price: '$180/ton', origin: 'USA (Iowa)', status: 'Bulk Only', img: 'https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?q=80&w=2670&auto=format&fit=crop' }
];

const Marketplace = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h2 style={{ fontSize: '26px', marginBottom: '4px' }}>Global Sourcing Portal</h2>
          <p style={{ color: '#64748b' }}>Connect with international suppliers and monitor bulk commodity markets.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
           <button className="glass" style={{ padding: '12px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Globe size={18} color="var(--primary)" />
              <span style={{ fontWeight: 600 }}>Global View</span>
           </button>
           <button className="btn-primary">Connect New Data Stream</button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 300px', gap: '32px' }}>
         <div className="grid-cols-2" style={{ gap: '24px' }}>
            {globalSupply.map((item, i) => (
               <div key={i} className="card card-hover" style={{ overflow: 'hidden' }}>
                  <div style={{ height: '160px', position: 'relative' }}>
                     <img src={item.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                     <div style={{ position: 'absolute', top: '16px', right: '16px', padding: '4px 12px', borderRadius: '40px', background: 'rgba(255,255,255,0.9)', fontSize: '11px', fontWeight: 700, color: '#1B5E20' }}>{item.status}</div>
                  </div>
                  <div style={{ padding: '24px' }}>
                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                        <div>
                           <h4 style={{ fontSize: '18px', margin: '0 0 4px 0' }}>{item.name}</h4>
                           <div style={{ fontSize: '12px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={12} /> {item.origin}</div>
                        </div>
                        <Globe size={20} color="var(--primary)" />
                     </div>
                     <div style={{ display: 'flex', gap: '24px', fontSize: '13px', color: '#64748b', marginBottom: '24px' }}>
                        <div>Available: <span style={{ fontWeight: 600, color: '#1e293b' }}>{item.qty}</span></div>
                        <div>Price: <span style={{ fontWeight: 600, color: '#1e293b' }}>{item.price}</span></div>
                     </div>
                     <button className="btn-primary" style={{ width: '100%' }}>Initiate RFP</button>
                  </div>
               </div>
            ))}
         </div>

         <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="card" style={{ padding: '24px' }}>
               <h3 style={{ fontSize: '16px', marginBottom: '24px' }}>Commodity Benchmark</h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { label: 'Wheat (CBOT)', val: '$6.02/bu', diff: '+2.4%' },
                    { label: 'Soybeans (CBOT)', val: '$11.84/bu', diff: '-1.1%' },
                    { label: 'Corn (CBOT)', val: '$4.12/bu', diff: '+0.5%' }
                  ].map((m, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                       <div>
                          <div style={{ fontSize: '11px', color: '#64748b' }}>{m.label}</div>
                          <div style={{ fontSize: '15px', fontWeight: 700 }}>{m.val}</div>
                       </div>
                       <div style={{ fontSize: '12px', fontWeight: 600, color: m.diff.startsWith('+') ? '#00e676' : '#ff4444' }}>{m.diff}</div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="glass" style={{ padding: '24px', borderRadius: '24px', background: 'rgba(27, 94, 32, 0.05)' }}>
               <h4 style={{ fontSize: '15px', marginBottom: '12px' }}>Supply Notice</h4>
               <p style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>Brazil harvest delayed by 2 weeks. Soybean prices expected to spike +4% next Tuesday. Strategize procurement early.</p>
            </div>
         </div>
      </div>
    </motion.div>
  );
};

export default Marketplace;
