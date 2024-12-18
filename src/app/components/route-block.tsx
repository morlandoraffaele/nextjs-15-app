"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function RouteBlock() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        const imageContainer = document.querySelector('.image-container');
        if (imageContainer) {
            observer.observe(imageContainer);
        }

        return () => {
            if (imageContainer) {
                observer.unobserve(imageContainer);
            }
        };
    }, []);

    const handleAudio = () => {
        const audio = document.getElementById('sound') as HTMLAudioElement;
        if (isPlaying) {
            audio.pause();
            audio.muted = true;
        } else {
            audio.play();
            audio.muted = false;
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="h-screen w-full flex flex-col relative">
            <div className="flex items-center justify-end p-4 gap-2">
                <audio
                    id="sound"
                    loop
                    muted
                    src="https://audio-previews.elements.envatousercontent.com/files/295639254/preview.mp3?response-content-disposition=attachment%3B+filename%3D%22XFSJGJH-waterfall.mp3%22"
                ></audio>
                <button
                    onClick={handleAudio}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black/10 hover:bg-black/20"
                >
                    {isPlaying ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 1.414L10.414 12l3.293 3.293a1 1 0 01-1.414 1.414L9 13.414l-3.293 3.293a1 1 0 01-1.414-1.414L7.586 12 4.293 8.707a1 1 0 011.414-1.414L9 10.586l3.293-3.293z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                        </svg>
                    )}
                    <span>{!isPlaying ? 'Ascolta il suono' : 'Disattiva il suono'}</span>
                </button>
            </div>
            <div className="absolute top-0 left-0 right-0 w-screen h-full -z-10">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="https://assets.mixkit.co/videos/2213/2213-720.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="flex-1 flex">
                <div className="w-1/2 relative flex items-center justify-center p-8">
                    <div className={`image-container w-full h-[400px] rounded-3xl overflow-hidden transition-all duration-1000 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                        <img 
                            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e" 
                            alt="Forest landscape" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className={`w-1/2 flex flex-col items-center justify-center p-8 gap-6 transition-all duration-1000 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                    <h1 className="text-4xl font-bold">Nature is our home</h1>
                    <p className="text-lg text-gray-300">Discover the beauty of nature and the importance of protecting it</p>
                    <Link
                        href="/nature"
                        className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
}
