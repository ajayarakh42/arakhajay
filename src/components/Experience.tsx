export default function Experience() {
    return (
        <section className="py-24 bg-background-dark" id="experience">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Career Path</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">Experience Timeline</h3>
                </div>
                <div className="relative border-l-2 border-white/10 pl-8 ml-4">
                    {/* Role 1 */}
                    <div className="mb-12 relative">
                        <div className="absolute -left-[41px] top-0 size-5 bg-primary rounded-full ring-4 ring-primary/20"></div>
                        <span className="text-primary font-bold text-sm">2023 — 2025</span>
                        <h4 className="text-xl font-bold text-white mt-1">Data Scientist (Unit Manager)</h4>
                        <p className="text-slate-300 font-medium">Bajaj Finserv</p>
                        <ul className="mt-4 space-y-3 text-slate-400 text-sm">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                                Spearheaded the development of a RAG-based Generative AI ecosystem for automated document processing and compliance checking.
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                                Orchestrated the deployment of large-scale predictive models for credit risk assessment using Azure ML and Databricks.
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                                Implemented agentic workflows using LangGraph to automate complex decision-making processes in customer onboarding.
                            </li>
                        </ul>
                    </div>

                    {/* Role 2 */}
                    <div className="mb-12 relative">
                        <div className="absolute -left-[41px] top-0 size-5 bg-white/10 rounded-full ring-4 ring-white/5"></div>
                        <span className="text-slate-500 font-bold text-sm">2022 — 2023</span>
                        <h4 className="text-xl font-bold text-white mt-1">Data Scientist (Unit Manager)</h4>
                        <p className="text-slate-300 font-medium">Bajaj Finserv Ventures Limited</p>
                        <ul className="mt-4 space-y-3 text-slate-400 text-sm">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-white/20 text-lg shrink-0">check_circle</span>
                                Established the foundational data science infrastructure and MLOps pipelines on Azure.
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-white/20 text-lg shrink-0">check_circle</span>
                                Developed investment thesis validation models using NLP techniques to analyze market trends and competitor landscapes.
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-white/20 text-lg shrink-0">check_circle</span>
                                Engineered a recommendation system for personalized financial product offerings, increasing engagement by 35%.
                            </li>
                        </ul>
                    </div>

                    {/* Role 3 */}
                    <div className="mb-12 relative">
                        <div className="absolute -left-[41px] top-0 size-5 bg-white/10 rounded-full ring-4 ring-white/5"></div>
                        <span className="text-slate-500 font-bold text-sm">2021 — 2023</span>
                        <h4 className="text-xl font-bold text-white mt-1">Data Scientist (Manager)</h4>
                        <p className="text-slate-300 font-medium">Bajaj Finserv</p>
                        <ul className="mt-4 space-y-3 text-slate-400 text-sm">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-white/20 text-lg shrink-0">check_circle</span>
                                Spearheaded the migration of legacy models to modern Python-based stacks, optimizing performance and scalability.
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-white/20 text-lg shrink-0">check_circle</span>
                                Built and deployed churn prediction models that reduced customer attrition by 18% through proactive retention strategies.
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-white/20 text-lg shrink-0">check_circle</span>
                                Mentored a team of junior data scientists and fostered a culture of innovation and code quality.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
