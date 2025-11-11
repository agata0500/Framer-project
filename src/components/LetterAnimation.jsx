import React from 'react';
import { motion } from 'framer-motion';

const LetterAnimation = ({ text, className = "", delay = 0, shouldReduceMotion = false, useViewport = false }) => {
  const letters = text.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.03,
        delayChildren: shouldReduceMotion ? 0 : delay,
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        duration: shouldReduceMotion ? 0 : 0.5,
      },
    },
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 50,
    },
  };

  const animationProps = useViewport 
    ? {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" }
      }
    : {
        initial: "hidden",
        animate: "visible"
      };

  return (
    <motion.span
      className={className}
      variants={container}
      {...animationProps}
      style={{ display: 'block', whiteSpace: 'pre-line' }}
    >
      {letters.map((letter, index) => {
        if (letter === '\n') {
          return <br key={index} />;
        }
        return (
          <motion.span
            key={index}
            variants={child}
            style={{ 
              display: letter === ' ' ? 'inline' : 'inline-block',
              marginRight: letter === ' ' ? '0.3em' : '0.05em'
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        );
      })}
    </motion.span>
  );
};

export default LetterAnimation;