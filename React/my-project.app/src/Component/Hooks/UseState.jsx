import { useState, useEffect } from 'react';
import './UseState.css';

function UseState() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  //timer
  const [time, setTime] = useState(0);

  
  // change text color using state
  const [color, setColor] = useState('red');

  const mouseover = () => {
    setColor(color === 'blue' ? 'red' : 'blue');
  };

  return (
        <>
      <h2>Hooks</h2>
      <p>
        React Hooks are special JavaScript functions introduced in version 16.8
        that allow you to use state and other features (like lifecycle methods
        and context) inside functional components without writing a class.
      </p>
      <h3>UseState</h3>
      <p style={{ color: color }} onMouseOver={mouseover}>
        Hover to change color! (useState demo)
      </p>
      <h2>Counter: {count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>

    </>
  );
}


export default UseState;

