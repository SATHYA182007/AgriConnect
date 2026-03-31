import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Droplets, Wind, Sun, AlertCircle, Calendar, MapPin, Search, Thermometer, CloudRain, CloudLightning } from 'lucide-react';

const forecast = [
  { day: 'Mon', temp: 28, humidity: 45, wind: 12, rain: 0, status: 'Sunny', icon: Sun },
  { day: 'Tue', temp: 30, humidity: 42, wind: 15, rain: 0, status: 'Sunny', icon: Sun },
  { day: 'Wed', temp: 26, humidity: 72, wind: 24, rain: 80, status: 'Rainy', icon: CloudRain },
  { day: 'Thu', temp: 22, humidity: 85, wind: 28, rain: 95, status: 'Storm', icon: CloudLightning },
  { day: 'Fri', temp: 24, humidity: 68, wind: 18, rain: 15, status: 'Cloudy', icon: Cloud }
];

const Weather = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h2 style={{ fontSize: '26px', marginBottom: '4px' }}>Precision Weather Tracker</h2>
          <p style={{ color: '#64748b' }}>Hyper-local forecasts and agronomic weather insights.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
           <div className="glass" style={{ padding: '12px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MapPin size={18} color="var(--primary)" />
              <span style={{ fontWeight: 600 }}>Agri-Zone #124 (Midlands)</span>
           </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '32px', marginBottom: '40px' }}>
        <div className="glass" style={{ padding: '40px', borderRadius: '32px', background: 'var(--grad-primary)', color: 'white' }}>
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '48px' }}>
              <div>
                 <div style={{ fontSize: '18px', opacity: 0.8 }}>Current Conditions</div>
                 <div style={{ fontSize: '72px', fontWeight: 700 }}>28°</div>
                 <div style={{ fontSize: '20px', fontWeight: 600 }}>Mostly Sunny</div>
              </div>
              <Sun size={80} color="white" />
           </div>
           
           <div className="grid-cols-2" style={{ gap: '24px' }}>
              {[
                { icon: Droplets, label: 'Humidity', val: '42%' },
                { icon: Wind, label: 'Wind Speed', val: '12km/h' },
                { icon: Thermometer, label: 'Real Feel', val: '31°' },
                { icon: Sun, label: 'UV Index', val: 'High (8)' }
              ].map((w, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                   <w.icon size={20} color="white" style={{ opacity: 0.8 }} />
                   <div>
                      <div style={{ fontSize: '11px', opacity: 0.7 }}>{w.label}</div>
                      <div style={{ fontWeight: 600 }}>{w.val}</div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        <div className="card" style={{ padding: '32px' }}>
           <h3 style={{ fontSize: '20px', marginBottom: '32px' }}>Upcoming Forecast (5-Day)</h3>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {forecast.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', background: '#f8fafc', borderRadius: '16px' }}>
                   <div style={{ width: '60px', fontWeight: 700, fontSize: '16px' }}>{f.day}</div>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, justifyContent: 'center' }}>
                      <f.icon size={24} color={f.status === 'Rainy' || f.status === 'Storm' ? '#00B0FF' : '#f59e0b'} />
                      <span style={{ fontSize: '14px', fontWeight: 600, color: '#1e293b' }}>{f.status}</span>
                   </div>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                      <div style={{ textAlign: 'right' }}>
                         <div style={{ fontSize: '11px', color: '#64748b' }}>High/Low</div>
                         <div style={{ fontWeight: 700 }}>{f.temp}° / {f.temp-8}°</div>
                      </div>
                      <div style={{ width: '40px', textAlign: 'right' }}>
                         <div style={{ fontSize: '11px', color: '#64748b' }}>Rain</div>
                         <div style={{ fontWeight: 700, color: f.rain > 50 ? '#00B0FF' : '#94a3b8' }}>{f.rain}%</div>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>

      <div className="glass" style={{ padding: '32px', borderRadius: '24px', background: 'rgba(255, 172, 0, 0.05)', border: '1px solid rgba(255, 172, 0, 0.1)' }}>
         <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <AlertCircle size={24} color="#f59e0b" />
            <h3 style={{ fontSize: '18px', color: '#92400e', margin: 0 }}>Agronomic Advisory</h3>
         </div>
         <p style={{ fontSize: '14px', color: '#92400e', margin: 0, lineHeight: 1.6 }}>Heavy rainfall (80mm) expected in next 48 hours. Postpone fertilizer application to prevent runoff. Ensure drainage channels for Wheat sectors are clear. Disease risk for Soya increased due to high humidity.</p>
      </div>
    </motion.div>
  );
};

export default Weather;
