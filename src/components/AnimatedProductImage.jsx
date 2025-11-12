import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedProductImage = ({ src, alt = "Product", shouldReduceMotion = false }) => {
  const { scrollYProgress } = useScroll();
  
  // Parallax and rotation effects
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <div className="animated-product-container">
      <motion.div
        className="animated-product-wrapper"
        style={{
          y: shouldReduceMotion ? 0 : y,
          rotate: shouldReduceMotion ? 0 : rotate,
          scale: shouldReduceMotion ? 1 : scale,
        }}
      >
        <motion.img
          src={src}
          alt={alt}
          className="animated-product-image"
          initial={{ 
            opacity: 0, 
            scale: 0.5, 
            rotateY: -45,
            rotateX: 20,
            y: 100,
            filter: "blur(15px) brightness(0.5)"
          }}
          whileInView={{ 
            opacity: 1, 
            scale: 1, 
            rotateY: 0,
            rotateX: 0,
            y: 0,
            filter: "blur(0px) brightness(1)",
            transition: {
              duration: shouldReduceMotion ? 0 : 2,
              ease: [0.34, 1.56, 0.64, 1], // Back easing for dramatic effect
              scale: {
                duration: shouldReduceMotion ? 0 : 2,
                ease: [0.34, 1.56, 0.64, 1]
              },
              rotateY: {
                duration: shouldReduceMotion ? 0 : 2,
                ease: [0.34, 1.56, 0.64, 1]
              },
              rotateX: {
                duration: shouldReduceMotion ? 0 : 2,
                ease: [0.34, 1.56, 0.64, 1]
              },
              y: {
                duration: shouldReduceMotion ? 0 : 2,
                ease: [0.34, 1.56, 0.64, 1]
              },
              opacity: {
                duration: shouldReduceMotion ? 0 : 1.5,
                ease: "easeOut"
              },
              filter: {
                duration: shouldReduceMotion ? 0 : 1.8,
                ease: "easeOut"
              }
            }
          }}
          viewport={{ once: true, margin: "-100px" }}
          animate={shouldReduceMotion ? {} : {
            y: [0, -15, 0],
            rotateY: [0, 2, -2, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          whileHover={shouldReduceMotion ? {} : {
            scale: 1.1,
            rotateY: [0, 5, -5, 0],
            rotateX: [0, 5, -5, 0],
            transition: {
              duration: 0.6,
              ease: "easeInOut"
            }
          }}
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px"
          }}
        />
        
        {/* Floating glow effect */}
        <motion.div
          className="animated-product-glow"
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 20, -20, 0],
            y: [0, 15, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  );
};

export default AnimatedProductImage;