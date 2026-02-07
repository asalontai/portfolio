'use client';

import { useEffect, useState } from 'react';

const projects = [
    {
        title: 'AWS Analytics Agent',
        description:
            'Built an AWS Strands-based agent that generates AWS CLI commands for financial data retrieval. Developed a polished Next.js frontend to trigger commands and view results. Automated cost analysis across AWS services, reducing reporting time by 50% and saving ~$1,000/month.',
        technologies: ['Next.js', 'TypeScript', 'AWS Strands', 'Bedrock', 'Lambda', 'S3', 'Python', 'FastAPI'],
        liveUrl: '#',
        githubUrl: 'https://github.com/asalontai',
        featured: true,
        gradient: 'from-blue-500/20 via-cyan-500/20 to-blue-600/20',
        iconType: 'cloud',
    },
    {
        title: 'InfinitiMath',
        description:
            'Built an AI platform that solves linear algebra problems, providing step-by-step, accurate solutions. Developed backend with FastAPI and LangChain to orchestrate problem parsing, solving, and explanations. Used by 10+ active users, with plans to expand into additional college math domains.',
        technologies: ['Next.js', 'TypeScript', 'Python', 'FastAPI', 'NumPy', 'SciPy', 'SymPy', 'LangChain'],
        liveUrl: '#',
        githubUrl: 'https://github.com/asalontai',
        featured: true,
        gradient: 'from-purple-500/20 via-blue-500/20 to-cyan-500/20',
        iconType: 'math',
    },
    {
        title: 'GRIEF Malware Detection Research',
        description:
            'Implemented ML models for malware detection in Android vault apps. Engineered feature sets including binary keyword vectors, Doc2Vec embeddings, and permission vectors. Achieved 90% detection accuracy with Logistic Regression + Doc2Vec.',
        technologies: ['Python', 'Scikit-Learn', 'Doc2Vec', 'NumPy', 'Pandas'],
        liveUrl: '#',
        githubUrl: 'https://github.com/asalontai',
        featured: false,
        gradient: 'from-red-500/20 via-orange-500/20 to-yellow-500/20',
        iconType: 'security',
    },
    {
        title: 'Sports Analytics Pipeline',
        description:
            'Python pipelines integrating Blast & Trackman data for Georgia Tech baseball. Visual trend reports for coaches to identify roster strengths. Computer vision model for basketball defensive recognition with ~75% accuracy.',
        technologies: ['Python', 'Pandas', 'RoboFlow', 'Data Visualization'],
        liveUrl: '#',
        githubUrl: 'https://github.com/asalontai',
        featured: false,
        gradient: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20',
        iconType: 'chart',
    },
];

// Icon components
const ProjectIcon = ({ type }: { type: string }) => {
    switch (type) {
        case 'cloud':
            return (
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
            );
        case 'math':
            return (
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            );
        case 'security':
            return (
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            );
        case 'chart':
            return (
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            );
        default:
            return (
                <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            );
    }
};

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

export default function ProjectsSection() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section id="projects" className="py-24 px-6 relative overflow-hidden">
            {/* Background gradient that blends with adjacent sections */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/15 to-transparent" />

            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[180px]" />
                <div className="absolute bottom-1/3 -right-32 w-[450px] h-[450px] bg-cyan-500/8 rounded-full blur-[150px]" />
            </div>

            {/* Spinning orbits - positioned at edges */}
            {mounted && (
                <>
                    <SpinningOrbit className="-top-12 -left-12 opacity-35" size="xl" speed="slow" />
                    <SpinningOrbit className="top-1/3 -right-16 opacity-30" size="lg" speed="normal" />
                    <SpinningOrbit className="-bottom-12 -left-8 opacity-25" size="lg" speed="slow" />
                    <SpinningOrbit className="bottom-1/4 -right-12 opacity-30" size="md" speed="fast" />
                </>
            )}

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
                    <p className="section-subtitle mx-auto">AI-powered tools and data-driven solutions</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group glass-card overflow-hidden border-blue-500/10 hover:border-blue-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10"
                        >
                            <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden flex items-center justify-center`}>
                                <div className="absolute inset-0 opacity-30">
                                    <div className="absolute inset-0" style={{
                                        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)',
                                        backgroundSize: '20px 20px',
                                    }} />
                                </div>

                                <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
                                <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />

                                <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                                    <ProjectIcon type={project.iconType} />
                                </div>

                                {project.featured && (
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-xs font-semibold text-white shadow-lg">
                                        Featured
                                    </div>
                                )}
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">{project.title}</h3>
                                <p className="text-[#a1a1aa] text-sm leading-relaxed mb-5">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.slice(0, 5).map((tech) => (
                                        <span key={tech} className="px-2.5 py-1 text-xs font-semibold bg-blue-500/10 text-blue-300/80 rounded-full border border-blue-500/20">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 5 && (
                                        <span className="px-2.5 py-1 text-xs font-semibold bg-blue-500/10 text-blue-300/80 rounded-full border border-blue-500/20">
                                            +{project.technologies.length - 5} more
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center gap-4">
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-400/40 transition-all">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/asalontai" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:scale-105">
                        View All Projects
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
