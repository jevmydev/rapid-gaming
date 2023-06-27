import { useState, useEffect } from "react";

export function MouseFollower() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMove = ({ clientX, clientY }) => setPosition({ x: clientX, y: clientY });
        window.addEventListener("pointermove", handleMove);
    }, []);

    return (
        <>
            <div className="mouse" style={{ transform: `translate(${position.x}px, ${position.y}px)` }} />
        </>
    );
}

export default MouseFollower;
