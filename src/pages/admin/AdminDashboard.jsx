import React from 'react';
import { Routes, Route, NavLink, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bell, LayoutDashboard, LogOut, Search, MapPin, 
  Users, ShieldCheck, Activity, Database, Briefcase,
  Settings, Key, Truck
} from 'lucide-react';

// Tab Components
import Overview from './tabs/Overview';
import UsersTab from './tabs/Users';
import LogisticsTab from './tabs/Logistics';
import SecurityTab from './tabs/Security';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: 'overview', path: '/admin/overview', icon: LayoutDashboard, label: 'Control Hub' },
    { id: 'users', path: '/admin/users', icon: Users, label: 'User Directory' },
    { id: 'logistics', path: '/admin/logistics', icon: Truck, label: 'Logistics' },
    { id: 'security', path: '/admin/security', icon: ShieldCheck, label: 'Security' },
    { id: 'settings', path: '/admin/settings', icon: Settings, label: 'Platform Settings' }
  ];

  return (
    <div className="admin-dashboard" style={{ display: 'flex', minHeight: '100vh', background: 'var(--background)' }}>
      {/* Sidebar Navigation */}
      <aside className="glass" style={{ width: '280px', height: '100vh', position: 'fixed', left: 0, top: 0, padding: '32px', display: 'flex', flexDirection: 'column', zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '48px' }}>
          <div style={{ background: 'var(--primary)', padding: '6px', borderRadius: '8px' }}>
            <ShieldCheck size={24} color="white" />
          </div>
          <h2 style={{ fontSize: '18px', margin: 0 }}>Admin Console</h2>
        </div>

        <nav style={{ flex: 1 }}>
          {menuItems.map(item => (
            <NavLink 
              key={item.id}
              to={item.path}
              style={({ isActive }) => ({
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 18px',
                borderRadius: '12px',
                border: 'none',
                textDecoration: 'none',
                marginBottom: '8px',
                fontSize: '15px',
                fontWeight: 600,
                transition: 'all 0.2s',
                background: isActive ? 'rgba(27, 94, 32, 0.08)' : 'transparent',
                color: isActive ? 'var(--primary)' : '#64748b'
              })}
            >
              <item.icon size={20} />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div style={{ padding: '20px 0', borderTop: '1px solid var(--border)' }}>
          <button onClick={() => navigate('/login')} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 18px', borderRadius: '12px', border: 'none', cursor: 'pointer', background: 'transparent', color: '#ff4444', fontWeight: 600 }}>
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main style={{ marginLeft: '280px', flex: 1, padding: '40px 60px', minHeight: '100vh' }}>
        {/* Top Navbar Header */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <div>
            <h1 style={{ fontSize: '30px', marginBottom: '4px' }}>System Administration</h1>
            <p style={{ color: '#64748b' }}>Technical health and ecosystem oversight for Mar 30, 2026.</p>
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div className="glass" style={{ padding: '10px', borderRadius: '12px', cursor: 'pointer', position: 'relative' }}>
              <Bell size={20} color="#64748b" />
              <div style={{ position: 'absolute', top: '8px', right: '8px', width: '8px', height: '8px', borderRadius: '50%', background: '#ff4444', border: '2px solid white' }}></div>
            </div>
            <div className="glass" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '6px 16px 6px 6px', borderRadius: '40px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 600 }}>AD</div>
              <div style={{ fontSize: '14px', fontWeight: 600 }}>Platform Root</div>
            </div>
          </div>
        </header>

        {/* Dynamic Outlet with Transition */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="overview" element={<Overview />} />
            <Route path="users" element={<UsersTab />} />
            <Route path="logistics" element={<LogisticsTab />} />
            <Route path="security" element={<SecurityTab />} />
            <Route path="settings" element={<div className="card" style={{ padding: '32px' }}>System Global Configurations...</div>} />
            <Route path="/" element={<Navigate to="overview" replace />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default AdminDashboard;
