
import React, { useState } from 'react';

export function Counter () {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={increaseCount}>Aumentar</button>
      <button onClick={decreaseCount}>Disminuir</button>
      <button onClick={resetCount}>Resetear</button>
    </div>
  );
};
