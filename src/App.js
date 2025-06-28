import React from 'react';
import Counter from './Counter';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div>
      <h2>My Counter App</h2>
      <Counter initialValue={5} />

      <h2>My Toggle Button</h2>
      <ToggleButton label="Power Switch" />
    </div>
  );
}

export default App;
