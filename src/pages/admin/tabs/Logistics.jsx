import React from 'react';
import { motion } from 'framer-motion';
import { Truck, MapPin, Search, Filter, Plus, MoreVertical, Edit2, ShieldAlert, CheckCircle, XCircle, Trash2, Mail, Globe, Navigation, Activity } from 'lucide-react';

const logisticsList = [
  { id: '#TRK-9032', route: 'Region North -> West', volume: '124.8 Tons', status: 'In Transit', progress: 75, eta: '2h 14m', carrier: 'Global Grain Corp' },
  { id: '#TRK-4401', route: 'Region East -> South', volume: '22 Tons', status: 'Delayed', progress: 30, eta: '6h 45m', carrier: 'AgriHarvest Ltd' },
  { id: '#TRK-1122', route: 'Region West -> North', volume: '512 Tons', status: 'Loading', progress: 10, eta: 'Tomorrow', carrier: 'Satyam Prajapati' },
  { id: '#TRK-8822', route: 'Region South -> East', volume: '88 Tons', status: 'In Transit', progress: 95, eta: '12m', carrier: 'Kisan Kendra Coop' },
  { id: '#TRK-2210', route: 'Region North -> East', volume: '12 Tons', status: 'Verified', progress: 100, eta: 'Delivered', carrier: 'Valley Exporters' }
];

const LogisticsTab = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h2 style={{ fontSize: '26px', marginBottom: '4px' }}>System Logistics & Fleet Management</h2>
          <p style={{ color: '#64748b' }}>Ecosystem-wide asset monitoring and route analytics.</p>
        </div>
        <button className="btn-primary"><Plus size={18} /> New Transport Asset</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 300px', gap: '32px' }}>
         <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
               <thead>
                  <tr style={{ background: '#f8fafc', color: '#64748b', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                     <th style={{ padding: '16px 24px' }}>TRK ID</th>
                     <th style={{ padding: '16px 24px' }}>Route & Volume</th>
                     <th style={{ padding: '16px 24px' }}>Status & ETA</th>
                     <th style={{ padding: '16px 24px' }}>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {logisticsList.map((log, i) => (
                     <tr key={i} style={{ borderBottom: '1px solid #f1f5f9', fontSize: '14px' }}>
                        <td style={{ padding: '20px 24px', fontWeight: 600 }}>{log.id}</td>
                        <td style={{ padding: '20px 24px' }}>
                           <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <div style={{ fontWeight: 600 }}>{log.route}</div>
                           </div>
                           <div style={{ fontSize: '12px', color: '#94a3b8' }}>Volume: {log.volume} &bull; Carrier: {log.carrier}</div>
                        </td>
                        <td style={{ padding: '20px 24px' }}>
                           <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                              <div style={{ fontWeight: 600, color: log.status === 'Delayed' ? '#ef4444' : '#1e293b' }}>{log.status}</div>
                              <div style={{ fontSize: '12px', color: '#94a3b8' }}>{log.eta}</div>
                           </div>
                           <div style={{ height: '4px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                              <div style={{ width: `${log.progress}%`, height: '100%', background: log.status === 'Delayed' ? '#ef4444' : 'var(--primary)' }}></div>
                           </div>
                        </td>
                        <td style={{ padding: '20px 24px' }}>
                           <button className="btn-ghost" style={{ padding: '8px', borderRadius: '8px', border: 'none' }}><Navigation size={16} color="#64748b" /></button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>

         <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="glass" style={{ padding: '24px', borderRadius: '20px', background: 'rgba(27, 94, 32, 0.05)' }}>
               <h4 style={{ fontSize: '16px', marginBottom: '16px' }}>Logistics Status</h4>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { label: 'Active Fleet', val: '43 Units', icon: Activity, color: '#1B5E20' },
                    { label: 'Average Speed', val: '64km/h', icon: Globe, color: '#00E676' },
                    { label: 'Network Latency', val: '24ms', icon: CheckCircle, color: '#00E676' }
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
                  <ShieldAlert size={20} color="#ffcc00" />
                  <h4 style={{ fontSize: '15px', color: 'white', margin: 0 }}>Active Alert</h4>
               </div>
               <p style={{ fontSize: '12px', opacity: 0.7, margin: 0, lineHeight: 1.6 }}>Transport #TRK-4401 delayed in Region North due to heavy rainfall. Estimated delay: +4h 15m. Risk assessment: Moderate.</p>
            </div>
         </div>
      </div>
    </motion.div>
  );
};

export default LogisticsTab;
