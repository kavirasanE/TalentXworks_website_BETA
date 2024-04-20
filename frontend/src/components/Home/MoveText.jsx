import React, { useState, useEffect } from 'react';
const MoveText = () => {
    const [scrollX, setScrollX] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollX(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <div className="relative">
    <div
        className="absolute  left-0 w-full h-full flex justify-center items-center"
        style={{ transform: `translateX(-${scrollX /8 }px)` }}
    >
        <p className="text-9xl font-semibold uppercase text-nowrap">GROW WITH US</p>
    </div>
</div>
  )
}

export default MoveText