"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

import localImage0 from "@/img/surimukurabu.png";
import localImage1 from "@/img/theme.png"
import localImage2 from "@/img/sikai2023.png"
 
export default function Slideshow() {
    const images: Array<StaticImageData> = [localImage0, localImage1, localImage2];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000)

        return () => clearInterval(timer);
    });

    return (
        <div className="bg-orange-400 h-60 flex items-center justify-center">
            {images.map((image: StaticImageData, index: number) => (
                <div
                    key={index}
                    className={`absolute inset-50 transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
                >
                    <Image
                        src={image}
                        alt={`Slide-${index}`}
                        width={400}
                        height={300}
                        objectFit="cover"
                        className="border-4 border-black"
                    />
                </div>
            ))}
        </div>
    );
}