import React from 'react';
import './styles.css';

const AppLoading: React.FC = () => {
  return (
    <div className="container">
      <div className="spinner">
        <div className="cube1"></div>
        <div className="cube2"></div>
      </div>
    </div>
  );
};

export default AppLoading;
