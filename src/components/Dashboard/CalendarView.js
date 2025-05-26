import React from 'react';
import { ChevronLeft, ChevronRight, Activity } from 'lucide-react';

const CalendarView = () => {
  const containerStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '24px',
    height: '100%'
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '24px'
  };

  const weekLabelStyle = {
    fontSize: '14px',
    color: '#6b7280'
  };

  const monthControlStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  };

  const monthTitleStyle = {
    fontWeight: '600',
    fontSize: '18px'
  };

  const navButtonsStyle = {
    display: 'flex',
    gap: '8px'
  };

  const calendarGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '4px',
    marginBottom: '16px'
  };

  const dayHeaderStyle = {
    fontSize: '12px',
    color: '#6b7280',
    textAlign: 'center',
    fontWeight: '500',
    padding: '8px'
  };

  const dateStyle = (isActive) => ({
    textAlign: 'center',
    padding: '8px'
  });

  const dateNumberStyle = (isActive) => ({
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '12px',
    color: isActive ? '#2563eb' : '#1f2937'
  });

  const appointmentStyle = (bgColor, textColor = '#000') => ({
    fontSize: '10px',
    backgroundColor: bgColor,
    color: textColor,
    borderRadius: '4px',
    padding: '2px 8px',
    marginBottom: '2px'
  });

  const bottomCardsStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
    marginTop: '24px'
  };

  const cardStyle = (bgColor, textColor = '#000', isBlue = false) => ({
    backgroundColor: bgColor,
    color: textColor,
    padding: '16px',
    borderRadius: '8px'
  });

  const cardHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '8px'
  };

  const cardTitleStyle = {
    fontSize: '14px',
    fontWeight: '500'
  };

  const cardTimeStyle = (isBlue) => ({
    fontSize: '12px',
    opacity: isBlue ? '0.9' : '1'
  });

  const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const dates = [25, 26, 27, 28, 29, 30, 31];

  const getAppointments = (date) => {
    const appointments = {
      25: [{ time: '10:00', bg: '#f3f4f6' }, { time: '11:00', bg: '#f3f4f6' }],
      26: [{ time: '09:00', bg: '#3b82f6', color: 'white' }, { time: '10:00', bg: '#f3f4f6' }],
      27: [{ time: '12:00', bg: '#f3f4f6' }, { time: '13:00', bg: '#f3f4f6' }],
      28: [{ time: '10:00', bg: '#f3f4f6' }, { time: '11:00', bg: '#dbeafe' }],
      29: [{ time: '14:00', bg: '#f3f4f6' }, { time: '15:00', bg: '#f3f4f6' }],
      30: [{ time: '15:00', bg: '#3b82f6', color: 'white' }, { time: '14:00', bg: '#f3f4f6' }],
      31: [{ time: '09:00', bg: '#f3f4f6' }, { time: '10:00', bg: '#f3f4f6' }]
    };
    return appointments[date] || [];
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <div style={weekLabelStyle}>This Week</div>
        <div style={monthControlStyle}>
          <div style={monthTitleStyle}>May 2025</div>
          <div style={navButtonsStyle}>
            <ChevronLeft style={{ width: '16px', height: '16px', color: '#9ca3af', cursor: 'pointer' }} />
            <ChevronRight style={{ width: '16px', height: '16px', color: '#9ca3af', cursor: 'pointer' }} />
          </div>
        </div>
      </div>
      
      <div style={calendarGridStyle}>
        {days.map(day => (
          <div key={day} style={dayHeaderStyle}>{day}</div>
        ))}
      </div>
      
      <div style={calendarGridStyle}>
        {dates.map((date, index) => (
          <div key={index} style={dateStyle(date === 29)}>
            <div style={dateNumberStyle(date === 29)}>{date}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {getAppointments(date).map((apt, i) => (
                <div key={i} style={appointmentStyle(apt.bg, apt.color)}>
                  {apt.time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div style={bottomCardsStyle}>
        <div style={cardStyle('#2563eb', 'white', true)}>
          <div style={cardHeaderStyle}>
            <div>🦷</div>
            <span style={cardTitleStyle}>Dentist</span>
          </div>
          <div style={cardTimeStyle(true)}>09:00-11:00</div>
          <div style={cardTimeStyle(true)}>Dr Teja</div>
        </div>
        
        <div style={cardStyle('#f3f4f6', '#1f2937')}>
          <div style={cardHeaderStyle}>
            <Activity style={{ width: '16px', height: '16px', color: '#f97316' }} />
            <span style={cardTitleStyle}>Physiotherapy Appointment</span>
          </div>
          <div style={cardTimeStyle(false)}>11:00-12:00</div>
          <div style={cardTimeStyle(false)}>Dr Krishna</div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;