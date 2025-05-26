import React from 'react';

const SimpleAppointmentCard = ({ title, time, icon, color = "#dbeafe" }) => {
  const cardStyle = {
    backgroundColor: color,
    padding: '12px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '8px'
  };

  const titleStyle = {
    fontWeight: '500',
    color: '#1f2937',
    fontSize: '14px'
  };

  const timeStyle = {
    color: '#6b7280',
    fontSize: '12px'
  };

  const iconStyle = {
    fontSize: '18px'
  };

  return (
    <div style={cardStyle}>
      <div>
        <div style={titleStyle}>{title}</div>
        <div style={timeStyle}>{time}</div>
      </div>
      <div style={iconStyle}>{icon}</div>
    </div>
  );
};

export default SimpleAppointmentCard;