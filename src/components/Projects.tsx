"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "FinBot: AI Wealth Advisor",
        tech: ["LangChain", "FastAPI"],
        description: "An autonomous RAG-based agent that analyzes portfolio distributions and provides real-time investment advice based on market trends.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBL9vY2ArtfLZjQgv5FlwaI3fQXHWtQqV7CP4RrP_Q9q92-FnYpghx-O3UC9UUWhmSSwZnN_lH3keZjGak3kUkAYy-MmVe1hwssuQvrp5hEQtKkqonLowJwWKeQLSV1iKH_Wb53e-Ua08UKPWeKilbeg7CcnvtOeDzYRAU2VFgpTSsk6Uum5zw9eOarrkkUSp7KesK9OA7uA4WjHeDoM9j9u6DdQoSn_3-uGCTx9CvMeK9WIC_LDLzSm0l2An0wBs4S7-rjkxTaUA"
    },
    {
        title: "CreditRisk v2.0",
        tech: ["PyTorch", "Databricks"],
        description: "Deep learning model for multi-factor credit risk assessment, processing over 100k applications daily with Explainable AI (SHAP) modules.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBL8yudM-PTpvU3VLmhN1HH7FAL8lvfCn_dQKv2vSFwkq9--_uAJDb04GkJqUj0smGD9aoMU4A2cEvv_AY-NjU8TK8jY-eSxzSMq2XazMKR7AaopfzhwzsaGj9EuJjJ3jSCWRHCLwZIiR2MGGyibtsevG08GuPjSn_3DmJZIAHU1x1EeqcLPE4WQDMYfkQxJ5hzjquBuwNv1Auyq0ofKe2PTdRnw4cGyK4LJtB3Sv_96_Jdb0IG0hzqZKFmvAx4PQ9n2sw1Ot4xkQ"
    },
    {
        title: "AutoML Pipeline",
        tech: ["Azure", "Terraform"],
        description: "End-to-end automated deployment pipeline that manages the entire lifecycle from data ingestion to model serving on K8s.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASXgv3phAqZ10ReoiIXBgW_m3-kBM3um74Ho0epAZJ11PTtd-tO8yjw7RxVdVxhxLCU4F0lwbTDKWs296R2d4ULUJFky8M_EUR5AX4EK2zPxn45qFSoOdUCPUqTnarUyj8I3hA4N0S1WWvVunG38hzkDCL4G9hkaWh3SCy9l_p1scSuDwua8tPna5NJqNal1w4rCKqaYgqh8e52r8rE9l-nT-RDhzEgx5tzC2-KbGCx5GWWwQl9lm2TiBuJ0ckuaJ2gZFHJGb94g"
    }
];

export default function Projects() {
    return (
        <section className="py-24 bg-[#0f141d]" id="projects">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Portfolio</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h3>
                    </div>
                    <button className="text-primary font-bold flex items-center gap-2 hover:translate-x-1 transition-transform cursor-pointer">
                        View All Projects <span className="material-symbols-outlined">east</span>
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-white/5 flex flex-col"
                        >
                            <div
                                className="aspect-video bg-cover bg-center transition-transform group-hover:scale-105 duration-500"
                                style={{ backgroundImage: `url("${project.image}")` }}
                            ></div>
                            <div className="p-6 flex flex-col grow">
                                <div className="flex gap-2 mb-4">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded font-bold uppercase">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                                <p className="text-slate-400 text-sm mb-6 grow leading-relaxed">
                                    {project.description}
                                </p>
                                <a className="inline-flex items-center text-white font-bold text-sm gap-2 hover:text-primary transition-colors cursor-pointer" href="#">
                                    Case Study <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


