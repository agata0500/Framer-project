import React from 'react';
import { motion } from 'framer-motion';

const HorizontalScrollGallery = ({ images, shouldReduceMotion = false }) => {
  // Calculate scroll distance: each card is 500px + 40px gap = 540px
  // We need to scroll by the width of one set of images for seamless loop
  const cardWidth = 500;
  const gap = 40;
  const cardTotal = cardWidth + gap;
  const scrollDistance = images.length * cardTotal;

  return (
    <div className="horizontal-scroll-container">
      <div className="horizontal-scroll-wrapper">
        <motion.div
          className="horizontal-scroll-content"
          animate={shouldReduceMotion ? {} : {
            x: [0, -scrollDistance], // Move left (negative) to reveal images moving right
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear"
            }
          }}
        >
          {/* First set of images */}
          {images.map((image, index) => (
            <motion.div
              key={`first-${image.id}`}
              className="horizontal-scroll-card"
              initial={{ opacity: 0, y: 50, rotate: 3 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                rotate: shouldReduceMotion ? 0 : 3,
                transition: {
                  duration: shouldReduceMotion ? 0 : 0.8,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }}
              whileHover={shouldReduceMotion ? {} : {
                rotate: 0,
                scale: 1.05,
                zIndex: 10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="horizontal-scroll-card-inner">
                <img
                  src={image.url}
                  alt={image.name}
                  className="horizontal-scroll-image"
                />
              </div>
            </motion.div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {images.map((image, index) => (
            <motion.div
              key={`duplicate-${image.id}`}
              className="horizontal-scroll-card"
              initial={{ opacity: 0, y: 50, rotate: 3 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                rotate: shouldReduceMotion ? 0 : 3,
                transition: {
                  duration: shouldReduceMotion ? 0 : 0.8,
                  delay: (images.length + index) * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }}
              whileHover={shouldReduceMotion ? {} : {
                rotate: 0,
                scale: 1.05,
                zIndex: 10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="horizontal-scroll-card-inner">
                <img
                  src={image.url}
                  alt={image.name}
                  className="horizontal-scroll-image"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HorizontalScrollGallery;