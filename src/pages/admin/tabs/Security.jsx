import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Bell, Search, Filter, Plus, MoreVertical, Edit2, ShieldAlert, CheckCircle, XCircle, Trash2, Mail, Globe, Database, Key, Activity } from 'lucide-react';

const securityLogs = [
  { id: '#SEC-9032', user: 'Platform Root', action: 'System Global Configuration Change', status: 'Success', date: 'Mar 30, 2026, 12:42:01 PM', ip: '124.9.4.1', severity: 'Info' },
  { id: '#SEC-4401', user: 'Farmer Joe', action: 'Account Verification Request', status: 'Approved', date: 'Mar 30, 2026, 11:15:32 AM', ip: '192.168.1.1', severity: 'Success' },
  { id: '#SEC-1122', user: 'Global Grain Corp', action: 'Large Transaction Verification', status: 'Flagged', date: 'Mar 30, 2026, 10:35:12 AM', ip: '10.2.1.4', severity: 'Warning' },
  { id: '#SEC-8822', user: 'AgriHarvest Ltd', action: 'New Merchant registration Request', status: 'Pending', date: 'Mar 30, 2026, 10:28:44 AM', ip: '172.16.0.1', severity: 'Info' },
  { id: '#SEC-2210', user: 'Valley Exporters', action: 'Account Login', status: 'Success', date: 'Mar 30, 2026, 09:12:05 AM', ip: '8.8.8.8', severity: 'Info' }
];

const SecurityTab = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h2 style={{ fontSize: '26px', marginBottom: '4px' }}>Security & Audit Engine</h2>
          <p style={{ color: '#64748b' }}>Technical health monitoring and audit oversight of system events.</p>
        </div>
        <button className="btn-primary"><Lock size={18} /> Rotate API Keys</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 280px', gap: '32px' }}>
         <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
               <thead>
                  <tr style={{ background: '#f8fafc', color: '#64748b', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                     <th style={{ padding: '16px 24px' }}>SEC ID</th>
                     <th style={{ padding: '16px 24px' }}>User & Action</th>
                     <th style={{ padding: '16px 24px' }}>Status & IP</th>
                     <th style={{ padding: '16px 24px' }}>Severity</th>
                     <th style={{ padding: '16px 24px' }}>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {securityLogs.map((log, i) => (
                     <tr key={i} style={{ borderBottom: '1px solid #f1f5f9', fontSize: '14px' }}>
                        <td style={{ padding: '20px 24px', fontWeight: 600 }}>{log.id}</td>
                        <td style={{ padding: '20px 24px' }}>
                           <div style={{ fontWeight: 600 }}>{log.action}</div>
                           <div style={{ fontSize: '12px', color: '#94a3b8' }}>User: {log.user} &bull; {log.date}</div>
                        </td>
                        <td style={{ padding: '20px 24px' }}>
                           <div style={{ fontWeight: 600 }}>{log.status}</div>
                           <div style={{ fontSize: '12px', color: '#94a3b8' }}>IP: {log.ip}</div>
                        </td>
                        <td style={{ padding: '20px 24px' }}>
                           <div style={{ fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px', background: log.severity === 'Success' ? '#00e67615' : log.severity === 'Warning' ? '#ffcc0015' : '#1e293b15', color: log.severity === 'Success' ? '#00e676' : log.severity === 'Warning' ? '#f59e0b' : '#64748b', width: 'fit-content' }}>{log.severity}</div>
                        </td>
                        <td style={{ padding: '20px 24px' }}>
                           <button className="btn-ghost" style={{ padding: '8px', borderRadius: '8px', border: 'none' }}><Database size={16} color="#64748b" /></button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>

         <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="glass" style={{ padding: '24px', borderRadius: '20px', background: 'rgba(27, 94, 32, 0.05)' }}>
               <h4 style={{ fontSize: '16px', marginBottom: '16px' }}>Terminal Security Stats</h4>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { label: 'Active Sessions', val: '12', icon: Activity, color: '#1B5E20' },
                    { label: 'Network Latency', val: '24ms', icon: Globe, color: '#00E676' },
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
                  <ShieldAlert size={20} color="#ffcc00" />
                  <h4 style={{ fontSize: '15px', color: 'white', margin: 0 }}>Anomaly Detected</h4>
               </div>
               <p style={{ fontSize: '12px', opacity: 0.7, margin: 0, lineHeight: 1.6 }}>Unauthorized API access attempt from IP 124.9.4.1 blocked. Security level bumped to Ultra. All audit logs archived.</p>
            </div>
         </div>
      </div>
    </motion.div>
  );
};

export default SecurityTab;
