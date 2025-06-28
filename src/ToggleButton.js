import React, { useState } from 'react';

function ToggleButton({ label }) {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn(!isOn);

  return (
    <div>
      <button onClick={toggle} style={{ color: isOn ? 'green' : 'red' }}>
        {isOn ? 'ON' : 'OFF'}
      </button>
      {label && <span style={{ marginLeft: '10px' }}>{label}</span>}
    </div>
  );
}

export default ToggleButton;
