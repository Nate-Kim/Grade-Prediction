import React from 'react';
import Tooltip from '../components/Tooltip';

export default function Dropdown({ label, info, selected, onChange, options }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={{ marginRight: '1rem' }}>{label}
        <Tooltip tooltipText={info} />
        <select value={selected} onChange={(e) => onChange(e.target.value)}>
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