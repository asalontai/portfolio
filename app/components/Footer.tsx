'use client';

import { useEffect, useState } from 'react';

// Spinning orbit component - positioned at edges
function SpinningOrbit({ className, size = 'md', speed = 'normal' }: { className?: string; size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'; speed?: 'slow' | 'normal' | 'fast' }) {
    const sizes = {
        xs: 'w-16 h-16',
        sm: 'w-24 h-24',
        md: 'w-32 h-32',
        lg: 'w-48 h-48',
        xl: 'w-64 h-64',
    };

    const speeds = {
        slow: { outer: 25, middle: 18, inner: 12 },
        normal: { outer: 20, middle: 12, inner: 8 },
        fast: { outer: 15, middle: 10, inner: 6 },
    };

    const s = speeds[speed];

    return (
        <div className={`absolute pointer-events-none ${className}`}>
            <div className={`relative ${sizes[size]}`}>
                <div
                    className="absolute inset-0 rounded-full border border-blue-500/20"
                    style={{ animation: `spin ${s.outer}s linear infinite` }}
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" />
                </div>
                <div
                    className="absolute inset-3 rounded-full border border-cyan-500/15"
                    style={{ animation: `spin ${s.middle}s linear infinite reverse` }}
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50" />
                </div>
                <div
                    className="absolute inset-6 rounded-full border border-blue-400/10"
                    style={{ animation: `spin ${s.inner}s linear infinite` }}
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-blue-300 rounded-full" />
                </div>
            </div>
            <style jsx>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const socialLinks = [
        {
            name: 'GitHub',
            href: 'https://github.com/asalontai',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            ),
        },
        {
            name: 'LinkedIn',
            href: 'https://linkedin.com/in/alexsalontai',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            ),
        },
        {
            name: 'TikTok',
            href: 'https://tiktok.com/@alex.salontai',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
            ),
        },
        {
            name: 'Email',
            href: 'mailto:salontai.professional@gmail.com',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            ),
        },
    ];

    return (
        <footer className="relative py-16 px-6 border-t border-blue-500/10 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent" />

            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            {/* Spinning orbits - positioned at edges */}
            {mounted && (
                <>
                    <SpinningOrbit className="-top-8 -left-8 opacity-25" size="md" speed="slow" />
                    <SpinningOrbit className="top-0 -right-12 opacity-20" size="lg" speed="slow" />
                </>
            )}

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo & tagline */}
                    <div className="text-center md:text-left">
                        <a href="#" className="group inline-flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                                <span className="text-white font-bold text-lg">A</span>
                            </div>
                            <span className="text-xl font-bold gradient-text">Alex Salontai</span>
                        </a>
                        <p className="text-sm text-blue-300/50 mt-3">Software Engineer • Atlanta, GA</p>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-3">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-3 rounded-xl bg-white/5 border border-white/10 text-blue-300/50 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                                aria-label={link.name}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="my-10 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

                {/* Bottom section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-300/40">
                    <p>© {currentYear} Alex Salontai. All rights reserved.</p>
                    <p className="flex items-center gap-2">
                        Built with
                        <span className="text-blue-400">Next.js</span>
                        <span>&</span>
                        <span className="text-cyan-400">Tailwind CSS</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
