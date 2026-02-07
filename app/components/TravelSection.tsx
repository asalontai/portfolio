'use client';

import { useState, useEffect } from 'react';

const travelPhotos = [
    { id: 1, location: 'Tokyo, Japan', emoji: '🗼', color: 'from-rose-500/30 to-orange-500/30' },
    { id: 2, location: 'Paris, France', emoji: '🗼', color: 'from-blue-500/30 to-purple-500/30' },
    { id: 3, location: 'New York, USA', emoji: '🗽', color: 'from-amber-500/30 to-red-500/30' },
    { id: 4, location: 'Bali, Indonesia', emoji: '🏝️', color: 'from-emerald-500/30 to-teal-500/30' },
    { id: 5, location: 'Iceland', emoji: '🌌', color: 'from-cyan-500/30 to-blue-500/30' },
    { id: 6, location: 'Santorini, Greece', emoji: '🏛️', color: 'from-blue-400/30 to-white/20' },
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
                    className="absolute inset-0 rounded-full border border-emerald-500/20"
                    style={{ animation: `spin ${s.outer}s linear infinite` }}
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50" />
                </div>
                <div
                    className="absolute inset-3 rounded-full border border-teal-500/15"
                    style={{ animation: `spin ${s.middle}s linear infinite reverse` }}
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-teal-400 rounded-full shadow-lg shadow-teal-400/50" />
                </div>
                <div
                    className="absolute inset-6 rounded-full border border-cyan-400/10"
                    style={{ animation: `spin ${s.inner}s linear infinite` }}
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-cyan-300 rounded-full" />
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

export default function TravelSection() {
    const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section id="travel" className="py-24 px-6 relative overflow-hidden">
            {/* Background gradient that blends with adjacent sections */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent" />

            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 -left-20 w-[450px] h-[450px] bg-emerald-500/8 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 -right-20 w-[400px] h-[400px] bg-teal-500/8 rounded-full blur-[120px]" />
            </div>

            {/* Spinning orbits - positioned at edges */}
            {mounted && (
                <>
                    <SpinningOrbit className="-top-10 -right-10 opacity-35" size="lg" speed="slow" />
                    <SpinningOrbit className="top-1/3 -left-16 opacity-30" size="xl" speed="slow" />
                    <SpinningOrbit className="-bottom-12 -left-8 opacity-25" size="md" speed="normal" />
                    <SpinningOrbit className="bottom-1/4 -right-12 opacity-25" size="sm" speed="fast" />
                </>
            )}

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="section-title">Travel <span className="gradient-text">Gallery</span></h2>
                    <p className="section-subtitle mx-auto">Exploring the world one destination at a time</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {travelPhotos.map((photo, index) => (
                        <div key={photo.id} className={`photo-item ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`} onClick={() => setSelectedPhoto(photo.id)}>
                            <div className={`w-full h-full bg-gradient-to-br ${photo.color} flex items-center justify-center`}>
                                <span className={`${index === 0 ? 'text-8xl' : 'text-5xl'}`}>{photo.emoji}</span>
                            </div>
                            <div className="photo-overlay"><span className="text-white font-medium text-sm">{photo.location}</span></div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-3 gap-6 mt-12">
                    <div className="glass-card p-6 text-center"><div className="text-3xl font-bold gradient-text mb-1">25+</div><div className="text-sm text-[#a1a1aa]">Countries</div></div>
                    <div className="glass-card p-6 text-center"><div className="text-3xl font-bold gradient-text mb-1">50+</div><div className="text-sm text-[#a1a1aa]">Cities</div></div>
                    <div className="glass-card p-6 text-center"><div className="text-3xl font-bold gradient-text mb-1">100+</div><div className="text-sm text-[#a1a1aa]">Adventures</div></div>
                </div>

                {selectedPhoto && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={() => setSelectedPhoto(null)}>
                        <div className="text-center">
                            <div className={`w-[500px] h-[350px] rounded-xl bg-gradient-to-br ${travelPhotos.find((p) => p.id === selectedPhoto)?.color} flex items-center justify-center`}>
                                <span className="text-9xl">{travelPhotos.find((p) => p.id === selectedPhoto)?.emoji}</span>
                            </div>
                            <p className="text-white mt-4 text-lg">{travelPhotos.find((p) => p.id === selectedPhoto)?.location}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
