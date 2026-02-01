'use client';
import { useState } from 'react';

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        window.location.href = `mailto:afsalontai@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
    };

    return (
        <section id="contact" className="py-24 px-6 relative">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="section-title">Get in <span className="gradient-text">Touch</span></h2>
                    <p className="section-subtitle mx-auto">Have a project or opportunity in mind? Let&apos;s connect!</p>
                </div>

                <div className="glass-card p-8 md:p-12 border-blue-500/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <a href="mailto:afsalontai@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-blue-500/5 hover:bg-blue-500/10 border border-blue-500/10 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-sm text-blue-300/60">Email</div>
                                <div className="text-white font-medium">afsalontai@gmail.com</div>
                            </div>
                        </a>
                        <a href="tel:+14049175980" className="flex items-center gap-4 p-4 rounded-xl bg-blue-500/5 hover:bg-blue-500/10 border border-blue-500/10 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-sm text-blue-300/60">Phone</div>
                                <div className="text-white font-medium">(404) 917-5980</div>
                            </div>
                        </a>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-blue-300/60 mb-2">Name</label>
                                <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-blue-500/5 border border-blue-500/20 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-white" placeholder="Your name" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-blue-300/60 mb-2">Email</label>
                                <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-blue-500/5 border border-blue-500/20 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-white" placeholder="your@email.com" required />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-blue-300/60 mb-2">Message</label>
                            <textarea id="message" rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 bg-blue-500/5 border border-blue-500/20 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-white resize-none" placeholder="Your message..." required />
                        </div>
                        <button type="submit" className="btn-primary w-full md:w-auto">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
