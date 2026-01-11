export default function Experience() {
    return (
        <section className="py-24 bg-background-dark" id="experience">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Career Path</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">Experience Timeline</h3>
                </div>
                <div className="relative border-l-2 border-white/10 pl-8 ml-4">
                    <div className="mb-12 relative">
                        <div className="absolute -left-[41px] top-0 size-5 bg-primary rounded-full ring-4 ring-primary/20"></div>
                        <span className="text-primary font-bold text-sm">2020 — Present</span>
                        <h4 className="text-xl font-bold text-white mt-1">Lead Data Scientist</h4>
                        <p className="text-slate-300 font-medium">Bajaj Finserv</p>
                        <ul className="mt-4 space-y-3 text-slate-400 text-sm">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                                Architected a real-time fraud detection engine reducing losses by 22% ($2M+ annual impact).
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                                Deployed a Generative AI support bot handling 40% of tier-1 customer queries autonomously.
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                                Standardized MLOps workflows across 3 teams, improving deployment speed by 3x.
                            </li>
                        </ul>
                    </div>
                    <div className="mb-12 relative">
                        <div className="absolute -left-[41px] top-0 size-5 bg-white/10 rounded-full ring-4 ring-white/5"></div>
                        <span className="text-slate-500 font-bold text-sm">2018 — 2020</span>
                        <h4 className="text-xl font-bold text-white mt-1">Data Scientist</h4>
                        <p className="text-slate-300 font-medium">Fintech Solutions Ltd.</p>
                        <p className="mt-2 text-slate-400 text-sm">Built propensity models for cross-selling insurance products and improved conversion rates by 15% through precision targeting.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
