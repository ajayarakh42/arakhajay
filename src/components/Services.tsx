export default function Services() {
    return (
        <section className="py-24 bg-[#0f141d]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Core Expertise</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">What I Do</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Service 1 */}
                    <div className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all group">
                        <span className="material-symbols-outlined text-primary text-4xl mb-6 group-hover:scale-110 transition-transform">monitoring</span>
                        <h4 className="text-xl font-bold text-white mb-3">ML & Risk Modeling</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">Building robust credit risk engines and fraud detection systems with high explainability.</p>
                    </div>
                    {/* Service 2 */}
                    <div className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all group">
                        <span className="material-symbols-outlined text-primary text-4xl mb-6 group-hover:scale-110 transition-transform">neurology</span>
                        <h4 className="text-xl font-bold text-white mb-3">GenAI & RAG</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">Architecting retrieval systems that leverage LLMs for complex document analysis.</p>
                    </div>
                    {/* Service 3 */}
                    <div className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all group">
                        <span className="material-symbols-outlined text-primary text-4xl mb-6 group-hover:scale-110 transition-transform">smart_toy</span>
                        <h4 className="text-xl font-bold text-white mb-3">Agentic AI</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">Developing autonomous AI agents capable of multi-step reasoning and tool execution.</p>
                    </div>
                    {/* Service 4 */}
                    <div className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all group">
                        <span className="material-symbols-outlined text-primary text-4xl mb-6 group-hover:scale-110 transition-transform">cloud_sync</span>
                        <h4 className="text-xl font-bold text-white mb-3">Enterprise MLOps</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">Designing end-to-end model lifecycles on Azure and Databricks platforms.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
