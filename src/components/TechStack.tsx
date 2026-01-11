export default function TechStack() {
    return (
        <section className="py-24 bg-background-dark" id="stack">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Tools of Trade</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-16">Technology Stack</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest opacity-50">Languages</h4>
                        <div className="flex flex-wrap justify-center gap-3">
                            <span className="px-4 py-2 bg-white/5 rounded-lg text-white font-medium border border-white/10">Python</span>
                            <span className="px-4 py-2 bg-white/5 rounded-lg text-white font-medium border border-white/10">SQL</span>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest opacity-50">AI / ML</h4>
                        <div className="flex flex-wrap justify-center gap-3">
                            <span className="px-4 py-2 bg-white/5 rounded-lg text-white font-medium border border-white/10">Scikit-learn</span>
                            <span className="px-4 py-2 bg-white/5 rounded-lg text-white font-medium border border-white/10">LangChain</span>
                            <span className="px-4 py-2 bg-white/5 rounded-lg text-white font-medium border border-white/10">LangGraph</span>
                            <span className="px-4 py-2 bg-white/5 rounded-lg text-white font-medium border border-white/10">LangSmith</span>
                            <span className="px-4 py-2 bg-white/5 rounded-lg text-white font-medium border border-white/10">LangFlow</span>
                            <span className="px-4 py-2 bg-white/5 rounded-lg text-white font-medium border border-white/10">n8n Workflow</span>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest opacity-50">Data</h4>
                        <div className="flex flex-wrap justify-center gap-3">
                            <span className="px-4 py-2 bg-white/5 rounded-lg text-white font-medium border border-white/10">Pandas</span>
                            <span className="px-4 py-2 bg-white/5 rounded-lg text-white font-medium border border-white/10">T-SQL</span>
                            <span className="px-4 py-2 bg-white/5 rounded-lg text-white font-medium border border-white/10">MySQL</span>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest opacity-50">Cloud / Ops</h4>
                        <div className="flex flex-wrap justify-center gap-3">
                            <span className="px-4 py-2 bg-white/5 rounded-lg text-white font-medium border border-white/10">Azure Services</span>
                            <span className="px-4 py-2 bg-white/5 rounded-lg text-white font-medium border border-white/10">Databricks</span>
                            <span className="px-4 py-2 bg-white/5 rounded-lg text-white font-medium border border-white/10">Azure AI Foundry</span>
                            <span className="px-4 py-2 bg-white/5 rounded-lg text-white font-medium border border-white/10">Docker</span>
                            <span className="px-4 py-2 bg-white/5 rounded-lg text-white font-medium border border-white/10">Azure Kubernetes Cluster</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
