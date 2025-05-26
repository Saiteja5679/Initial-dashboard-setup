import React from 'react';
import { Heart } from 'lucide-react';

const AnatomySection = () => {
  const containerStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '24px',
    position: 'relative',
    height: '500px'
  };

  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    position: 'relative'
  };

  const imageStyle = {
    width: '200px',
    height: '500px',
    objectFit: 'cover',
    alignItems: 'center',
    display: 'flex',
    borderRadius: '8px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
  };

  const tagStyle = (top, left, transform) => ({
    position: 'absolute',
    top: top,
    left: left,
    transform: transform,
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
  });

  const legTagStyle = {
    position: 'absolute',
    bottom: '64px',
    left: '-16px',
    backgroundColor: '#22d3ee',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '500',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
  };

  return (
    <div style={containerStyle}>
      <div style={centerStyle}>
        <div style={{ position: 'relative' }}>
          <img 
            src="1.png"
            alt="Human Anatomy" 
            style={imageStyle}
          />
          
          <div style={tagStyle('110px', '50%', 'translateX(50%)')}>
            <Heart style={{ width: '12px', height: '20px', fill: 'currentColor' }} />
            <span>Healthy Heart</span>
          </div>
          
          <div style={legTagStyle}>
            Healthy Leg
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;