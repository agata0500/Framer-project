import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion, useMotionValue } from 'framer-motion';
import LipstickSVG from './components/LipstickSVG';
import LetterAnimation from './components/LetterAnimation';
import LipstickCarousel from './components/LipstickCarousel';
import AnimatedProductImage from './components/AnimatedProductImage';
import HorizontalScrollGallery from './components/HorizontalScrollGallery';

// Lipstick hero image from public folder
const lipstickHeroImage = '/lipstick-hero.png';

function App() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  
  // Parallax effects - subtle movement
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Product Data - Lipstick
  const product = {
    heroSubtitle: "EVERY SHADE\nTELLS A STORY",
    tagline: "Bold Color, Lasting Beauty",
    description: "Experience the perfect blend of vibrant color and long-lasting wear with our premium lipstick collection. Each shade is carefully crafted to enhance your natural beauty.",
    features: [
      {
        title: "LONG-LASTING FORMULA",
        description: "Up to 12 hours of vibrant color that stays put through meals and drinks."
      },
      {
        title: "HYDRATING & COMFORTABLE",
        description: "Infused with vitamin E and natural oils for a smooth, comfortable feel."
      },
      {
        title: "INTENSE PIGMENTATION",
        description: "Rich, bold colors with just one swipe for a flawless finish."
      }
    ],
    variants: [
      { id: 1, name: "CLASSIC RED", color: "#FF1744" },
      { id: 2, name: "ROSE PINK", color: "#FF4081" },
      { id: 3, name: "BERRY WINE", color: "#E91E63" },
      { id: 4, name: "CORAL SUNSET", color: "#FF6F00" },
    ],
    carouselImages: [
      { id: 1, name: "CLASSIC ", url: "/imgi_1001_mac_sku_S4K029_1x1_0.png" },
      { id: 2, name: "ROSE ", url: "/imgi_1058_mac_sku_S4K037_1x1_0.png" },
      { id: 3, name: "NATURAL", url: "/imgi_1065_mac_sku_S4K038_1x1_0.png" },
      { id: 4, name: " SUNSET", url: "/imgi_1072_mac_sku_S4K039_1x1_0.png" },
      { id: 5, name: "DEEP ", url: "/imgi_1079_mac_sku_S4K051_1x1_0.png" },
      { id: 6, name: "VINTAGE", url: "/imgi_976_mac_sku_S4K021_1x1_0.png" },
      { id: 7, name: "THANKS", url: "/imgi_1628_mac_sku_SMXF05_EMEA_1x1_0.png" },
      { id: 8, name: "DAILY", url: "/imgi_1629_mac_sku_SMXF05_EMEA_1x1_0.png" },
    ],
    morphingGalleryImages: [
      { id: 1, name: "PREMIUM SHADE 1", url: "/imgi_964_mac_sku_S4K013_1x1_2.png" },
      { id: 2, name: "PREMIUM SHADE 2", url: "/imgi_965_mac_sku_S4K013_1x1_3.png" },
      { id: 3, name: "PREMIUM SHADE 3", url: "/imgi_971_mac_sku_S4K017_1x1_2.png" },
      { id: 4, name: "PREMIUM SHADE 4", url: "/imgi_951_mac_sku_S4K047_1x1_4.png" },
      { id: 5, name: "PREMIUM SHADE 5", url: "/imgi_949_mac_sku_S4K047_1x1_2.png" },
      { id: 6, name: "PREMIUM SHADE 6", url: "/imgi_943_mac_sku_S4K046_1x1_3.png" },
    ]
  };

  // Animation variants - dramatic and cinematic
  const fadeInUp = {
    initial: { 
      opacity: shouldReduceMotion ? 1 : 0, 
      y: shouldReduceMotion ? 0 : 60 
    },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: shouldReduceMotion ? 0 : 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    viewport: { once: true, margin: "-100px" }
  };

  const scaleIn = {
    initial: { 
      opacity: shouldReduceMotion ? 1 : 0, 
      scale: shouldReduceMotion ? 1 : 0.8 
    },
    whileInView: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: shouldReduceMotion ? 0 : 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    viewport: { once: true, margin: "-100px" }
  };

  const slideInLeft = {
    initial: { 
      opacity: shouldReduceMotion ? 1 : 0, 
      x: shouldReduceMotion ? 0 : -100 
    },
    whileInView: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: shouldReduceMotion ? 0 : 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    viewport: { once: true, margin: "-100px" }
  };

  const slideInRight = {
    initial: { 
      opacity: shouldReduceMotion ? 1 : 0, 
      x: shouldReduceMotion ? 0 : 100 
    },
    whileInView: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: shouldReduceMotion ? 0 : 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    viewport: { once: true, margin: "-100px" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.2
      }
    },
    viewport: { once: true, margin: "-100px" }
  };

  // Interactive animations
  const hoverScale = {
    whileHover: shouldReduceMotion ? {} : { 
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    whileTap: shouldReduceMotion ? {} : { 
      scale: 0.95 
    }
  };

  const hoverLift = {
    whileHover: shouldReduceMotion ? {} : {
      y: -10,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <div className="App">
      {/* 1. Hero Section - Black Mango Style */}
      <section id="hero" className="hero-section">
        <motion.div 
          className="hero-background"
        >
          <motion.div 
            className="hero-image-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{ 
              y: heroY, 
              opacity: heroOpacity,
            }}
          >
            <motion.img 
              src={lipstickHeroImage}
              alt="Luxe Lipstick"
              className="product-image-hero"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </motion.div>
        </motion.div>
        
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <motion.h1 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              <LetterAnimation 
                text={product.heroSubtitle} 
                shouldReduceMotion={shouldReduceMotion}
                delay={0.8}
              />
            </motion.h1>
            
            <motion.button
              className="cta-button hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.5, ease: "easeOut" }}
              whileHover={shouldReduceMotion ? {} : {
                scale: 1.1,
                boxShadow: "0 0 30px rgba(255, 64, 129, 0.5)",
                transition: { duration: 0.3 }
              }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            >
              DISCOVER NOW
            </motion.button>
          </div>
        </div>
      </section>

      {/* 2. Features Section */}
      <section id="features" className="features-section">
        <h2 className="section-title">
          <LetterAnimation 
            text="KEY FEATURES" 
            shouldReduceMotion={shouldReduceMotion}
            useViewport={true}
          />
        </h2>
        
        <motion.div 
          className="features-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
        >
          {product.features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={index % 2 === 0 ? slideInLeft : slideInRight}
              className="feature-card"
              {...hoverLift}
              whileHover={shouldReduceMotion ? {} : {
                borderColor: "#FF4081",
                transition: { duration: 0.3 }
              }}
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.5 }}
              >
                {feature.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.7 }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. Horizontal Scroll Gallery Section */}
      <section id="horizontal-gallery" className="horizontal-scroll-gallery-section">
        <HorizontalScrollGallery 
          images={product.morphingGalleryImages}
          shouldReduceMotion={shouldReduceMotion}
        />
      </section>

      {/* 4. Animated Product Section */}
      <section id="animated-product" className="animated-product-section">
        <motion.div
          className="animated-product-content"
          initial="initial"
          whileInView="whileInView"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="section-title"
            variants={fadeInUp}
          >
            <LetterAnimation 
              text="SHADE RANGE" 
              shouldReduceMotion={shouldReduceMotion}
              useViewport={true}
            />
          </motion.h2>
          
          <motion.div
            variants={scaleIn}
            className="animated-product-image-container"
          >
            <AnimatedProductImage 
              src="/imgi_1087_mac_sku_SX5W03_3000x3000_3.png"
              alt="Premium Lipstick"
              shouldReduceMotion={shouldReduceMotion}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* 4. Variants Section */}
      <section id="variants" className="variants-section">
        <h2 className="section-title section-title-small">
          <LetterAnimation 
            text="CHOOSE YOUR SHADE" 
            shouldReduceMotion={shouldReduceMotion}
            useViewport={true}
          />
        </h2>
        
        <motion.div
          initial="initial"
          whileInView="whileInView"
          variants={fadeInUp}
          viewport={{ once: true, margin: "-50px" }}
          className="carousel-section"
        >
          <LipstickCarousel 
            images={product.carouselImages} 
            shouldReduceMotion={shouldReduceMotion}
          />
        </motion.div>
      </section>

      {/* 4. CTA Section */}
      <section id="cta" className="cta-section">
        <motion.div
          className="cta-content"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="cta-title cta-title-small">
            <LetterAnimation 
              text="READY TO TRANSFORM YOUR LOOK?" 
              shouldReduceMotion={shouldReduceMotion}
              useViewport={true}
              delay={0.2}
            />
          </h2>
          
          <motion.p 
            variants={fadeInUp} 
            className="cta-description"
          >
            Experience the perfect blend of luxury and performance.
          </motion.p>
          
          <motion.button
            variants={scaleIn}
            className="cta-button primary"
            whileHover={shouldReduceMotion ? {} : {
              scale: 1.1,
              boxShadow: "0 0 40px rgba(255, 64, 129, 0.6)",
              transition: { duration: 0.3 }
            }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          >
            SHOP NOW
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}

export default App;