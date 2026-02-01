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

// BIGGER SIZES
const INNER_RADIUS = 120;
const MIDDLE_RADIUS = 230;
const OUTER_RADIUS = 350;
const CENTER = 400;

export default function SkillsSection() {
    return (
        <section id="skills" className="py-24 px-6 relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="section-title">Skills & <span className="gradient-text">Technologies</span></h2>
                    <p className="section-subtitle mx-auto">The tools I use to bring ideas to life</p>
                </div>

                {/* Spinning Orbit with Node Lines - BIGGER */}
                <div className="flex justify-center items-center mb-12 overflow-visible">
                    <div className="relative" style={{ width: '800px', height: '800px' }}>

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

                        {/* Center - Glowing orb */}
                        <div className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center z-20 shadow-2xl shadow-blue-500/60" style={{ left: CENTER - 40, top: CENTER - 40 }}>
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>

                        {/* Inner ring */}
                        <div className="absolute rounded-full border-2 border-blue-500/40" style={{ width: INNER_RADIUS * 2, height: INNER_RADIUS * 2, left: CENTER - INNER_RADIUS, top: CENTER - INNER_RADIUS }} />
                        <div className="absolute" style={{ width: INNER_RADIUS * 2, height: INNER_RADIUS * 2, left: CENTER - INNER_RADIUS, top: CENTER - INNER_RADIUS, animation: 'spin 20s linear infinite' }}>
                            {innerRing.map((skill, index) => {
                                const angle = (index * 360) / innerRing.length - 90;
                                const radians = (angle * Math.PI) / 180;
                                const x = INNER_RADIUS + Math.cos(radians) * INNER_RADIUS;
                                const y = INNER_RADIUS + Math.sin(radians) * INNER_RADIUS;
                                const IconComponent = skill.icon;
                                return (
                                    <a key={skill.name} href={skill.url} target="_blank" rel="noopener noreferrer"
                                        className="absolute w-16 h-16 rounded-xl bg-[rgba(10,10,15,0.95)] border-2 border-blue-500/50 flex items-center justify-center hover:border-blue-400 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/40 transition-all cursor-pointer group z-10"
                                        style={{ left: x - 32, top: y - 32, animation: 'counter-spin 20s linear infinite' }}>
                                        <IconComponent className="w-8 h-8" style={{ color: skill.color }} />
                                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-blue-950/95 border border-blue-500/30 rounded-lg text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30">{skill.name}</div>
                                    </a>
                                );
                            })}
                        </div>

                        {/* Middle ring */}
                        <div className="absolute rounded-full border border-blue-500/25" style={{ width: MIDDLE_RADIUS * 2, height: MIDDLE_RADIUS * 2, left: CENTER - MIDDLE_RADIUS, top: CENTER - MIDDLE_RADIUS }} />
                        <div className="absolute" style={{ width: MIDDLE_RADIUS * 2, height: MIDDLE_RADIUS * 2, left: CENTER - MIDDLE_RADIUS, top: CENTER - MIDDLE_RADIUS, animation: 'counter-spin 30s linear infinite' }}>
                            {middleRing.map((skill, index) => {
                                const angle = (index * 360) / middleRing.length - 90;
                                const radians = (angle * Math.PI) / 180;
                                const x = MIDDLE_RADIUS + Math.cos(radians) * MIDDLE_RADIUS;
                                const y = MIDDLE_RADIUS + Math.sin(radians) * MIDDLE_RADIUS;
                                const IconComponent = skill.icon;
                                return (
                                    <a key={skill.name} href={skill.url} target="_blank" rel="noopener noreferrer"
                                        className="absolute w-14 h-14 rounded-lg bg-[rgba(10,10,15,0.95)] border border-blue-500/40 flex items-center justify-center hover:border-blue-400 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 transition-all cursor-pointer group z-10"
                                        style={{ left: x - 28, top: y - 28, animation: 'spin 30s linear infinite' }}>
                                        <IconComponent className="w-7 h-7" style={{ color: skill.color }} />
                                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-blue-950/95 border border-blue-500/30 rounded-lg text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30">{skill.name}</div>
                                    </a>
                                );
                            })}
                        </div>

                        {/* Outer ring */}
                        <div className="absolute rounded-full border border-blue-500/15" style={{ width: OUTER_RADIUS * 2, height: OUTER_RADIUS * 2, left: CENTER - OUTER_RADIUS, top: CENTER - OUTER_RADIUS }} />
                        <div className="absolute" style={{ width: OUTER_RADIUS * 2, height: OUTER_RADIUS * 2, left: CENTER - OUTER_RADIUS, top: CENTER - OUTER_RADIUS, animation: 'spin 40s linear infinite' }}>
                            {outerRing.map((skill, index) => {
                                const angle = (index * 360) / outerRing.length - 90;
                                const radians = (angle * Math.PI) / 180;
                                const x = OUTER_RADIUS + Math.cos(radians) * OUTER_RADIUS;
                                const y = OUTER_RADIUS + Math.sin(radians) * OUTER_RADIUS;
                                const IconComponent = skill.icon;
                                return (
                                    <a key={skill.name} href={skill.url} target="_blank" rel="noopener noreferrer"
                                        className="absolute w-12 h-12 rounded-lg bg-[rgba(10,10,15,0.95)] border border-blue-500/30 flex items-center justify-center hover:border-blue-400 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 transition-all cursor-pointer group z-10"
                                        style={{ left: x - 24, top: y - 24, animation: 'counter-spin 40s linear infinite' }}>
                                        <IconComponent className="w-6 h-6" style={{ color: skill.color }} />
                                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-blue-950/95 border border-blue-500/30 rounded-lg text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30">{skill.name}</div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Languages section */}
                <div className="glass-card p-6 text-center max-w-md mx-auto border-blue-500/20">
                    <h3 className="text-lg font-semibold text-white mb-4">🌍 Languages</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {['English (Fluent)', 'Romanian (Fluent)', 'Spanish (Fluent)'].map((lang) => (
                            <span key={lang} className="px-4 py-2 text-sm bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/30">
                                {lang}
                            </span>
                        ))}
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
