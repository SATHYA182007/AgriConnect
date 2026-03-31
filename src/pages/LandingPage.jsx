import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Sprout, BarChart3, Globe, ShieldCheck, Zap, ArrowRight, Sun, Droplets, Wind, Tractor } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page" style={{ background: 'var(--background)', overflowX: 'hidden' }}>
      {/* Navbar */}
      <nav style={{ position: 'fixed', top: 0, left: 0, width: '100%', padding: '24px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100, background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ background: 'var(--primary)', padding: '6px', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
            <Sprout size={24} color="white" />
          </div>
          <h2 style={{ fontSize: '20px', color: 'var(--primary)', margin: 0 }}>AgriConnect 360</h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {['Product', 'Farmers', 'Merchants', 'Case Studies'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ textDecoration: 'none', color: '#475569', fontSize: '15px', fontWeight: 500, transition: 'color 0.2s' }}>{item}</a>
          ))}
          <button onClick={() => navigate('/login')} className="btn-primary" style={{ padding: '10px 24px', borderRadius: '12px' }}>Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ padding: '160px 60px 100px', display: 'flex', alignItems: 'center', position: 'relative' }}>
        <div style={{ flex: 1, maxWidth: '650px', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ background: 'rgba(0, 230, 118, 0.1)', color: '#1B5E20', display: 'inline-flex', padding: '6px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: 600, marginBottom: '24px', border: '1px solid rgba(0, 230, 118, 0.2)' }}>
              Next-Gen AgriTech Platform
            </div>
            <h1 style={{ fontSize: '72px', lineHeight: 1.1, color: 'var(--primary)', marginBottom: '32px' }}>
              Cultivating the <span style={{ color: '#00E676' }}>Digital</span> Future of Farming.
            </h1>
            <p style={{ fontSize: '20px', color: '#64748b', lineHeight: 1.6, marginBottom: '40px', maxWidth: '580px' }}>
              Connect directly with high-volume buyers, leverage AI-powered yield predictions, and manage your farm with precision data analytics.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button 
                onClick={() => navigate('/login')}
                className="btn-primary" 
                style={{ padding: '18px 36px', fontSize: '18px', borderRadius: '16px' }}
              >
                Start Your Digital Farm <ArrowRight size={20} />
              </button>
              <button className="btn-ghost" style={{ padding: '18px 36px', fontSize: '18px', borderRadius: '16px' }}>
                Join as Merchant
              </button>
            </div>
          </motion.div>
          
          <div style={{ display: 'flex', gap: '32px', marginTop: '64px' }}>
            <div>
              <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--primary)' }}>500k</div>
              <div style={{ color: '#64748b', fontSize: '14px' }}>Hectares Managed</div>
            </div>
            <div style={{ width: '1px', background: '#e2e8f0' }}></div>
            <div>
              <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--primary)' }}>$2M+</div>
              <div style={{ color: '#64748b', fontSize: '14px' }}>Market Volume P/A</div>
            </div>
            <div style={{ width: '1px', background: '#e2e8f0' }}></div>
            <div>
              <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--primary)' }}>0.1%</div>
              <div style={{ color: '#64748b', fontSize: '14px' }}>Transaction Fees</div>
            </div>
          </div>
        </div>

        {/* Hero Visual: Premium Rendered Mockup or Abstract representation */}
        <div style={{ flex: 1, position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="glass" 
            style={{ width: '500px', height: '600px', borderRadius: '40px', background: 'var(--grad-primary)', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
          >
            {/* Simulation of a dashboard screen inside the 3D-like container */}
            <div className="glass" style={{ width: '80%', height: '70%', borderRadius: '24px', background: 'white', padding: '24px', transform: 'perspective(1000px) rotateY(-10deg) rotateX(10deg)', boxShadow: '40px 40px 80px rgba(0,0,0,0.2)' }}>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                <div style={{ flex: 1, height: '80px', borderRadius: '12px', background: 'rgba(0, 230, 118, 0.1)', padding: '16px' }}>
                   <div style={{ width: '30%', height: '8px', background: 'rgba(27, 94, 32, 0.2)', marginBottom: '8px', borderRadius: '4px' }}></div>
                   <div style={{ width: '70%', height: '14px', background: 'var(--primary)', borderRadius: '4px' }}></div>
                </div>
                <div style={{ flex: 1, height: '80px', borderRadius: '12px', background: 'rgba(109, 76, 65, 0.1)', padding: '16px' }}>
                   <div style={{ width: '30%', height: '8px', background: 'rgba(109, 76, 65, 0.2)', marginBottom: '8px', borderRadius: '4px' }}></div>
                   <div style={{ width: '70%', height: '14px', background: '#6D4C41', borderRadius: '4px' }}></div>
                </div>
              </div>
              <div style={{ width: '100%', height: '180px', borderRadius: '12px', background: '#f8fafc', padding: '20px' }}>
                 <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '100px' }}>
                    {[60, 80, 40, 110, 90, 70, 120].map((h, i) => (
                      <motion.div key={i} animate={{ height: h }} style={{ flex: 1, background: 'var(--primary)', borderRadius: '4px 4px 0 0', opacity: 0.2 + (i * 0.1) }} />
                    ))}
                 </div>
              </div>
            </div>
            
            {/* Floating Info Badges */}
            <div style={{ position: 'absolute', top: '150px', left: '-20px' }} className="glass">
              <div style={{ padding: '12px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '12px', background: 'white' }}>
                 <div style={{ color: '#00E676', background: 'rgba(0, 230, 118, 0.1)', padding: '8px', borderRadius: '8px' }}><Sun size={20} /></div>
                 <div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>Current Solar</div>
                    <div style={{ fontWeight: 700 }}>480W / m²</div>
                 </div>
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: '100px', right: '-20px' }} className="glass">
               <div style={{ padding: '12px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '12px', background: 'white' }}>
                 <div style={{ color: '#00B0FF', background: 'rgba(0, 176, 255, 0.1)', padding: '8px', borderRadius: '8px' }}><Droplets size={20} /></div>
                 <div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>Soil Moisture</div>
                    <div style={{ fontWeight: 700 }}>72% (Optimal)</div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '100px 60px', background: 'white' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '40px', marginBottom: '16px' }}>All-in-One Agricultural Ecosystem</h2>
          <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>Specialized tools for every stakeholder in the supply chain.</p>
        </div>
        
        <div className="grid-cols-3">
          {[
            { icon: Sprout, title: "Smart Farming", desc: "AI-driven crop yield prediction and soil health monitoring using real-time IoT sensors." },
            { icon: BarChart3, title: "Live Marketplace", desc: "Buy and sell crops with transparent pricing and direct peer-to-peer negotiation." },
            { icon: Globe, title: "Global Logistics", desc: "Track your shipments from farm to warehouse with blockchain-backed traceablity." },
            { icon: ShieldCheck, title: "Verified Users", desc: "Every farmer and merchant undergoes internal vetting to ensure ecosystem trust." },
            { icon: Zap, title: "Instant Payments", desc: "Automated escrow systems release payments as soon as the logistics is verified." },
            { icon: Wind, title: "Weather Analytics", desc: "Hyper-local weather forecasting to prevent crop damage and optimize harvest." }
          ].map((feature, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="card" 
              style={{ padding: '40px', background: '#f8fafc' }}
            >
              <div style={{ background: 'white', width: '56px', height: '56px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', boxShadow: '0 8px 16px rgba(0,0,0,0.05)' }}>
                <feature.icon size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>{feature.title}</h3>
              <p style={{ color: '#64748b', lineHeight: 1.6 }}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Roles Section */}
      <section style={{ padding: '100px 60px', background: 'var(--grad-bg)' }}>
        <div className="grid-cols-2" style={{ alignItems: 'center', gap: '80px' }}>
          <div>
            <h2 style={{ fontSize: '42px', marginBottom: '32px' }}>A Role for Every <span style={{ color: '#00E676' }}>Contributor.</span></h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
               {[
                 { role: "Farmer Dashboard", detail: "Manage crops, check live market rates, and get AI tips." },
                 { role: "Merchant Terminal", detail: "Browse inventory, place bulk orders, and analyze demand heatmap." },
                 { role: "System Admin", detail: "Monitor ecosystem health, verify users, and manage platform stability." }
               ].map((item, i) => (
                 <div key={i} className="glass" style={{ padding: '24px', borderRadius: '20px', display: 'flex', gap: '20px', alignItems: 'center' }}>
                   <div style={{ background: 'var(--primary)', width: '12px', height: '12px', borderRadius: '50%' }}></div>
                   <div>
                     <div style={{ fontSize: '18px', fontWeight: 600, color: 'var(--primary)' }}>{item.role}</div>
                     <div style={{ fontSize: '14px', color: '#64748b' }}>{item.detail}</div>
                   </div>
                 </div>
               ))}
            </div>
          </div>
          <div className="glass" style={{ height: '450px', borderRadius: '32px', background: 'white', position: 'relative', overflow: 'hidden' }}>
            <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2626&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} alt="Farming" />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(0,0,0,0) 50%, rgba(27, 94, 32, 0.8) 100%)' }}></div>
            <div style={{ position: 'absolute', bottom: '40px', left: '40px', color: 'white' }}>
              <div style={{ fontSize: '24px', fontWeight: 600 }}>Empowering 50k+ Rural Farmers</div>
              <div style={{ opacity: 0.8 }}>Scaling sustainable agriculture worldwide.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '80px 60px 40px', background: '#051b07', color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '60px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <Sprout size={32} color="#00E676" />
              <h2 style={{ fontSize: '24px', color: 'white', margin: 0 }}>AgriConnect 360</h2>
            </div>
            <p style={{ maxWidth: '300px', opacity: 0.6, lineHeight: 1.6 }}>The world's leading AI-powered ecosystem for smart agricultural management and connectivity.</p>
          </div>
          <div style={{ display: 'flex', gap: '80px' }}>
            <div>
               <h4 style={{ color: 'white', marginBottom: '24px' }}>Platform</h4>
               <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['Overview', 'Features', 'Success Stories', 'Updates'].map(u => <li key={u}><a href="#" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>{u}</a></li>)}
               </ul>
            </div>
            <div>
               <h4 style={{ color: 'white', marginBottom: '24px' }}>Company</h4>
               <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['About Us', 'Careers', 'Privacy Policy', 'Contact'].map(u => <li key={u}><a href="#" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>{u}</a></li>)}
               </ul>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px', textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>
          &copy; 2026 AgriConnect 360. All rights reserved. Made for the Future of Sustainable Agriculture.
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        html { scroll-behavior: smooth; }
      `}} />
    </div>
  );
};

export default LandingPage;
