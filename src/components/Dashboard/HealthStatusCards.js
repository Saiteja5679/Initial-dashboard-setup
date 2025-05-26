import React from 'react';
import { Bone } from 'lucide-react';

const HealthStatusCards = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '16px'
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '8px'
  };

  const iconContainerStyle = (bgColor) => ({
    width: '32px',
    height: '32px',
    backgroundColor: bgColor,
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  });

  const titleStyle = {
    fontWeight: '500',
    color: '#1f2937'
  };

  const dateStyle = {
    fontSize: '12px',
    color: '#6b7280'
  };

  const progressBarStyle = {
    width: '100%',
    backgroundColor: '#e5e7eb',
    borderRadius: '4px',
    height: '4px'
  };

  const progressFillStyle = (width, color) => ({
    backgroundColor: color,
    height: '4px',
    borderRadius: '4px',
    width: width
  });

  const healthData = [
    { name: 'Lungs', icon: '🫁', bgColor: '#fef2f2', progress: '70%', color: '#ef4444', date: '23 May 2025' },
    { name: 'Teeth', icon: '🦷', bgColor: '#fefce8', progress: '85%', color: '#eab308', date: '23 May 2025' },
    { name: 'Bone', icon: <Bone style={{ width: '16px', height: '16px', color: '#ea580c' }} />, bgColor: '#fff7ed', progress: '60%', color: '#f97316', date: '23 May 2025' }
  ];

  return (
    <div style={containerStyle}>
      {healthData.map((item, index) => (
        <div key={index} style={cardStyle}>
          <div style={headerStyle}>
            <div style={iconContainerStyle(item.bgColor)}>
              {item.icon}
            </div>
            <div>
              <div style={titleStyle}>{item.name}</div>
              <div style={dateStyle}>Test: {item.date}</div>
            </div>
          </div>
          <div style={progressBarStyle}>
            <div style={progressFillStyle(item.progress, item.color)}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;