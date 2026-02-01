const experiences = [
    {
        title: 'Software Engineering Co-op',
        company: 'Delta Air Lines',
        companyUrl: 'https://delta.com',
        period: 'Jan 2025 - Dec 2025',
        description:
            'Built an AWS analytics agent to fetch financial data, reducing reporting time by 50% and saving ~$1,000/month. Delivered a Next.js frontend for database and RAG agents, streamlining access for 20+ Delta teams. Developed an Angular tool with one-click role data download, helping 30 admins retrieve info 80% faster.',
        technologies: ['Angular', 'Next.js', 'TypeScript', 'AWS Strands', 'Bedrock', 'Lambda', 'S3'],
    },
    {
        title: 'Data Analyst',
        company: 'VIP Georgia Tech (Sports Performance)',
        companyUrl: 'https://vip.gatech.edu',
        period: 'Aug 2024 - Dec 2025',
        description:
            'Built Python pipelines integrating Blast & Trackman data for 15+ Georgia Tech baseball players. Generated visual trend reports, helping coaches identify roster strengths and weaknesses. Labeled 30+ basketball plays to train a computer vision model, boosting defensive recognition accuracy to ~75%.',
        technologies: ['Python', 'RoboFlow', 'Pandas', 'Computer Vision'],
    },
    {
        title: 'Research Assistant',
        company: 'Georgia State University',
        companyUrl: 'https://cs.gsu.edu',
        period: 'Jan 2023 - Dec 2023',
        description:
            'Researched and implemented ML models for malware app detection in Android under Dr. Esra Akbas. Improved baseline detection accuracy from ~70% → 86%; achieved 90% with Logistic Regression + Doc2Vec. Co-authored peer-reviewed paper: "GRIEF in the Gray Zone: Identifying and Analyzing Vault Apps".',
        technologies: ['Python', 'Scikit-Learn', 'NumPy', 'Pandas', 'Doc2Vec'],
    },
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
                    <p className="section-subtitle mx-auto">From research to enterprise software engineering</p>
                </div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="glass-card p-6 md:p-8 border-blue-500/10 hover:border-blue-500/20">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                                        <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                                            {exp.company} ↗
                                        </a>
                                    </div>
                                    <span className="text-sm text-blue-300/60 font-mono">{exp.period}</span>
                                </div>
                                <p className="text-[#a1a1aa] leading-relaxed mb-4">{exp.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech) => (
                                        <span key={tech} className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
