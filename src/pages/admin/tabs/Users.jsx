import React from 'react';
import { motion } from 'framer-motion';
import { Users, Search, Filter, Plus, MoreVertical, Edit2, ShieldAlert, CheckCircle, XCircle, Trash2, Mail } from 'lucide-react';

const userList = [
  { id: '#FR-1122', name: 'Satyam Prajapati', role: 'Farmer', email: 'satyam@agriconnect.ai', status: 'Verified', date: 'Mar 12, 2026', avatar: 'SP' },
  { id: '#MP-9032', name: 'AgriHarvest Ltd', role: 'Merchant', email: 'procurement@agriharvest.com', status: 'Pending', date: 'Mar 28, 2026', avatar: 'AH' },
  { id: '#AD-4401', name: 'Global Grain Corp', role: 'Merchant', email: 'admin@globalgrain.io', status: 'Flagged', date: 'Feb 05, 2026', avatar: 'GG' },
  { id: '#FR-8822', name: 'Kisan Kendra Coop', role: 'Farmer', email: 'contact@kisankendra.org', status: 'Verified', date: 'Jan 30, 2026', avatar: 'KK' },
  { id: '#MP-2210', name: 'Valley Exporters', role: 'Merchant', email: 'ops@valley.biz', status: 'Verified', date: 'Dec 15, 2025', avatar: 'VE' }
];

const UsersTab = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h2 style={{ fontSize: '26px', marginBottom: '4px' }}>System User Directory</h2>
          <p style={{ color: '#64748b' }}>Manage roles, permissions and account verification status.</p>
        </div>
        <button className="btn-primary"><Plus size={18} /> Invite User</button>
      </div>

      <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
         <div style={{ padding: '24px', background: '#f8fafc', borderBottom: '1px solid #f1f5f9', display: 'flex', gap: '16px' }}>
            <div className="glass" style={{ flex: 1, background: 'white', display: 'flex', alignItems: 'center', padding: '10px 16px', borderRadius: '10px', gap: '12px' }}>
               <Search size={18} color="#94a3b8" />
               <input type="text" placeholder="Search by name, ID or email..." style={{ background: 'none', border: 'none', width: '100%', outline: 'none' }} />
            </div>
            <button className="glass" style={{ background: 'white', padding: '10px 20px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '8px', border: 'none' }}><Filter size={18} /> Filters</button>
         </div>

         <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
               <tr style={{ background: '#fcfcfc', color: '#64748b', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                  <th style={{ padding: '16px 24px' }}>User / ID</th>
                  <th style={{ padding: '16px 24px' }}>Role</th>
                  <th style={{ padding: '16px 24px' }}>Date Joined</th>
                  <th style={{ padding: '16px 24px' }}>Status</th>
                  <th style={{ padding: '16px 24px', textAlign: 'right' }}>Actions</th>
               </tr>
            </thead>
            <tbody>
               {userList.map((user, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #f1f5f9', fontSize: '14px' }}>
                     <td style={{ padding: '20px 24px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                           <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: user.role === 'Farmer' ? 'var(--primary)' : '#6D4C41', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: '13px' }}>{user.avatar}</div>
                           <div>
                              <div style={{ fontWeight: 600 }}>{user.name}</div>
                              <div style={{ fontSize: '12px', color: '#94a3b8' }}>{user.id}</div>
                           </div>
                        </div>
                     </td>
                     <td style={{ padding: '20px 24px' }}>
                        <span style={{ fontSize: '12px', fontWeight: 600, color: user.role === 'Farmer' ? 'var(--primary)' : '#6D4C41' }}>{user.role}</span>
                     </td>
                     <td style={{ padding: '20px 24px', color: '#94a3b8' }}>{user.date}</td>
                     <td style={{ padding: '20px 24px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px', background: user.status === 'Verified' ? '#00E67615' : user.status === 'Pending' ? '#f59e0b15' : '#ef444415', color: user.status === 'Verified' ? '#00E676' : user.status === 'Pending' ? '#f59e0b' : '#ef4444', width: 'fit-content' }}>
                           {user.status === 'Verified' ? <CheckCircle size={10} /> : user.status === 'Pending' ? <ShieldAlert size={10} /> : <XCircle size={10} />}
                           {user.status}
                        </div>
                     </td>
                     <td style={{ padding: '20px 24px', textAlign: 'right' }}>
                        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                           <button className="glass" style={{ padding: '8px', borderRadius: '8px', border: 'none' }}><Mail size={16} color="#64748b" /></button>
                           <button className="glass" style={{ padding: '8px', borderRadius: '8px', border: 'none' }}><Edit2 size={16} color="#64748b" /></button>
                           <button className="glass" style={{ padding: '8px', borderRadius: '8px', border: 'none' }}><Trash2 size={16} color="#ef4444" /></button>
                        </div>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
    </motion.div>
  );
};

export default UsersTab;
