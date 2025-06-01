import React from 'react';
import './Tooltip.css';

const Tooltip = ({ text }) => {
  return (
    <div className="info-tooltip">
      <span className="info-icon">i</span>
      <span className="tooltip-text">{text}</span>
    </div>
  );
};

export default Tooltip;