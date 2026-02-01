'use client';

const tiktokVideos = [
    { id: '7598702266627018039' },
    { id: '7598699210749365517' },
    { id: '7598241918753017101' },
];

export default function TikTokSection() {
    return (
        <section id="tiktok" className="py-24 px-6 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                        </svg>
                        <span className="text-sm text-blue-300">@alex.salontai</span>
                    </div>
                    <h2 className="section-title">
                        My <span className="gradient-text">TikTok</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Creating content about tech, life, and everything in between
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {tiktokVideos.map((video) => (
                        <div key={video.id} className="glass-card overflow-hidden rounded-2xl border-blue-500/10">
                            <iframe
                                src={`https://www.tiktok.com/player/v1/${video.id}?autoplay=0&loop=1`}
                                width="325"
                                height="580"
                                allow="fullscreen"
                                style={{ border: 'none' }}
                            />
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://tiktok.com/@alex.salontai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                        </svg>
                        Follow on TikTok
                    </a>
                </div>
            </div>
        </section>
    );
}
