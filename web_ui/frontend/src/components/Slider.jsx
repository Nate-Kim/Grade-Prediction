import Tooltip from '../components/Tooltip';
import './Slider.css';

function Slider({ label, info, value, setValue, min = 0, max = 100 }) {
  const handleSliderChange = (e) => {
    setValue(Number(e.target.value));
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const num = Number(inputValue);

    if (inputValue === '') {
      setValue('');
    } else if (!isNaN(num)) {
      const clamped = Math.min(Math.max(num, min), max);
      setValue(clamped);
    }
  };

  const handleInputBlur = () => {
    if (value === '') {
      setValue(min);
    }
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={{ marginRight: '1rem'}}>{label}
      <Tooltip tooltipText={info} />
        <input
          type="range"
          min={min}
          max={max}
          value={value === '' ? min : value}
          onChange={handleSliderChange}
          className="custom-slider"
          style={{
            background: `linear-gradient(to right, #004D99 0%, #007BFF ${(value - min) / (max - min) * 100}%, #ccc ${(value - min) / (max - min) * 100}%, #ccc 100%)`
          }}
        />
        <input
          type="number"
          min={min}
          max={max}
          value={value}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          style={{ width: '60px', marginLeft: '10px' }}
        />
      </label>
    </div>
  );
}

export default Slider;
