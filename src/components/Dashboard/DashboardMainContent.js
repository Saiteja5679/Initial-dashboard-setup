import React, { useState, useEffect } from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle = {
    flex: 1,
    padding: '24px',
    backgroundColor: '#f9fafb',
    overflow: 'auto'
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '24px'
  };

  const mainGridStyle = {
    display: 'grid',
    gridTemplateColumns: windowWidth >= 1024 ? 'repeat(12, 1fr)' : '1fr',
    gap: '24px'
  };

  const anatomyColumnStyle = {
    gridColumn: windowWidth >= 1024 ? 'span 3' : 'span 1'
  };

  const healthColumnStyle = {
    gridColumn: windowWidth >= 1024 ? 'span 3' : 'span 1'
  };

  const rightColumnStyle = {
    gridColumn: windowWidth >= 1024 ? 'span 6' : 'span 1',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  };

  const rightTopGridStyle = {
    display: 'grid',
    gridTemplateColumns: windowWidth >= 768 ? '1fr 1fr' : '1fr',
    gap: '16px'
  };

  const activitySectionStyle = {
    marginTop: '24px'
  };

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>Dashboard</div>
      
      <div style={mainGridStyle}>
        <div style={anatomyColumnStyle}>
          <AnatomySection />
        </div>
        
        <div style={healthColumnStyle}>
          <HealthStatusCards />
        </div>
        
        <div style={rightColumnStyle}>
          <div style={rightTopGridStyle}>
            <CalendarView />
            <UpcomingSchedule />
          </div>
        </div>
      </div>
      
      <div style={activitySectionStyle}>
        <ActivityFeed />
      </div>
    </div>
  );
};

export default DashboardMainContent;