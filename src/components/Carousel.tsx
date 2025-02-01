import React, { useState, useEffect } from "react";

const images = [
    "https://robu.in/wp-content/uploads/2022/11/Lithium-Ion-Battery-1-2.jpg",
    "https://robu.in/wp-content/uploads/2022/11/Drone-kits.jpg",
    "https://robu.in/wp-content/uploads/2022/11/Sensors.jpg",
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center justify-center my-4">
            <img
                src={images[currentIndex]}
                alt="carousel"
                className="mx-4 w-full h-64 object-cover rounded-lg"
            />
        </div>
    );
}
