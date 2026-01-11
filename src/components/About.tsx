export default function About() {
    return (
        <section className="py-24 bg-background-dark" id="about">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">The Foundation</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">4+ Years of Engineering Excellence</h3>
                        <p className="text-slate-400 text-lg leading-relaxed mb-6">
                            I bridge the gap between complex research and production-grade software. My focus is on developing robust AI systems that don't just exist in notebooks, but scale to serve millions of users in high-stakes financial environments.
                        </p>
                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                <div className="text-3xl font-black text-white mb-1">4+</div>
                                <div className="text-slate-500 text-sm uppercase font-bold tracking-tighter">Years Exp.</div>
                            </div>
                            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                <div className="text-3xl font-black text-white mb-1">15+</div>
                                <div className="text-slate-500 text-sm uppercase font-bold tracking-tighter">Models in Prod</div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="flex gap-6 group">
                            <div className="size-12 shrink-0 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                <span className="material-symbols-outlined">trending_up</span>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">Philosophy: ROI First</h4>
                                <p className="text-slate-400">I believe in building models that move metrics. Accuracy is important, but business impact is what defines a project's success.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 group">
                            <div className="size-12 shrink-0 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                <span className="material-symbols-outlined">settings_suggest</span>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">Scalable MLOps</h4>
                                <p className="text-slate-400">Automation and observability are non-negotiable. I specialize in building self-healing pipelines on Azure and Databricks.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
