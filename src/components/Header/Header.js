import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';

const Header = () => {
  const headerStyle = {
    backgroundColor: 'white',
    borderBottom: '1px solid #e5e7eb',
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  const leftSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '24px'
  };

  const logoStyle = {
    fontSize: '20px',
    fontWeight: 'bold'
  };

  const searchContainerStyle = {
    position: 'relative'
  };

  const searchIconStyle = {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#9ca3af',
    width: '16px',
    height: '16px'
  };

  const searchInputStyle = {
    paddingLeft: '40px',
    paddingRight: '16px',
    paddingTop: '8px',
    paddingBottom: '8px',
    backgroundColor: '#f9fafb',
    borderRadius: '8px',
    width: '256px',
    fontSize: '14px',
    border: 'none',
    outline: 'none'
  };

  const rightSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  };

  const avatarStyle = {
    width: '32px',
    height: '32px',
    backgroundColor: '#22d3ee',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: '500',
    fontSize: '14px'
  };

  const addButtonStyle = {
    backgroundColor: '#22d3ee',
    color: 'white',
    padding: '8px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer'
  };

  return (
    <div style={headerStyle}>
      <div style={leftSectionStyle}>
        <div style={logoStyle}>
          <span style={{ color: '#22d3ee' }}>Health</span>
          <span style={{ color: '#1f2937' }}>care.</span>
        </div>
        <div style={searchContainerStyle}>
          <Search style={searchIconStyle} />
          <input 
            type="text" 
            placeholder="Search" 
            style={searchInputStyle}
          />
        </div>
      </div>
      <div style={rightSectionStyle}>
        <Bell style={{ width: '20px', height: '20px', color: '#6b7280' }} />
        <div style={avatarStyle}>S</div>
        <button style={addButtonStyle}>
          <Plus style={{ width: '16px', height: '16px' }} />
        </button>
      </div>
    </div>
  );
};

export default Header;