import React from 'react';
import { Routes, Route, NavLink, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bell, ShoppingBag, TrendingUp, LayoutDashboard, 
  LogOut, Search, MapPin, Truck, Activity, Database,
  Terminal as TerminalIcon, Globe, PieChart as ChartIcon
} from 'lucide-react';

// Tab Components
import Overview from './tabs/Overview';
import Terminal from './tabs/Terminal';
import Demand from './tabs/Demand';
import Marketplace from './tabs/Marketplace';
import Analytics from './tabs/Analytics';

const MerchantDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: 'overview', path: '/merchant/overview', icon: LayoutDashboard, label: 'Control Hub' },
    { id: 'terminal', path: '/merchant/terminal', icon: TerminalIcon, label: 'Bidding Terminal' },
    { id: 'demand', path: '/merchant/demand', icon: ChartIcon, label: 'Demand Heatmap' },
    { id: 'market', path: '/merchant/market', icon: Globe, label: 'Global Sourcing' },
    { id: 'analytics', path: '/merchant/analytics', icon: Activity, label: 'Supply Chain AI' }
  ];

  return (
    <div className="merchant-dashboard" style={{ display: 'flex', minHeight: '100vh', background: 'var(--background)' }}>
      {/* Sidebar Navigation */}
      <aside className="glass" style={{ width: '280px', height: '100vh', position: 'fixed', left: 0, top: 0, padding: '32px', display: 'flex', flexDirection: 'column', zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '48px' }}>
          <div style={{ background: '#6D4C41', padding: '6px', borderRadius: '8px' }}>
            <ShoppingBag size={24} color="white" />
          </div>
          <h2 style={{ fontSize: '18px', margin: 0, color: '#6D4C41' }}>Merchant Pro</h2>
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
                background: isActive ? 'rgba(109, 76, 65, 0.08)' : 'transparent',
                color: isActive ? '#6D4C41' : '#64748b'
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
            <h1 style={{ fontSize: '30px', marginBottom: '4px', color: '#6D4C41' }}>Merchant Command</h1>
            <p style={{ color: '#64748b' }}>Technical procurement and global sourcing gateway.</p>
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div className="glass" style={{ padding: '10px', borderRadius: '12px', cursor: 'pointer', position: 'relative' }}>
              <Bell size={20} color="#64748b" />
              <div style={{ position: 'absolute', top: '8px', right: '8px', width: '8px', height: '8px', borderRadius: '50%', background: '#ff4444', border: '2px solid white' }}></div>
            </div>
            <div className="glass" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '6px 16px 6px 6px', borderRadius: '40px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#6D4C41', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 600 }}>MP</div>
              <div style={{ fontSize: '14px', fontWeight: 600 }}>AgriHarvest Corp</div>
            </div>
          </div>
        </header>

        {/* Dynamic Outlet with Transition */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="overview" element={<Overview />} />
            <Route path="terminal" element={<Terminal />} />
            <Route path="demand" element={<Demand />} />
            <Route path="market" element={<Marketplace />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="*" element={<Navigate to="overview" replace />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default MerchantDashboard;
