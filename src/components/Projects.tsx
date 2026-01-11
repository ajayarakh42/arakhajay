"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "OpenAI QnA Chatbot with File Upload",
        tech: ["OpenAI", "LangChain", "Streamlit"],
        description: "Advanced QnA chatbot supporting TXT, PDF, DOCX uploads. Features model selection, temperature/token control, and a sleek dark-themed UI.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
        link: "https://openai-chatbot-f.streamlit.app/"
    },
    {
        title: "LLM QnA Chatbot (LangChain & OpenAI)",
        tech: ["LangChain", "OpenAI", "PromptEng"],
        description: "Real-time QnA interface allowing dynamic model selection (gpt-4o-mini), parameter tuning, and custom API key integration.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
        link: "https://openai-qna-chatbot.streamlit.app/"
    },
    {
        title: "Groq API High-Speed Chatbot",
        tech: ["Groq API", "LangChain", "HuggingFace"],
        description: "Ultra-fast inference QnA bot using Groq’s API. Integrates prompt templates, memory, and custom document loaders for context-aware answers.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
        link: "https://groq-llm-chatbot-context-history.streamlit.app/"
    },
    {
        title: "FinBot – Financial Chatbot",
        tech: ["LangChain", "HuggingFace"],
        description: "Specialized AI chatbot designed to understand and answer queries related to complex financial documents and FAQs.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Allocation Models (PLCS & SAL)",
        tech: ["Logistic Regression", "Segmentation"],
        description: "ML logistic regression models to optimize delinquency routing, assigning customers to either field or telecalling teams.",
        image: "https://images.unsplash.com/photo-1543286386-2f173f6092ea?q=80&w=2070&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Credit Card Risk Models",
        tech: ["Credit Risk", "Monitoring"],
        description: "Risk of flow models (PDD, PreX, Write-Off) developed to prioritize collection strategies for a base of ~2 million accounts.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Digital Payment Propensity",
        tech: ["Classification", "Digital Collection"],
        description: "Predictive model scoring customer likelihood to pay digitally, improving digital outreach efficiency and cost-savings.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Reporting Automation System",
        tech: ["Python", "Databricks", "Automation"],
        description: "Automated end-to-end reporting pipeline from Outlook to Databricks with email triggers, saving over 10 hours of manual work weekly.",
        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1974&auto=format&fit=crop",
        link: "#"
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
                                <a
                                    className="inline-flex items-center text-white font-bold text-sm gap-2 hover:text-primary transition-colors cursor-pointer"
                                    href={project.link}
                                    target={project.link === "#" ? "_self" : "_blank"}
                                    rel="noopener noreferrer"
                                >
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


