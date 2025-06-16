import { useState } from "react";
import { IoIosFootball } from "react-icons/io";

const MovetheBall = () => {
    const [position, setPosition] = useState({x: 0, y: 0})

  const handleTheBall = (e) => {
    const groundRect = e.currentTarget.getBoundingClientRect()    
    const x = e.clientX - groundRect.left - 20
    const y = e.clientY - groundRect.top - 20
    console.log("Relative to X",e.clientX, e.clientY, groundRect, x, y);
    setPosition({x, y})
  }

  return (
    <div className="ground" onClick={handleTheBall}>
      <div className="football" id="football" 
        style={{position: 'relative', left: `${position.x}px`, top: `${position.y}px`, transition: 'left 0.3s ease, top 0.3s ease'}}
      >
        <IoIosFootball style={{width: '40px', height: '40px'}}/>
      </div>
    </div>
  );
};
export default MovetheBall;
