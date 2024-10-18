import { keyframes } from '@emotion/react';
import React, { useState, useEffect } from 'react';

const rotateSteps = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const FollowCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.pageX, y: event.pageY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 1000,
        animation: `${rotateSteps} 2s linear infinite`,
      }}
    >
        <svg width="15" height="15" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.02754 10.098L1.10309 9.70729L9.00371 1.62325L10.9282 2.01399L3.02754 10.098Z" fill="#EF467A"/>
            <path d="M1.31898 6.94648L0.2905 5.30939L10.874 5.17969L11.9024 6.81678L1.31898 6.94648Z" fill="#EED116"/>
            <path d="M1.95045 3.35483L2.3806 1.46978L9.9586 8.86436L9.52845 10.7494L1.95045 3.35483Z" fill="#4FC5D3"/>
            <path d="M7 10.2053L5.14682 11L5 0.794738L6.85318 2.32322e-07L7 10.2053Z" fill="#F47D20"/>
        </svg>
    </div>
  );
};

export default FollowCursor;
