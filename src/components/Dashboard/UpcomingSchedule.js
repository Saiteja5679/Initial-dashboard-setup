import React from 'react';
import SimpleAppointmentCard from '../Common/SimpleAppointmentCard';

const UpcomingSchedule = () => {
  const containerStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '24px'
  };

  const titleStyle = {
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: '16px'
  };

  const sectionStyle = {
    marginBottom: '24px'
  };

  const dayLabelStyle = {
    fontSize: '14px',
    color: '#6b7280',
    marginBottom: '12px'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px'
  };

  const colorMap = {
    'bg-gray-100': '#f3f4f6',
    'bg-purple-100': '#f3e8ff',
    'bg-red-100': '#fef2f2',
    'bg-blue-100': '#dbeafe'
  };

  return (
    <div style={containerStyle}>
      <h3 style={titleStyle}>The Upcoming Schedule</h3>
      
      <div style={sectionStyle}>
        <div style={dayLabelStyle}>On Thursday</div>
        <div style={gridStyle}>
          <SimpleAppointmentCard 
            title="Health checkup complete" 
            time="11:00 AM" 
            icon="🩺"
            color={colorMap['bg-gray-100']}
          />
          <SimpleAppointmentCard 
            title="Ophthalmologist" 
            time="14:00 PM" 
            icon="👁️"
            color={colorMap['bg-purple-100']}
          />
        </div>
      </div>
      
      <div>
        <div style={dayLabelStyle}>On Saturday</div>
        <div style={gridStyle}>
          <SimpleAppointmentCard 
            title="Cardiologist" 
            time="12:00 AM" 
            icon="❤️"
            color={colorMap['bg-red-100']}
          />
          <SimpleAppointmentCard 
            title="Neurologist" 
            time="16:00 PM" 
            icon="🧠"
            color={colorMap['bg-blue-100']}
          />
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;