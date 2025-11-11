// src/App.jsx
import React from 'react';
// We will import motion and AnimatedSection in the next step

function App() {
  // Product Data (Smartwatch example)
  const product = {
    name: "Aura Smartwatch Pro",
    tagline: "Intelligence on Your Wrist",
    features: [
      "Always-On Retina Display", 
      "2-Week Battery Life", 
      "Advanced Health Monitoring"
    ],
    variants: [
      { id: 1, name: "Midnight Black", color: "#333333" },
      { id: 2, name: "Starlight Silver", color: "#e0e0e0" },
    ]
  };

  return (
    <div className="App">
      {/* 1. Intro / Hero Section */}
      <section id="hero" className="hero-section">
        <h1>{product.name}</h1>
        <p>{product.tagline}</p>
        <div className="product-image-container">
          {/* Product Image Placeholder */}
        </div>
        <button>Discover Now</button>
      </section>

      {/* 2. Product Features Section */}
      <section id="features" className="features-section">
        <h2>Key Features</h2>
        <ul className="features-list">
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>

      {/* 3. Gallery or Variants Section */}
      <section id="variants" className="variants-section">
        <h2>Choose Your Style</h2>
        <div className="variant-container">
          {product.variants.map((variant) => (
            <div 
              key={variant.id} 
              className="variant-card" 
              style={{ backgroundColor: variant.color }}
            >
              {variant.name}
            </div>
          ))}
        </div>
      </section>

      {/* 4. Call-to-Action Section */}
      <section id="cta" className="cta-section">
        <h2>Ready to Upgrade?</h2>
        <button>Buy the Aura Pro</button>
      </section>
    </div>
  );
}

export default App;
