import { useRef } from 'react';

function RenderCounter() {
  const renderCount = useRef(0);
  renderCount.current++;
  
  return <p>This component has rendered {renderCount.current} times</p>;
}

export default RenderCounter;