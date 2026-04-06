import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sprout, BarChart3, Cloud, Droplets, Calendar, Edit2, Trash2, MapPin, Search, Plus, Filter } from 'lucide-react';

const myCrops = [
  { id: 1, name: 'Tuff-Yield Wheat', variant: 'Rust Resistant (R260)', sown: 'Jan 12, 2026', harvest: 'Jun 30, 2026', health: 'Optimal', data: 'Yield Forecast: 5.2 T/Ha', status: 'Healthy', moisture: '72%', img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1600&auto=format&fit=crop' },
  { id: 2, name: 'Premium Basmati', variant: 'Long Grain (XL)', sown: 'Feb 5, 2026', harvest: 'Sep 15, 2026', health: 'Critical', data: 'Yield Forecast: 3.1 T/Ha', status: 'Irrigation Required', moisture: '45%', img: 'https://images.unsplash.com/photo-1585807908871-bc01ba47db6a?q=80&w=1600&auto=format&fit=crop' },
  { id: 3, name: 'Organic Soya', variant: 'Nitrogen Rich', sown: 'Mar 1, 2026', harvest: 'Nov 12, 2026', health: 'Optimal', data: 'Yield Forecast: 4.8 T/Ha', status: 'Healthy', moisture: '81%', img: 'https://images.unsplash.com/photo-1592982537443-d141e6eef56d?q=80&w=1600&auto=format&fit=crop' },
  { id: 4, name: 'Golden Corn', variant: 'Drought Tolerant', sown: 'Mar 15, 2026', harvest: 'Jul 20, 2026', health: 'Optimal', data: 'Yield Forecast: 8.5 T/Ha', status: 'Healthy', moisture: '68%', img: 'https://images.unsplash.com/photo-1599818815152-b88aeb78f407?q=80&w=1600&auto=format&fit=crop' },
  { id: 5, name: 'Vine Tomatoes', variant: 'Specialty Heirloom', sown: 'Apr 2, 2026', harvest: 'Aug 10, 2026', health: 'Warning', data: 'Yield Forecast: 12.0 T/Ha', status: 'Pest Risk Detected', moisture: '60%', img: 'https://images.unsplash.com/photo-1592683901170-c5264b301afb?q=80&w=1600&auto=format&fit=crop' },
  { id: 6, name: 'Arabica Coffee', variant: 'High Altitude', sown: 'Jan 05, 2026', harvest: 'Dec 01, 2026', health: 'Optimal', data: 'Yield Forecast: 1.5 T/Ha', status: 'Healthy', moisture: '75%', img: 'https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=1600&auto=format&fit=crop' }
];

const Crops = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h2 style={{ fontSize: '26px' }}>My Active Crops</h2>
          <p style={{ color: '#64748b' }}>Technical health monitoring and harvest projections.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="glass" style={{ padding: '12px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', border: 'none' }}><Filter size={18} /> Filters</button>
          <button className="btn-primary" style={{ padding: '12px 24px' }}><Plus size={18} /> New Sowing</button>
        </div>
      </div>

      <div className="grid-cols-3" style={{ gap: '32px' }}>
        <AnimatePresence>
          {myCrops.map((crop) => (
            <motion.div 
              key={crop.id}
              className="card card-hover"
              style={{ overflow: 'hidden' }}
              layout
            >
              <div style={{ position: 'relative' }}>
                <img src={crop.img} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '16px', right: '16px', padding: '6px 12px', borderRadius: '40px', background: 'rgba(255,255,255,0.95)', fontSize: '11px', fontWeight: 700, color: crop.health === 'Optimal' ? '#00E676' : crop.health === 'Warning' ? '#f59e0b' : '#ff4444', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                   {crop.health}
                </div>
              </div>
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div>
                    <h4 style={{ fontSize: '18px', margin: '0 0 4px 0' }}>{crop.name}</h4>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>{crop.variant} Variety</div>
                  </div>
                  <Sprout size={20} color="var(--primary)" />
                </div>

                <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '14px', marginBottom: '20px' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', fontSize: '13px' }}>
                      <Calendar size={16} color="#64748b" />
                      <div>Sown: <span style={{ fontWeight: 600 }}>{crop.sown}</span></div>
                   </div>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '13px' }}>
                      <Droplets size={16} color="#00B0FF" />
                      <div>Soil moisture: <span style={{ fontWeight: 600 }}>{crop.moisture}</span></div>
                   </div>
                </div>

                <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '20px' }}>
                   {crop.data}
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                   <button className="glass" style={{ flex: 1, padding: '10px', borderRadius: '10px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}><Edit2 size={14} /> Log Data</button>
                   <button className="glass" style={{ flex: 1, padding: '10px', borderRadius: '10px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', color: '#ff4444' }}><Trash2 size={14} /> Archive</button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Crops;
