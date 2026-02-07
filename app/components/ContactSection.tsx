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

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        window.location.href = `mailto:salontai.professional@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
    };

    return (
        <section id="contact" className="py-24 px-6 relative overflow-hidden">
            {/* Background gradient that blends with adjacent sections */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/15 to-transparent" />

            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-[180px]" />
                <div className="absolute top-0 -right-20 w-[350px] h-[350px] bg-cyan-500/8 rounded-full blur-[120px]" />
            </div>

            {/* Spinning orbits - positioned at edges */}
            {mounted && (
                <>
                    <SpinningOrbit className="-top-10 -left-10 opacity-30" size="lg" speed="slow" />
                    <SpinningOrbit className="top-1/3 -right-16 opacity-35" size="xl" speed="slow" />
                    <SpinningOrbit className="-bottom-12 -right-10 opacity-25" size="md" speed="normal" />
                    <SpinningOrbit className="bottom-1/4 -left-12 opacity-20" size="sm" speed="fast" />
                </>
            )}

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="section-title">Get in <span className="gradient-text">Touch</span></h2>
                    <p className="section-subtitle mx-auto">Have a project or opportunity in mind? Let&apos;s connect!</p>
                </div>

                <div className="glass-card p-8 md:p-12 border-blue-500/10 hover:border-blue-500/20 transition-all duration-300">
                    {/* Contact card */}
                    <div className="mb-10">
                        <a href="mailto:salontai.professional@gmail.com" className="group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-blue-500/5 to-cyan-500/5 hover:from-blue-500/10 hover:to-cyan-500/10 border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-sm text-blue-300/60 mb-1">Email</div>
                                <div className="text-white font-medium group-hover:text-blue-100 transition-colors">salontai.professional@gmail.com</div>
                            </div>
                            <svg className="w-5 h-5 text-blue-400/50 ml-auto group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-4 mb-10">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
                        <span className="text-sm text-blue-300/50">or send a message</span>
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative">
                                <label htmlFor="name" className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'name' || formData.name ? '-top-2 text-xs bg-[#0a0a0f] px-2 text-blue-400' : 'top-4 text-blue-300/60'}`}>Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    onFocus={() => setFocusedField('name')}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full px-4 py-4 bg-blue-500/5 border-2 border-blue-500/20 rounded-xl focus:outline-none focus:border-blue-500 transition-all text-white"
                                    required
                                />
                            </div>
                            <div className="relative">
                                <label htmlFor="email" className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'email' || formData.email ? '-top-2 text-xs bg-[#0a0a0f] px-2 text-blue-400' : 'top-4 text-blue-300/60'}`}>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full px-4 py-4 bg-blue-500/5 border-2 border-blue-500/20 rounded-xl focus:outline-none focus:border-blue-500 transition-all text-white"
                                    required
                                />
                            </div>
                        </div>
                        <div className="relative">
                            <label htmlFor="message" className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'message' || formData.message ? '-top-2 text-xs bg-[#0a0a0f] px-2 text-blue-400' : 'top-4 text-blue-300/60'}`}>Message</label>
                            <textarea
                                id="message"
                                rows={5}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                onFocus={() => setFocusedField('message')}
                                onBlur={() => setFocusedField(null)}
                                className="w-full px-4 py-4 bg-blue-500/5 border-2 border-blue-500/20 rounded-xl focus:outline-none focus:border-blue-500 transition-all text-white resize-none"
                                required
                            />
                        </div>
                        <button type="submit" className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 w-full md:w-auto justify-center">
                            <span className="relative z-10">Send Message</span>
                            <svg className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
