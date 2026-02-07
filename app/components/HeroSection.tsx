'use client';

import { useEffect, useState } from 'react';

// Floating particles component
function FloatingParticles() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(50)].map((_, i) => (
                <div
                    key={i}
                    className="absolute rounded-full bg-blue-400/30"
                    style={{
                        width: Math.random() * 4 + 1 + 'px',
                        height: Math.random() * 4 + 1 + 'px',
                        left: Math.random() * 100 + '%',
                        top: Math.random() * 100 + '%',
                        animation: `float-particle ${Math.random() * 10 + 10}s linear infinite`,
                        animationDelay: `-${Math.random() * 10}s`,
                    }}
                />
            ))}
        </div>
    );
}

// Animated grid background
function AnimatedGrid() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                    animation: 'grid-move 20s linear infinite',
                }}
            />
        </div>
    );
}

// Orbiting rings around the center
function OrbitingRings() {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            {/* Inner ring */}
            <div
                className="absolute w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/20"
                style={{ animation: 'spin-slow 20s linear infinite' }}
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" />
            </div>
            {/* Middle ring */}
            <div
                className="absolute w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/15"
                style={{ animation: 'spin-reverse 30s linear infinite' }}
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" />
            </div>
            {/* Outer ring */}
            <div
                className="absolute w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10"
                style={{ animation: 'spin-slow 40s linear infinite' }}
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-300 rounded-full shadow-lg shadow-blue-300/50" />
                <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-300 rounded-full shadow-lg shadow-cyan-300/50" />
            </div>
        </div>
    );
}

export default function HeroSection() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Large gradient orbs */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px]" />

                {/* Radial gradient spotlight */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                    }}
                />
            </div>

            {/* Grid background */}
            {mounted && <AnimatedGrid />}

            {/* Floating particles */}
            {mounted && <FloatingParticles />}

            {/* Orbiting rings */}
            {mounted && <OrbitingRings />}

            {/* Main content */}
            <div className="max-w-5xl mx-auto text-center relative z-10">

                {/* Main heading with enhanced gradient */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 fade-in-up stagger-1">
                    <span className="text-white">Hi, I&apos;m</span>{' '}
                    <span className="relative inline-block">
                        <span className="hero-gradient-text">Alex Salontai</span>
                        {/* Glow effect behind name */}
                        <span
                            className="absolute inset-0 blur-2xl opacity-50 hero-gradient-text"
                            aria-hidden="true"
                        >
                            Alex Salontai
                        </span>
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-[#c4c4cc] mx-auto mb-10 py-4 fade-in-up stagger-2 font-medium whitespace-nowrap">
                    Software Engineer • Georgia Tech '26 • Content Creator
                </p>

                {/* Enhanced CTA buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up stagger-3">
                    <a href="#projects" className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105">
                        <span className="relative z-10">View My Work</span>
                        <svg className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        {/* Button shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </a>
                    <a href="#contact" className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:scale-105">
                        <span>Get in Touch</span>
                        <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </a>
                </div>

                {/* Social links with enhanced hover */}
                <div className="flex items-center justify-center gap-5 mt-12 fade-in-up stagger-4">
                    <a href="https://github.com/asalontai" target="_blank" rel="noopener noreferrer" className="group relative p-3 rounded-full bg-white/5 border border-white/10 text-blue-300/70 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20" aria-label="GitHub">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    </a>
                    <a href="https://linkedin.com/in/alexsalontai" target="_blank" rel="noopener noreferrer" className="group relative p-3 rounded-full bg-white/5 border border-white/10 text-blue-300/70 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20" aria-label="LinkedIn">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    </a>
                    <a href="https://tiktok.com/@alex.salontai" target="_blank" rel="noopener noreferrer" className="group relative p-3 rounded-full bg-white/5 border border-white/10 text-blue-300/70 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20" aria-label="TikTok">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
                    </a>
                    <a href="mailto:salontai.professional@gmail.com" className="group relative p-3 rounded-full bg-white/5 border border-white/10 text-blue-300/70 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20" aria-label="Email">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </a>
                </div>


            </div>

            {/* Enhanced scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 fade-in-up stagger-5 z-10">
                <div className="flex flex-col items-center gap-2 text-blue-300/50 group cursor-pointer hover:text-blue-300 transition-colors">
                    <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
                    <div className="w-6 h-10 rounded-full border-2 border-blue-500/30 flex justify-center pt-2 group-hover:border-blue-400/50 transition-colors">
                        <div className="w-1.5 h-3 bg-blue-400 rounded-full animate-bounce" />
                    </div>
                </div>
            </div>

            {/* Inline styles for animations */}
            <style jsx>{`
                @keyframes float-particle {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-100vh) translateX(20px);
                        opacity: 0;
                    }
                }
                
                @keyframes grid-move {
                    0% {
                        transform: translateY(0);
                    }
                    100% {
                        transform: translateY(50px);
                    }
                }
                
                @keyframes spin-slow {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }
                
                @keyframes spin-reverse {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(-360deg); }
                }
                
                .hero-gradient-text {
                    background: linear-gradient(135deg, #60a5fa 0%, #38bdf8 25%, #22d3ee 50%, #38bdf8 75%, #60a5fa 100%);
                    background-size: 200% 200%;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    animation: gradient-shift 4s ease infinite;
                }
                
                @keyframes gradient-shift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                .animate-pulse-slow {
                    animation: pulse-slow 4s ease-in-out infinite;
                }
                
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.5; transform: scale(1); }
                    50% { opacity: 0.8; transform: scale(1.05); }
                }
            `}</style>
        </section>
    );
}
