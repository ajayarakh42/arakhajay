export default function ContactFooter() {
    return (
        <footer className="bg-primary pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 border-b border-white/20 pb-20 mb-12">
                    <div className="text-center md:text-left">
                        <h3 className="text-white text-4xl md:text-6xl font-black mb-6">Let's build something<br />smarter together.</h3>
                        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-white/80">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined">mail</span>
                                <span>hello@datascience.portfolio</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined">location_on</span>
                                <span>Pune, India</span>
                            </div>
                        </div>
                    </div>
                    <button className="bg-white text-primary px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-xl cursor-pointer">
                        Get In Touch
                    </button>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3 text-white">
                        <span className="material-symbols-outlined">analytics</span>
                        <span className="font-bold uppercase tracking-widest text-sm">DS Portfolio © {new Date().getFullYear()}</span>
                    </div>
                    <div className="flex gap-8">
                        <a className="text-white/70 hover:text-white transition-colors" href="#">LinkedIn</a>
                        <a className="text-white/70 hover:text-white transition-colors" href="#">GitHub</a>
                        <a className="text-white/70 hover:text-white transition-colors" href="#">Twitter</a>
                        <a className="text-white/70 hover:text-white transition-colors" href="#">Kaggle</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
