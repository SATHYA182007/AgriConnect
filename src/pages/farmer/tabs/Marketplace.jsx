import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Search, Plus, Filter, TrendingUp, DollarSign, Briefcase, Globe } from 'lucide-react';

const marketplaceListings = [
  { id: 1, title: 'Organic Durum Wheat', volume: '1,200kg', price: '$220/ton', status: 'Live', bids: 4, img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2670&auto=format&fit=crop' },
  { id: 2, title: 'Golden Corn Variety', volume: '500kg', price: '$180/ton', status: 'Verification', bids: 0, img: 'https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?q=80&w=2670&auto=format&fit=crop' },
  { id: 3, title: 'Basmati Rice (Grade A)', volume: '3,000kg', price: '$450/ton', status: 'Sold Out', bids: 12, img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2670&auto=format&fit=crop' }
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
          <h2 style={{ fontSize: '26px', marginBottom: '4px' }}>Marketplace Manager</h2>
          <p style={{ color: '#64748b' }}>Current benchmark price for Wheat is <span style={{ fontWeight: 700, color: 'var(--primary)' }}>$220/ton</span> ($6.00/bu).</p>
        </div>
        <button className="btn-primary" style={{ padding: '12px 28px' }}><Plus size={18} /> New Listing</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 350px', gap: '32px' }}>
        <div>
           <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
              <div className="glass" style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '12px 20px', borderRadius: '12px', gap: '12px' }}>
                 <Search size={18} color="#64748b" />
                 <input type="text" placeholder="Search Listings..." style={{ background: 'none', border: 'none', width: '100%', outline: 'none', fontSize: '15px' }} />
              </div>
              <button className="glass" style={{ padding: '12px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', border: 'none' }}><Filter size={18} /> Filters</button>
           </div>

           <div className="grid-cols-2" style={{ gap: '24px' }}>
              {marketplaceListings.map((item) => (
                <div key={item.id} className="card card-hover" style={{ overflow: 'hidden' }}>
                  <img src={item.img} style={{ width: '100%', height: '140px', objectFit: 'cover' }} />
                  <div style={{ padding: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                       <h4 style={{ fontSize: '18px', margin: 0 }}>{item.title}</h4>
                       <span style={{ fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px', background: `${item.status === 'Live' ? '#00E676' : item.status === 'Verification' ? '#ffcc00' : '#64748b'}20`, color: item.status === 'Live' ? '#00E676' : item.status === 'Verification' ? '#f59e0b' : '#64748b' }}>{item.status}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '24px', fontSize: '13px', color: '#64748b', marginBottom: '20px' }}>
                       <div>Vol: <span style={{ fontWeight: 600, color: '#1e293b' }}>{item.volume}</span></div>
                       <div>Price: <span style={{ fontWeight: 600, color: '#1e293b' }}>{item.price}</span></div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                       <div style={{ fontSize: '12px', color: '#64748b' }}>{item.bids} Potential Buyers</div>
                       <button className="btn-ghost" style={{ fontSize: '13px' }}>Manage</button>
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </div>

        <div className="card" style={{ padding: '32px', height: 'fit-content' }}>
           <h3 style={{ fontSize: '18px', marginBottom: '24px' }}>Global Market Overview</h3>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { label: 'Wheat (Durum)', val: '$224', diff: '+2.4%', color: '#00E676' },
                { label: 'Soya (Non-GMO)', val: '$410', diff: '-1.1%', color: '#ff4444' },
                { label: 'Corn (Yellow)', val: '$182', diff: '+0.5%', color: '#00E676' }
              ].map((m, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>{m.label}</div>
                      <div style={{ fontSize: '16px', fontWeight: 700 }}>{m.val}/ton</div>
                   </div>
                   <div style={{ fontSize: '12px', fontWeight: 600, color: m.color }}>{m.diff}</div>
                </div>
              ))}
           </div>
           
           <div className="glass" style={{ marginTop: '32px', padding: '20px', borderRadius: '16px', background: 'rgba(27, 94, 32, 0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                 <Globe size={18} color="var(--primary)" />
                 <h4 style={{ fontSize: '14px', margin: 0 }}>Export Potential</h4>
              </div>
              <p style={{ fontSize: '12px', color: '#64748b' }}>High demand from GCC and South Asia. Optimal window for Durum Wheat exports.</p>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Marketplace;
