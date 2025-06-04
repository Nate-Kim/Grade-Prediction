import React from 'react';
import Tooltip from '../components/Tooltip';
import './Dropdown.css';

export default function Dropdown({ label, info, selected, onChange, options }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={{ marginRight: '1rem' }}>{label}
        <Tooltip text={info} />
        <select value={selected} className="styled-select" onChange={(e) => onChange(e.target.value)}>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}