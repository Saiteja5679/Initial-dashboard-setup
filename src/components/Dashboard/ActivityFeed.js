import React from 'react';

const ActivityFeed = () => {
  const containerStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '24px'
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '16px'
  };

  const titleStyle = {
    fontWeight: '500',
    color: '#1f2937'
  };

  const subtitleStyle = {
    fontSize: '12px',
    color: '#6b7280'
  };

  const chartContainerStyle = {
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'center',
    gap: '32px',
    height: '128px',
    padding: '0 16px'
  };

  const barContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const barStyle = (height, color) => ({
    width: '32px',
    height: `${height}px`,
    backgroundColor: color,
    borderRadius: '2px 2px 0 0'
  });

  const dayLabelStyle = {
    fontSize: '12px',
    color: '#6b7280',
    marginTop: '12px'
  };

  const chartData = [
    { day: 'Mon', height: 25, color: '#a7f3d0' },
    { day: 'Tue', height: 45, color: '#93c5fd' },
    { day: 'Wed', height: 30, color: '#a7f3d0' },
    { day: 'Thu', height: 65, color: '#3b82f6' },
    { day: 'Fri', height: 40, color: '#a7f3d0' },
    { day: 'Sat', height: 50, color: '#60a5fa' },
    { day: 'Sun', height: 35, color: '#a7f3d0' }
  ];

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h3 style={titleStyle}>Activity</h3>
        <div style={subtitleStyle}>3 appointment on this week</div>
      </div>
      
      <div style={chartContainerStyle}>
        {chartData.map(({ day, height, color }) => (
          <div key={day} style={barContainerStyle}>
            <div style={barStyle(height, color)}></div>
            <div style={dayLabelStyle}>{day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;