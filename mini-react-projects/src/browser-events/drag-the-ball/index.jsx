import { useEffect, useState } from "react";
import { IoIosFootball } from "react-icons/io";

const DragtheBall = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
     const ballRect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - ballRect.left;
    const offsetY = e.clientY - ballRect.top;
    setDragOffset({ x: offsetX, y: offsetY });
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const ground = document.querySelector('.ground');
    const groundRect = ground.getBoundingClientRect();
    
    // Calculate new position accounting for the offset
    let x = e.clientX - groundRect.left - dragOffset.x;
    let y = e.clientY - groundRect.top - dragOffset.y;
    
    // Constrain to ground boundaries
    x = Math.max(0, Math.min(x, groundRect.width - 40)); // 40 is ball width
    y = Math.max(0, Math.min(y, groundRect.height - 40)); // 40 is ball height
    
    setPosition({ x, y });
  };

   const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  return (
    <div className="ground">
      <div
        className="football"
        id="football"
        style={{
          position: "relative",
          left: `${position.x}px`,
          top: `${position.y}px`,
          transition: isDragging ? "none" : "left 0.3s ease, top 0.3s ease",
        }}
        onMouseDown={handleMouseDown}
      >
        <IoIosFootball
          style={{ width: "40px", height: "40px", cursor: "grab" }}
        />
      </div>
    </div>
  );
};
export default DragtheBall;
