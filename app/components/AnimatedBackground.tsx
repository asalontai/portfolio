'use client';

import { useEffect, useState } from 'react';

// Floating particles component
function FloatingParticles() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {[...Array(30)].map((_, i) => (
                <div
                    key={i}
                    className="absolute rounded-full bg-blue-400/20"
                    style={{
                        width: Math.random() * 3 + 1 + 'px',
                        height: Math.random() * 3 + 1 + 'px',
                        left: Math.random() * 100 + '%',
                        top: Math.random() * 100 + '%',
                        animation: `float-particle ${Math.random() * 15 + 15}s linear infinite`,
                        animationDelay: `-${Math.random() * 15}s`,
                    }}
                />
            ))}
        </div>
    );
}

// Animated grid background
function AnimatedGrid() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-10 z-0">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                    animation: 'grid-move 30s linear infinite',
                }}
            />
        </div>
    );
}

// Gradient orbs that follow scroll
function GradientOrbs() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[130px]" />
            <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px]" />
        </div>
    );
}

export default function AnimatedBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <>
            <GradientOrbs />
            <AnimatedGrid />
            <FloatingParticles />

            <style jsx global>{`
                @keyframes float-particle {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                        opacity: 0;
                    }
                    10% {
                        opacity: 0.8;
                    }
                    90% {
                        opacity: 0.8;
                    }
                    100% {
                        transform: translateY(-100vh) translateX(50px);
                        opacity: 0;
                    }
                }
                
                @keyframes grid-move {
                    0% {
                        transform: translate(0, 0);
                    }
                    100% {
                        transform: translate(60px, 60px);
                    }
                }
            `}</style>
        </>
    );
}
