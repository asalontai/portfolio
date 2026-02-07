'use client';

import {
    SiReact, SiPython, SiTypescript, SiNextdotjs, SiAmazonwebservices, SiNodedotjs,
    SiAngular, SiFastapi, SiPostgresql, SiDocker, SiFirebase,
    SiJavascript, SiFlask, SiScikitlearn, SiNumpy, SiPandas, SiScipy,
    SiGithub, SiGitlab, SiVercel, SiSupabase, SiExpo
} from 'react-icons/si';
import { FaJava, FaDatabase, FaReact, FaLink, FaCloud } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';

// Inner ring - Core languages
const innerRing = [
    { name: 'Python', icon: SiPython, color: '#3776AB', url: 'https://python.org' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', url: 'https://typescriptlang.org' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'Java', icon: FaJava, color: '#ED8B00', url: 'https://java.com' },
    { name: 'SQL', icon: FaDatabase, color: '#4479A1', url: 'https://www.mysql.com' },
    { name: 'C#', icon: TbBrandCSharp, color: '#512BD4', url: 'https://docs.microsoft.com/en-us/dotnet/csharp/' },
];

// Middle ring - Frameworks
const middleRing = [
    { name: 'React', icon: SiReact, color: '#61DAFB', url: 'https://react.dev' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', url: 'https://nextjs.org' },
    { name: 'Angular', icon: SiAngular, color: '#DD0031', url: 'https://angular.dev' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933', url: 'https://nodejs.org' },
    { name: 'FastAPI', icon: SiFastapi, color: '#009688', url: 'https://fastapi.tiangolo.com' },
    { name: 'Flask', icon: SiFlask, color: '#ffffff', url: 'https://flask.palletsprojects.com' },
    { name: 'LangChain', icon: FaLink, color: '#1C3C3C', url: 'https://langchain.com' },
    { name: 'React Native', icon: FaReact, color: '#61DAFB', url: 'https://reactnative.dev' },
    { name: 'Expo', icon: SiExpo, color: '#ffffff', url: 'https://expo.dev' },
    { name: 'Scikit-Learn', icon: SiScikitlearn, color: '#F7931E', url: 'https://scikit-learn.org' },
];

// Outer ring - Cloud & Tools
const outerRing = [
    { name: 'AWS', icon: SiAmazonwebservices, color: '#FF9900', url: 'https://aws.amazon.com' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', url: 'https://firebase.google.com' },
    { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E', url: 'https://supabase.com' },
    { name: 'Vercel', icon: SiVercel, color: '#ffffff', url: 'https://vercel.com' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED', url: 'https://docker.com' },
    { name: 'GitHub', icon: SiGithub, color: '#ffffff', url: 'https://github.com' },
    { name: 'GitLab', icon: SiGitlab, color: '#FC6D26', url: 'https://gitlab.com' },
    { name: 'NumPy', icon: SiNumpy, color: '#013243', url: 'https://numpy.org' },
    { name: 'Pandas', icon: SiPandas, color: '#150458', url: 'https://pandas.pydata.org' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', url: 'https://postgresql.org' },
    { name: 'Pinecone', icon: FaCloud, color: '#ffffff', url: 'https://pinecone.io' },
    { name: 'SciPy', icon: SiScipy, color: '#8CAAE6', url: 'https://scipy.org' },
];

// Sizes for the right side orbit
const INNER_RADIUS = 120;
const MIDDLE_RADIUS = 220;
const OUTER_RADIUS = 330;
const CENTER = 370; // Half of 740px container

export default function SkillsSection() {
    return (
        <section id="skills" className="py-24 px-6 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="section-title">Skills & <span className="gradient-text">Technologies</span></h2>
                    <p className="section-subtitle mx-auto">The tools I use to bring ideas to life</p>
                </div>

                <div className="flex flex-col lg:flex-row items-start lg:items-center" style={{ gap: '120px' }}>
                    {/* Left side - Description */}
                    <div className="space-y-6 lg:w-[550px] flex-shrink-0 lg:-ml-32">
                        <div className="glass-card p-8 border-blue-500/10 hover:border-blue-500/20 transition-all">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white">Languages</h3>
                            </div>
                            <p className="text-[#a1a1aa] leading-relaxed mb-4">
                                Proficient in <span className="text-blue-400 font-semibold">Python</span>, <span className="text-blue-400 font-semibold">TypeScript</span>, and <span className="text-blue-400 font-semibold">JavaScript</span> for full-stack development. Experienced with <span className="text-blue-400 font-semibold">Java</span>, <span className="text-blue-400 font-semibold">C#</span>, and <span className="text-blue-400 font-semibold">SQL</span> for backend systems and data management.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {innerRing.map((skill) => (
                                    <a key={skill.name} href={skill.url} target="_blank" rel="noopener noreferrer" className="group relative px-3 py-1.5 text-xs font-semibold bg-blue-500/10 text-blue-300 rounded-lg border border-blue-500/20 hover:border-blue-400 hover:bg-blue-500/20 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all cursor-pointer">
                                        {skill.name}
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-blue-900/95 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Visit {skill.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="glass-card p-8 border-cyan-500/10 hover:border-cyan-500/20 transition-all">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white">Frameworks</h3>
                            </div>
                            <p className="text-[#a1a1aa] leading-relaxed mb-4">
                                Building modern web apps with <span className="text-cyan-400 font-semibold">React</span>, <span className="text-cyan-400 font-semibold">Next.js</span>, and <span className="text-cyan-400 font-semibold">Angular</span>. Backend APIs with <span className="text-cyan-400 font-semibold">FastAPI</span> and <span className="text-cyan-400 font-semibold">Node.js</span>. Mobile apps with <span className="text-cyan-400 font-semibold">React Native</span> and <span className="text-cyan-400 font-semibold">Expo</span>.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {middleRing.map((skill) => (
                                    <a key={skill.name} href={skill.url} target="_blank" rel="noopener noreferrer" className="group relative px-3 py-1.5 text-xs font-semibold bg-cyan-500/10 text-cyan-300 rounded-lg border border-cyan-500/20 hover:border-cyan-400 hover:bg-cyan-500/20 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer">
                                        {skill.name}
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-cyan-900/95 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Visit {skill.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="glass-card p-8 border-purple-500/10 hover:border-purple-500/20 transition-all">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white">Cloud & Tools</h3>
                            </div>
                            <p className="text-[#a1a1aa] leading-relaxed mb-4">
                                Deploying on <span className="text-purple-400 font-semibold">AWS</span> (Lambda, S3, Bedrock), <span className="text-purple-400 font-semibold">Vercel</span>, and <span className="text-purple-400 font-semibold">Firebase</span>. Data science with <span className="text-purple-400 font-semibold">NumPy</span>, <span className="text-purple-400 font-semibold">Pandas</span>, and <span className="text-purple-400 font-semibold">Scikit-Learn</span>.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {outerRing.map((skill) => (
                                    <a key={skill.name} href={skill.url} target="_blank" rel="noopener noreferrer" className="group relative px-3 py-1.5 text-xs font-semibold bg-purple-500/10 text-purple-300 rounded-lg border border-purple-500/20 hover:border-purple-400 hover:bg-purple-500/20 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 transition-all cursor-pointer">
                                        {skill.name}
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-purple-900/95 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Visit {skill.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right side - Spinning Orbit */}
                    <div className="flex justify-end items-center overflow-visible ml-auto lg:-mr-48">
                        <div className="relative" style={{ width: '740px', height: '740px' }}>

                            {/* SVG for connection lines - Inner */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ animation: 'spin 20s linear infinite' }}>
                                {innerRing.map((_, index) => {
                                    const angle = (index * 360) / innerRing.length - 90;
                                    const radians = (angle * Math.PI) / 180;
                                    return (
                                        <line key={`i-${index}`} x1={CENTER} y1={CENTER} x2={CENTER + Math.cos(radians) * INNER_RADIUS} y2={CENTER + Math.sin(radians) * INNER_RADIUS} stroke="rgba(59, 130, 246, 0.5)" strokeWidth="2" />
                                    );
                                })}
                            </svg>

                            {/* SVG for connection lines - Middle */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ animation: 'counter-spin 30s linear infinite' }}>
                                {middleRing.map((_, index) => {
                                    const angle = (index * 360) / middleRing.length - 90;
                                    const radians = (angle * Math.PI) / 180;
                                    return (
                                        <line key={`m-${index}`} x1={CENTER} y1={CENTER} x2={CENTER + Math.cos(radians) * MIDDLE_RADIUS} y2={CENTER + Math.sin(radians) * MIDDLE_RADIUS} stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" />
                                    );
                                })}
                            </svg>

                            {/* SVG for connection lines - Outer */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ animation: 'spin 40s linear infinite' }}>
                                {outerRing.map((_, index) => {
                                    const angle = (index * 360) / outerRing.length - 90;
                                    const radians = (angle * Math.PI) / 180;
                                    return (
                                        <line key={`o-${index}`} x1={CENTER} y1={CENTER} x2={CENTER + Math.cos(radians) * OUTER_RADIUS} y2={CENTER + Math.sin(radians) * OUTER_RADIUS} stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
                                    );
                                })}
                            </svg>



                            {/* Inner ring */}
                            <div className="absolute rounded-full border-2 border-blue-500/40" style={{ width: INNER_RADIUS * 2, height: INNER_RADIUS * 2, left: CENTER - INNER_RADIUS, top: CENTER - INNER_RADIUS, zIndex: 30 }} />
                            <div className="absolute" style={{ width: INNER_RADIUS * 2, height: INNER_RADIUS * 2, left: CENTER - INNER_RADIUS, top: CENTER - INNER_RADIUS, animation: 'spin 20s linear infinite', zIndex: 30 }}>
                                {innerRing.map((skill, index) => {
                                    const angle = (index * 360) / innerRing.length - 90;
                                    const radians = (angle * Math.PI) / 180;
                                    const x = INNER_RADIUS + Math.cos(radians) * INNER_RADIUS;
                                    const y = INNER_RADIUS + Math.sin(radians) * INNER_RADIUS;
                                    const IconComponent = skill.icon;
                                    return (
                                        <a key={skill.name} href={skill.url} target="_blank" rel="noopener noreferrer"
                                            className="absolute w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center hover:bg-white/20 hover:border-white/40 hover:scale-110 hover:shadow-xl transition-all cursor-pointer group"
                                            style={{ left: x - 24, top: y - 24, animation: 'counter-spin 20s linear infinite' }}>
                                            <IconComponent className="w-6 h-6" style={{ color: skill.color, filter: 'brightness(1.5)' }} />
                                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-blue-950/95 border border-blue-500/30 rounded text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30">{skill.name}</div>
                                        </a>
                                    );
                                })}
                            </div>

                            {/* Middle ring */}
                            <div className="absolute rounded-full border border-blue-500/25" style={{ width: MIDDLE_RADIUS * 2, height: MIDDLE_RADIUS * 2, left: CENTER - MIDDLE_RADIUS, top: CENTER - MIDDLE_RADIUS, zIndex: 20 }} />
                            <div className="absolute" style={{ width: MIDDLE_RADIUS * 2, height: MIDDLE_RADIUS * 2, left: CENTER - MIDDLE_RADIUS, top: CENTER - MIDDLE_RADIUS, animation: 'counter-spin 30s linear infinite', zIndex: 20 }}>
                                {middleRing.map((skill, index) => {
                                    const angle = (index * 360) / middleRing.length - 90;
                                    const radians = (angle * Math.PI) / 180;
                                    const x = MIDDLE_RADIUS + Math.cos(radians) * MIDDLE_RADIUS;
                                    const y = MIDDLE_RADIUS + Math.sin(radians) * MIDDLE_RADIUS;
                                    const IconComponent = skill.icon;
                                    return (
                                        <a key={skill.name} href={skill.url} target="_blank" rel="noopener noreferrer"
                                            className="absolute w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 hover:border-white/40 hover:scale-110 hover:shadow-lg transition-all cursor-pointer group"
                                            style={{ left: x - 20, top: y - 20, animation: 'spin 30s linear infinite' }}>
                                            <IconComponent className="w-5 h-5" style={{ color: skill.color, filter: 'brightness(1.5)' }} />
                                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-blue-950/95 border border-blue-500/30 rounded text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30">{skill.name}</div>
                                        </a>
                                    );
                                })}
                            </div>

                            {/* Outer ring */}
                            <div className="absolute rounded-full border border-blue-500/15" style={{ width: OUTER_RADIUS * 2, height: OUTER_RADIUS * 2, left: CENTER - OUTER_RADIUS, top: CENTER - OUTER_RADIUS, zIndex: 10 }} />
                            <div className="absolute" style={{ width: OUTER_RADIUS * 2, height: OUTER_RADIUS * 2, left: CENTER - OUTER_RADIUS, top: CENTER - OUTER_RADIUS, animation: 'spin 40s linear infinite', zIndex: 10 }}>
                                {outerRing.map((skill, index) => {
                                    const angle = (index * 360) / outerRing.length - 90;
                                    const radians = (angle * Math.PI) / 180;
                                    const x = OUTER_RADIUS + Math.cos(radians) * OUTER_RADIUS;
                                    const y = OUTER_RADIUS + Math.sin(radians) * OUTER_RADIUS;
                                    const IconComponent = skill.icon;
                                    return (
                                        <a key={skill.name} href={skill.url} target="_blank" rel="noopener noreferrer"
                                            className="absolute w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 hover:border-white/40 hover:scale-110 hover:shadow-lg transition-all cursor-pointer group"
                                            style={{ left: x - 18, top: y - 18, animation: 'counter-spin 40s linear infinite' }}>
                                            <IconComponent className="w-4 h-4" style={{ color: skill.color, filter: 'brightness(1.5)' }} />
                                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-blue-950/95 border border-blue-500/30 rounded text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30">{skill.name}</div>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes counter-spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(-360deg); }
                }
            `}</style>
        </section>
    );
}
