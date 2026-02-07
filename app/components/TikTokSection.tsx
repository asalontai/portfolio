'use client';

import { useEffect, useState } from 'react';

const tiktokVideos = [
    { id: '7598702266627018039' },
    { id: '7598699210749365517' },
    { id: '7598241918753017101' },
];

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

export default function TikTokSection() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section id="tiktok" className="py-24 px-6 relative overflow-hidden">
            {/* Background gradient that blends with adjacent sections */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />

            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 -left-20 w-[450px] h-[450px] bg-blue-500/8 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 -right-20 w-[400px] h-[400px] bg-purple-500/8 rounded-full blur-[120px]" />
            </div>

            {/* Spinning orbits - positioned at edges */}
            {mounted && (
                <>
                    <SpinningOrbit className="-top-10 -right-10 opacity-35" size="lg" speed="slow" />
                    <SpinningOrbit className="top-1/3 -left-16 opacity-25" size="xl" speed="slow" />
                    <SpinningOrbit className="-bottom-12 -right-12 opacity-30" size="md" speed="normal" />
                    <SpinningOrbit className="bottom-1/3 -left-10 opacity-25" size="sm" speed="fast" />
                </>
            )}

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="section-title">
                        Travel <span className="gradient-text">TikTok</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Sharing adventures and exploring the world one destination at a time
                    </p>
                </div>

                {/* Stats Display */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    <div className="glass-card p-6 text-center border-blue-500/10 hover:border-blue-500/30 transition-all hover:scale-105">
                        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                            52.3K
                        </div>
                        <div className="text-sm text-[#a1a1aa] font-medium">Followers</div>
                    </div>
                    <div className="glass-card p-6 text-center border-blue-500/10 hover:border-blue-500/30 transition-all hover:scale-105">
                        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">
                            1.2M
                        </div>
                        <div className="text-sm text-[#a1a1aa] font-medium">Total Likes</div>
                    </div>
                    <div className="glass-card p-6 text-center border-blue-500/10 hover:border-blue-500/30 transition-all hover:scale-105">
                        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                            8.5M
                        </div>
                        <div className="text-sm text-[#a1a1aa] font-medium">Total Views</div>
                    </div>
                    <div className="glass-card p-6 text-center border-blue-500/10 hover:border-blue-500/30 transition-all hover:scale-105">
                        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                            156
                        </div>
                        <div className="text-sm text-[#a1a1aa] font-medium">Videos</div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {tiktokVideos.map((video, index) => (
                        <div
                            key={video.id}
                            className="group glass-card overflow-hidden rounded-2xl border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:scale-[1.02]"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />
                                <iframe
                                    src={`https://www.tiktok.com/player/v1/${video.id}?autoplay=0&loop=1`}
                                    width="325"
                                    height="580"
                                    allow="fullscreen"
                                    style={{ border: 'none' }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Follow button with account name at bottom */}
                <div className="text-center mt-12">
                    <a
                        href="https://tiktok.com/@alex.salontai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105"
                    >
                        <svg className="relative z-10 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                        </svg>
                        <span className="relative z-10">Follow @alex.salontai</span>
                        <svg className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </a>
                </div>
            </div>
        </section>
    );
}
