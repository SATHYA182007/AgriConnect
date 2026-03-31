import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, ShoppingBag, LayoutDashboard, Mail, Lock, ChevronRight, Sprout, Tractor, UserCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const roles = [
  { id: 'farmer', name: 'Farmer', icon: Tractor, color: '#1B5E20' },
  { id: 'merchant', name: 'Merchant', icon: ShoppingBag, color: '#6D4C41' },
  { id: 'admin', name: 'Admin', icon: LayoutDashboard, color: '#2E7D32' }
];

const LoginPage = () => {
  const [selectedRole, setSelectedRole] = useState('farmer');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login for demo purposes
    setTimeout(() => {
      setIsLoading(false);
      navigate(`/${selectedRole}/dashboard`);
    }, 1500);
  };

  return (
    <div className="login-container" style={{ minHeight: '100vh', display: 'flex' }}>
      {/* Left Panel: Illustration & Branding */}
      <div className="illustration-panel" style={{ flex: 1.2, background: 'var(--grad-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ zIndex: 2 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
            <div className="glass" style={{ width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Sprout size={28} color="#00E676" />
            </div>
            <h1 style={{ color: 'white', fontSize: '28px' }}>AgriConnect 360</h1>
          </div>
          
          <h2 style={{ color: 'white', fontSize: '42px', lineHeight: 1.2, marginBottom: '24px' }}>
            Transforming the Future of Smart Agriculture
          </h2>
          <p style={{ fontSize: '18px', opacity: 0.9, maxWidth: '500px', marginBottom: '48px' }}>
            Empowering farmers and merchants with AI-driven insights and a seamless digital marketplace.
          </p>
          
          <div className="glass" style={{ padding: '24px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '16px', maxWidth: '350px' }}>
            <div style={{ background: 'rgba(255,255,255,0.2)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <UserCheck size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 600 }}>10k+ Active Farmers</div>
              <div style={{ fontSize: '14px', opacity: 0.8 }}>Joined the ecosystem this month</div>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Abstract Shapes for Visual Interest */}
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '400px', height: '400px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '-5%', left: '10%', width: '250px', height: '250px', background: 'rgba(0,230,118,0.1)', borderRadius: '50%', filter: 'blur(40px)' }}></div>
      </div>

      {/* Right Panel: Login Form */}
      <div className="form-panel" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--background)', padding: '40px' }}>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass"
          style={{ width: '100%', maxWidth: '480px', padding: '48px', borderRadius: '24px' }}
        >
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '24px', color: '#1e293b', marginBottom: '8px' }}>Welcome Back</h3>
            <p style={{ color: '#64748b' }}>Select your account type to access your dashboard.</p>
          </div>

          {/* Role Switching Tabs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '32px', background: '#f1f5f9', padding: '6px', borderRadius: '14px' }}>
            {roles.map(role => {
              const Icon = role.icon;
              return (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  style={{
                    border: 'none',
                    background: selectedRole === role.id ? 'white' : 'transparent',
                    padding: '12px 10px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                    boxShadow: selectedRole === role.id ? 'var(--shadow-md)' : 'none'
                  }}
                >
                  <Icon size={18} color={selectedRole === role.id ? role.color : '#94a3b8'} strokeWidth={selectedRole === role.id ? 2.5 : 2} />
                  <span style={{ fontSize: '11px', fontWeight: 600, color: selectedRole === role.id ? '#1e293b' : '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.4px' }}>
                    {role.name}
                  </span>
                </button>
              )
            })}
          </div>

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, marginBottom: '8px', color: '#475569' }}>Email Address or Phone</label>
              <div style={{ position: 'relative' }}>
                <Mail size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                <input 
                  type="text" 
                  placeholder="Enter your registered email" 
                  style={{ width: '100%', padding: '14px 14px 14px 44px', borderRadius: '12px', border: '1px solid #e2e8f0', background: 'white', transition: 'all 0.2s' }} 
                  required
                />
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: 500, color: '#475569' }}>Password</label>
                <a href="#" style={{ fontSize: '13px', color: 'var(--primary)', textDecoration: 'none', fontWeight: 500 }}>Forgot?</a>
              </div>
              <div style={{ position: 'relative' }}>
                <Lock size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  style={{ width: '100%', padding: '14px 14px 14px 44px', borderRadius: '12px', border: '1px solid #e2e8f0', background: 'white', transition: 'all 0.2s' }} 
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="btn-primary" 
              style={{ width: '100%', padding: '16px', fontSize: '16px' }}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="loader" style={{ width: '20px', height: '20px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
              ) : (
                <>Sign In to Dashboard <ChevronRight size={18} /></>
              )}
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '32px', fontSize: '14px', color: '#64748b' }}>
            Don't have an account? <a href="#" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>Create Account</a>
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin { to { transform: rotate(360deg); } }
        .form-panel input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 4px rgba(27, 94, 32, 0.1);
        }
        @media (max-width: 992px) {
          .illustration-panel { display: none !important; }
        }
      `}} />
    </div>
  );
};

export default LoginPage;
