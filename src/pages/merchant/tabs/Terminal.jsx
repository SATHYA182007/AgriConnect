import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Search, Plus, Filter, TrendingUp, DollarSign, Briefcase, Globe, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const activeProcurement = [
  { id: '#BID-1002', item: 'Pioneer-Series Corn', vol: '1,200 Tons', price: '$180/ton', status: 'In Play', bids: 4, diff: '+8%', color: '#1B5E20' },
  { id: '#BID-1004', item: 'Organic Soya Flour', vol: '500 Tons', price: '$410/ton', status: 'Winning', bids: 2, diff: '-2%', color: '#00E676' },
  { id: '#BID-1008', item: 'Egyptian Cotton Seed', vol: '2,500 Tons', price: '$650/ton', status: 'Losing', bids: 12, diff: '+15%', color: '#ff4444' }
];

const Terminal = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h2 style={{ fontSize: '26px', marginBottom: '4px' }}>Procurement Command Terminal</h2>
          <p style={{ color: '#64748b' }}>Technical bidding gateway and order fulfillment hub.</p>
        </div>
        <button className="btn-primary" style={{ padding: '12px 28px' }}><Plus size={18} /> New RFP (Request for Proposal)</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 300px', gap: '32px' }}>
         <div>
            <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
               <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                     <tr style={{ background: '#f8fafc', color: '#64748b', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                        <th style={{ padding: '20px 24px' }}>RFP ID</th>
                        <th style={{ padding: '20px 24px' }}>Commodity</th>
                        <th style={{ padding: '20px 24px' }}>Volume</th>
                        <th style={{ padding: '20px 24px' }}>Current Bid</th>
                        <th style={{ padding: '20px 24px' }}>Status</th>
                        <th style={{ padding: '20px 24px' }}>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {activeProcurement.map((bid, i) => (
                        <tr key={i} style={{ borderTop: '1px solid #f1f5f9', fontSize: '14px' }}>
                           <td style={{ padding: '20px 24px', fontWeight: 600 }}>{bid.id}</td>
                           <td style={{ padding: '20px 24px' }}>{bid.item}</td>
                           <td style={{ padding: '20px 24px' }}>{bid.vol}</td>
                           <td style={{ padding: '20px 24px' }}>{bid.price} <span style={{ fontSize: '11px', color: bid.color, fontWeight: 700 }}>({bid.diff})</span></td>
                           <td style={{ padding: '20px 24px' }}>
                              <span style={{ fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px', background: `${bid.color}15`, color: bid.color }}>{bid.status}</span>
                           </td>
                           <td style={{ padding: '20px 24px' }}>
                              <button className="btn-ghost" style={{ fontSize: '13px' }}>View Detail</button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>

         <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="glass" style={{ padding: '24px', borderRadius: '20px', background: 'rgba(27, 94, 32, 0.05)' }}>
               <h4 style={{ fontSize: '16px', marginBottom: '16px' }}>Terminal Stats</h4>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { label: 'Active Sessions', val: '4', icon: Clock, color: '#1B5E20' },
                    { label: 'Network Latency', val: '24ms', icon: TrendingUp, color: '#00E676' },
                    { label: 'Security Level', val: 'E2EE', icon: CheckCircle, color: '#00E676' }
                  ].map((s, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                       <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748b' }}>
                          <s.icon size={16} /> {s.label}
                       </div>
                       <div style={{ fontWeight: 700, fontSize: '13px' }}>{s.val}</div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="card" style={{ padding: '24px', background: '#1e293b', color: 'white' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <AlertCircle size={20} color="#ffcc00" />
                  <h4 style={{ fontSize: '15px', color: 'white', margin: 0 }}>Market Anomaly</h4>
               </div>
               <p style={{ fontSize: '12px', opacity: 0.7, margin: 0, lineHeight: 1.6 }}>Egyptian Cotton prices spiked +15% due to supply chain disruption in Suez Canal. Bidding paused for 2 hours.</p>
            </div>
         </div>
      </div>
    </motion.div>
  );
};

export default Terminal;
