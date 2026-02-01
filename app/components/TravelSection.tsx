'use client';

import { useState } from 'react';

const travelPhotos = [
    { id: 1, location: 'Tokyo, Japan', emoji: '🗼', color: 'from-rose-500/30 to-orange-500/30' },
    { id: 2, location: 'Paris, France', emoji: '🗼', color: 'from-blue-500/30 to-purple-500/30' },
    { id: 3, location: 'New York, USA', emoji: '🗽', color: 'from-amber-500/30 to-red-500/30' },
    { id: 4, location: 'Bali, Indonesia', emoji: '🏝️', color: 'from-emerald-500/30 to-teal-500/30' },
    { id: 5, location: 'Iceland', emoji: '🌌', color: 'from-cyan-500/30 to-blue-500/30' },
    { id: 6, location: 'Santorini, Greece', emoji: '🏛️', color: 'from-blue-400/30 to-white/20' },
];

export default function TravelSection() {
    const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

    return (
        <section id="travel" className="py-24 px-6 relative">
            <div className="absolute top-1/4 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />

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
