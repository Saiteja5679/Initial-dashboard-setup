import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import DashboardMainContent from './components/Dashboard/DashboardMainContent';

const App = () => {
  const appStyle = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f9fafb',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif'
  };

  const mainContentStyle = {
    display: 'flex',
    flex: 1,
    overflow: 'hidden'
  };

  return (
    <div style={appStyle}>
      <Header />
      <div style={mainContentStyle}>
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default App;