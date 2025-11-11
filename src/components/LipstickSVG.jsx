import React from 'react';

const LipstickSVG = ({ color = "#D32F2F", className = "" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 200 400"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Lipstick tube body */}
      <rect x="60" y="120" width="80" height="260" rx="8" fill="#2C2C2C" />
      
      {/* Lipstick tube cap */}
      <rect x="50" y="50" width="100" height="80" rx="10" fill="#1A1A1A" />
      <rect x="55" y="55" width="90" height="70" rx="8" fill="#3A3A3A" />
      
      {/* Lipstick bullet */}
      <ellipse cx="100" cy="120" rx="35" ry="8" fill={color} />
      <rect x="65" y="120" width="70" height="100" rx="35" fill={color} />
      <ellipse cx="100" cy="220" rx="35" ry="8" fill={color} />
      
      {/* Shine on lipstick */}
      <ellipse cx="85" cy="150" rx="12" ry="30" fill="rgba(255,255,255,0.3)" />
      
      {/* Brand band */}
      <rect x="70" y="300" width="60" height="8" rx="4" fill="#FFD700" />
      
      {/* Base */}
      <rect x="75" y="380" width="50" height="20" rx="5" fill="#1A1A1A" />
    </svg>
  );
};

export default LipstickSVG;
