import React from 'react';
import './Tooltip.css';

const Tooltip = ({ tooltipText }) => {
  return (
    <div className="info-tooltip">
      <span className="info-icon">i</span>
      <span className="tooltip-text">{tooltipText}</span>
    </div>
  );
};

export default Tooltip;