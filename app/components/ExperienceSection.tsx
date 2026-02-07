'use client';

import { useEffect, useState } from 'react';

const experiences = [
    {
        title: 'Software Engineering Co-op',
        company: 'Delta Air Lines',
        companyUrl: 'https://delta.com',
        period: 'Jan 2025 - Dec 2025',
        description:
            'Built an AWS analytics agent to fetch financial data, reducing reporting time by 50% and saving ~$1,000/month. Delivered a Next.js frontend for database and RAG agents, streamlining access for 20+ Delta teams.',
        technologies: ['Angular', 'Next.js', 'TypeScript', 'AWS', 'Bedrock'],
    },
    {
        title: 'Data Analyst',
        company: 'VIP Georgia Tech',
        companyUrl: 'https://vip.gatech.edu',
        period: 'Aug 2024 - Present',
        description:
            'Built Python pipelines integrating Blast & Trackman data for 15+ Georgia Tech baseball players. Trained computer vision models for basketball defensive recognition.',
        technologies: ['Python', 'RoboFlow', 'Pandas', 'CV'],
    },
    {
        title: 'Research Assistant',
        company: 'Georgia State University',
        companyUrl: 'https://cs.gsu.edu',
        period: 'Jan 2023 - Dec 2023',
        description:
            'Implemented ML models for malware detection achieving 90% accuracy. Co-authored peer-reviewed paper on vault app analysis.',
        technologies: ['Python', 'Scikit-Learn', 'Doc2Vec'],
    },
];

const education = {
    degree: 'B.S. Computer Science',
    school: 'Georgia Institute of Technology',
    schoolUrl: 'https://gatech.edu',
    period: '2022 - 2026',
    concentration: 'AI & Information Internetworks',
    achievements: ['Dean\'s List', 'VIP Sports Analytics', 'AI Research'],
};

// Spinning orbit component
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

export default function ExperienceSection() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section id="experience" className="py-24 px-6 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent" />

            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-cyan-500/8 rounded-full blur-[120px]" />
            </div>

            {/* Spinning orbits */}
            {mounted && (
                <>
                    <SpinningOrbit className="-top-10 -right-10 opacity-40" size="lg" speed="slow" />
                    <SpinningOrbit className="top-1/4 -left-16 opacity-25" size="md" speed="normal" />
                    <SpinningOrbit className="-bottom-10 -right-16 opacity-30" size="xl" speed="slow" />
                </>
            )}

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="section-title">Experience & <span className="gradient-text">Education</span></h2>
                    <p className="section-subtitle mx-auto">My professional journey and academic background</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Work Experience - Left side (2 columns) */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">Work Experience</h3>
                                <p className="text-sm text-[#a1a1aa]">Professional journey</p>
                            </div>
                        </div>

                        {experiences.map((exp, index) => (
                            <div key={index} className="group relative">
                                {index < experiences.length - 1 && (
                                    <div className="absolute left-5 top-14 bottom-0 w-px bg-gradient-to-b from-blue-500/40 to-transparent" />
                                )}

                                <div className="relative flex gap-4">
                                    <div className="relative z-10 flex-shrink-0">
                                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="flex-1 glass-card p-6 border-blue-500/10 hover:border-blue-400/40 group-hover:shadow-xl group-hover:shadow-blue-500/15 transition-all duration-300 hover:-translate-y-1">
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                                            <div>
                                                <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                                                <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors font-semibold text-sm">
                                                    {exp.company}
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </a>
                                            </div>
                                            <span className="text-xs font-semibold text-blue-300 bg-blue-500/15 px-3 py-1.5 rounded-full whitespace-nowrap border border-blue-500/20">
                                                {exp.period}
                                            </span>
                                        </div>
                                        <p className="text-[#a1a1aa] text-sm leading-relaxed mb-4">{exp.description}</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {exp.technologies.map((tech) => (
                                                <span key={tech} className="px-2.5 py-1 text-xs font-semibold bg-gradient-to-r from-blue-500/15 to-cyan-500/15 text-blue-200 rounded-lg border border-blue-500/25 hover:border-blue-400/50 transition-colors">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Education - Right side (1 column) */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">Education</h3>
                                <p className="text-sm text-[#a1a1aa]">Academic background</p>
                            </div>
                        </div>

                        <div className="glass-card p-6 border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 sticky top-24">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-1">{education.degree}</h4>
                                    <a href={education.schoolUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors font-semibold text-sm">
                                        {education.school}
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-sm">
                                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-[#a1a1aa]">{education.period}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                    <span className="text-[#a1a1aa]">{education.concentration}</span>
                                </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-blue-500/10">
                                <p className="text-xs font-semibold text-blue-300/60 uppercase tracking-wider mb-2">Highlights</p>
                                <div className="flex flex-wrap gap-2">
                                    {education.achievements.map((achievement) => (
                                        <span key={achievement} className="px-2.5 py-1 text-xs font-semibold bg-blue-500/10 text-blue-300 rounded-md border border-blue-500/20">
                                            {achievement}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
