import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, MapPin, Calendar, User, ShoppingCart, 
  ShieldCheck, Star, Info, MessageSquare, ChevronRight,
  TrendingUp, Leaf, Award
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductDetailsPage = () => {
  const navigate = useNavigate();
  const [selectedQty, setSelectedQty] = useState(100);

  const product = {
    name: 'Grade-A Organic Wheat',
    price: '$0.85/kg',
    seller: 'Farmer Prajapati & Sons',
    location: 'Bhopal, Madhya Pradesh',
    harvestDate: 'Mar 12, 2026',
    badge: 'Pesticide Free',
    rating: 4.8,
    reviews: 124,
    description: 'This harvest of organic wheat is grown using sustainable farming practices with zero chemical pesticides. Ideal for premium flour production and export. The grains are moisture-balanced to 12% for long-term storage stability.'
  };

  return (
    <div className="product-details" style={{ background: 'var(--background)', minHeight: '100vh', padding: '120px 60px 60px' }}>
      {/* Top Navigation */}
      <nav style={{ position: 'fixed', top: 0, left: 0, width: '100%', padding: '24px 60px', background: 'white', zIndex: 100, display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--border)' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 600 }}>
          <ArrowLeft size={20} /> Back to Market
        </button>
      </nav>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Left: Product Media Gallery */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card" 
            style={{ width: '100%', height: '500px', overflow: 'hidden', marginBottom: '24px' }}
          >
            <img 
               src="https://plus.unsplash.com/premium_photo-1661919582136-19391ab1ecfa?q=80&w=2670&auto=format&fit=crop" 
               style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
             {[1,2,3,4].map(i => (
               <div key={i} className="card" style={{ height: '100px', cursor: 'pointer', overflow: 'hidden' }}>
                  <img src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2670&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
               </div>
             ))}
          </div>
        </div>

        {/* Right: Purchase & Info */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span style={{ background: 'rgba(0, 230, 118, 0.1)', color: '#1B5E20', fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: '20px', border: '1px solid rgba(0, 230, 118, 0.2)' }}>
                {product.badge}
              </span>
              <span style={{ color: '#64748b', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Star size={14} color="#FFD700" fill="#FFD700" /> {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            <h1 style={{ fontSize: '36px', marginBottom: '8px' }}>{product.name}</h1>
            <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--primary)' }}>{product.price}</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
             <div style={{ display: 'flex', gap: '12px', color: '#64748b', fontSize: '14px' }}>
                <div className="glass" style={{ padding: '8px 16px', borderRadius: '12px', background: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
                   <MapPin size={16} /> {product.location}
                </div>
                <div className="glass" style={{ padding: '8px 16px', borderRadius: '12px', background: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
                   <Calendar size={16} /> Harvested 12 days ago
                </div>
             </div>
             
             <div className="glass" style={{ padding: '24px', borderRadius: '24px', background: 'white', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#6D4C41', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>SP</div>
                <div style={{ flex: 1 }}>
                   <div style={{ fontWeight: 600 }}>{product.seller}</div>
                   <div style={{ fontSize: '12px', color: '#64748b' }}>Verified Diamond Tier Seller</div>
                </div>
                <button className="btn-ghost" style={{ fontSize: '13px' }}>View Farm Portfolio</button>
             </div>
          </div>

          <p style={{ color: '#64748b', lineHeight: 1.6, marginBottom: '40px' }}>{product.description}</p>

          <div className="glass" style={{ padding: '32px', borderRadius: '24px', background: 'white', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
             <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>
                   <span>Quantity Required (kg)</span>
                   <span>Value: ${(selectedQty * 0.85).toFixed(2)}</span>
                </div>
                <input 
                   type="range" min="100" max="5000" step="50"
                   value={selectedQty}
                   onChange={(e) => setSelectedQty(e.target.value)}
                   style={{ width: '100%', accentColor: 'var(--primary)' }} 
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#94a3b8', marginTop: '8px' }}>
                   <span>100kg (Min)</span>
                   <span>5,000kg (Max)</span>
                </div>
             </div>

             <div style={{ display: 'flex', gap: '12px' }}>
                <button className="btn-primary" style={{ flex: 2, padding: '16px', borderRadius: '16px' }}>
                   Place Order <ShoppingCart size={20} />
                </button>
                <button className="btn-ghost" style={{ flex: 1, padding: '16px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                   <MessageSquare size={20} /> Negotiate
                </button>
             </div>
             <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '12px', color: '#94a3b8', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                <ShieldCheck size={14} /> Transactions secured by AgriConnect Escrow
             </div>
          </div>
        </motion.div>
      </div>

      {/* Recommended for Merchants section */}
      <section style={{ marginTop: '100px' }}>
         <h2 style={{ fontSize: '24px', marginBottom: '32px' }}>Similar Market Listings</h2>
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {[1,2,3,4].map(i => (
              <div key={i} className="card card-hover" style={{ background: 'white' }}>
                 <div style={{ height: '180px', overflow: 'hidden' }}>
                    <img src={`https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&q=80&fit=crop`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>
                 <div style={{ padding: '20px' }}>
                    <div style={{ fontWeight: 600, marginBottom: '4px' }}>Fresh Harvest {i}</div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>Organic certified • Premium</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                       <div style={{ fontWeight: 700, color: 'var(--primary)' }}>$0.72/kg</div>
                       <button className="btn-ghost" style={{ padding: '4px 12px', fontSize: '11px' }}>Quick Buy</button>
                    </div>
                 </div>
              </div>
            ))}
         </div>
      </section>
    </div>
  )
}

export default ProductDetailsPage;
