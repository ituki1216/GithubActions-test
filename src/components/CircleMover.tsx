import React, { useState } from 'react';

const CircleMover: React.FC = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  const handleMouseMove = (event: MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}
    >
      <div
        style={{
          position: 'absolute',
          top: position.y - 25, // 半径を考慮
          left: position.x - 25, // 半径を考慮
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: 'blue',
        }}
      />
    </div>
  );
};

export default CircleMover;
