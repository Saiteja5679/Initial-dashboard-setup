import React from 'react';
import { Calendar, BarChart3, MessageCircle, Settings, HelpCircle, Activity } from 'lucide-react';

const Sidebar = () => {
  const sidebarStyle = {
    backgroundColor: 'white',
    width: '256px',
    height: '100%',
    borderRight: '1px solid #e5e7eb',
    padding: '24px'
  };

  const sectionTitleStyle = {
    color: '#9ca3af',
    fontSize: '12px',
    textTransform: 'uppercase',
    marginBottom: '16px',
    fontWeight: '500'
  };

  const navStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  };

  const navItemStyle = (active) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '8px 12px',
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundColor: active ? '#eff6ff' : 'transparent',
    color: active ? '#2563eb' : '#6b7280',
    fontSize: '14px',
    fontWeight: '500'
  });

  const menuItems = [
    { icon: BarChart3, label: 'Dashboard', active: true },
    { icon: Activity, label: 'History' },
    { icon: Calendar, label: 'Calendar' },
    { icon: Calendar, label: 'Appointments' },
    { icon: BarChart3, label: 'Statistics' },
    { icon: Activity, label: 'Tests' },
    { icon: MessageCircle, label: 'Chat' },
    { icon: HelpCircle, label: 'Support' },
    { icon: Settings, label: 'Setting' }
  ];

  return (
    <div style={sidebarStyle}>
      <div style={sectionTitleStyle}>General</div>
      <nav style={navStyle}>
        {menuItems.map((item, index) => (
          <div key={index} style={navItemStyle(item.active)}>
            <item.icon style={{ width: '20px', height: '20px' }} />
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;