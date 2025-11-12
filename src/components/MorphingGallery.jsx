import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MorphingGallery = ({ images, shouldReduceMotion = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length, shouldReduceMotion]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
      rotateY: direction > 0 ? 90 : -90,
      filter: "blur(10px)",
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      filter: "blur(0px)",
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
      rotateY: direction < 0 ? 90 : -90,
      filter: "blur(10px)",
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    if (newDirection === 1) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <div className="morphing-gallery-container">
      <div className="morphing-gallery-wrapper">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
              rotateY: { duration: 0.5 },
              filter: { duration: 0.5 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              if (shouldReduceMotion) return;
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="morphing-gallery-slide"
            style={{ perspective: "1000px" }}
          >
            <motion.img
              src={images[currentIndex].url}
              alt={images[currentIndex].name}
              className="morphing-gallery-image"
              whileHover={shouldReduceMotion ? {} : {
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            />
            
            {/* Overlay gradient */}
            <motion.div
              className="morphing-gallery-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <button
          className="morphing-gallery-button morphing-gallery-button-prev"
          onClick={() => paginate(-1)}
          aria-label="Previous image"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button
          className="morphing-gallery-button morphing-gallery-button-next"
          onClick={() => paginate(1)}
          aria-label="Next image"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Progress indicator */}
        <div className="morphing-gallery-progress">
          {images.map((_, index) => (
            <motion.div
              key={index}
              className={`morphing-gallery-progress-bar ${index === currentIndex ? 'active' : ''}`}
              initial={{ width: 0 }}
              animate={{ 
                width: index === currentIndex ? '100%' : '0%',
                transition: { duration: 4, ease: "linear" }
              }}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail navigation */}
      <div className="morphing-gallery-thumbnails">
        {images.map((image, index) => (
          <motion.button
            key={index}
            className={`morphing-gallery-thumbnail ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            whileHover={shouldReduceMotion ? {} : { scale: 1.1, y: -5 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          >
            <img src={image.url} alt={image.name} />
            <motion.div
              className="morphing-gallery-thumbnail-overlay"
              initial={false}
              animate={{ opacity: index === currentIndex ? 0 : 0.5 }}
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default MorphingGallery;
